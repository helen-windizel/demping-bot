import sharp from "sharp";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.join(__dirname, "..", "resume-screenshots");
const COMPRESSED_DIR = path.join(SRC_DIR, "compressed");
const PDF_PATH = path.join(SRC_DIR, "Demping-Bot-Portfolio.pdf");

const PORTFOLIO_ORDER = [
  "01-hero-dark-desktop.png",
  "05-how-it-works-dark.png",
  "06-features-dark.png",
  "07-dashboard-preview-dark.png",
  "08-pricing-dark.png",
  "09-faq-dark.png",
  "10-demo-cta-dark.png",
  "12-full-page-dark-desktop.png",
  "13-hero-light-desktop.png",
  "14-full-page-light-desktop.png",
  "15-mobile-hero-dark.png",
  "16-mobile-full-dark.png",
  "17-mobile-hero-light.png",
  "18-protected-page.png",
  "19-not-found-page.png",
];

const PAGE_WIDTH = 595.28; // A4
const PAGE_HEIGHT = 841.89;
const MARGIN = 36;

async function compressImage(fileName) {
  const input = path.join(SRC_DIR, fileName);
  const output = path.join(COMPRESSED_DIR, fileName.replace(/\.png$/, ".jpg"));

  const isFullPage = fileName.includes("full-page") || fileName.includes("mobile-full");
  const maxWidth = isFullPage ? 1200 : 1400;

  await sharp(input)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(output);

  return output;
}

async function compressAll() {
  await mkdir(COMPRESSED_DIR, { recursive: true });
  const files = (await readdir(SRC_DIR)).filter((f) => f.endsWith(".png"));
  const results = [];

  for (const file of files) {
    const out = await compressImage(file);
    results.push(out);
  }

  return results;
}

async function addTitlePage(pdf, fontBold, fontRegular) {
  const page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);

  page.drawRectangle({
    x: 0,
    y: 0,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    color: rgb(0.25, 0.24, 0.22),
  });

  page.drawRectangle({
    x: MARGIN,
    y: PAGE_HEIGHT - 180,
    width: PAGE_WIDTH - MARGIN * 2,
    height: 4,
    color: rgb(0.99, 0.5, 0.18),
  });

  page.drawText("Demping Bot", {
    x: MARGIN,
    y: PAGE_HEIGHT - 140,
    size: 36,
    font: fontBold,
    color: rgb(1, 0.96, 0.88),
  });

  page.drawText("SaaS Landing Page", {
    x: MARGIN,
    y: PAGE_HEIGHT - 175,
    size: 16,
    font: fontRegular,
    color: rgb(0.99, 0.5, 0.18),
  });

  const lines = [
    "Next.js 16 · React 19 · TypeScript · Tailwind CSS 4",
    "",
    "• Responsive design (desktop + mobile)",
    "• Dark and light themes",
    "• Hero, pricing, FAQ, CTA, animations",
    "• Protected page and 404",
  ];

  let y = PAGE_HEIGHT - 260;
  for (const line of lines) {
    page.drawText(line, {
      x: MARGIN,
      y,
      size: 12,
      font: fontRegular,
      color: rgb(0.85, 0.83, 0.8),
    });
    y -= 22;
  }

  page.drawText("github.com/helen-windizel/demping-bot", {
    x: MARGIN,
    y: 60,
    size: 10,
    font: fontRegular,
    color: rgb(0.65, 0.63, 0.6),
  });
}

async function addImagePages(pdf, imagePath, label, fontRegular) {
  const bytes = await readFile(imagePath);
  const image = await pdf.embedJpg(bytes);
  const { width, height } = image.scale(1);

  const contentWidth = PAGE_WIDTH - MARGIN * 2;
  const scale = contentWidth / width;
  const scaledWidth = width * scale;
  const scaledHeight = height * scale;

  const headerHeight = 28;
  const usableHeight = PAGE_HEIGHT - MARGIN * 2 - headerHeight;
  let offsetY = 0;

  while (offsetY < scaledHeight) {
    const page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    const sliceHeight = Math.min(usableHeight, scaledHeight - offsetY);

    page.drawText(label, {
      x: MARGIN,
      y: PAGE_HEIGHT - MARGIN,
      size: 10,
      font: fontRegular,
      color: rgb(0.45, 0.43, 0.4),
    });

    page.drawImage(image, {
      x: MARGIN,
      y: PAGE_HEIGHT - MARGIN - headerHeight - sliceHeight,
      width: scaledWidth,
      height: scaledHeight,
      clip: {
        x: 0,
        y: offsetY / scale,
        width,
        height: sliceHeight / scale,
      },
    });

    offsetY += sliceHeight;
  }
}

const LABELS = {
  "01-hero-dark-desktop": "Hero — dark theme",
  "05-how-it-works-dark": "How it works",
  "06-features-dark": "Features",
  "07-dashboard-preview-dark": "Dashboard preview",
  "08-pricing-dark": "Pricing",
  "09-faq-dark": "FAQ",
  "10-demo-cta-dark": "Demo CTA",
  "12-full-page-dark-desktop": "Full page — dark",
  "13-hero-light-desktop": "Hero — light theme",
  "14-full-page-light-desktop": "Full page — light",
  "15-mobile-hero-dark": "Mobile hero — dark",
  "16-mobile-full-dark": "Mobile full page",
  "17-mobile-hero-light": "Mobile hero — light",
  "18-protected-page": "Protected page",
  "19-not-found-page": "404 page",
};

function labelFromFile(fileName) {
  const key = fileName.replace(/\.jpg$/, "");
  return LABELS[key] ?? key.replace(/^\d+-/, "").replace(/-/g, " ");
}

async function buildPdf(compressedFiles) {
  const pdf = await PDFDocument.create();
  const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdf.embedFont(StandardFonts.Helvetica);

  await addTitlePage(pdf, fontBold, fontRegular);

  const byName = Object.fromEntries(
    compressedFiles.map((p) => [path.basename(p).replace(/\.jpg$/, ".png"), p])
  );

  for (const name of PORTFOLIO_ORDER) {
    const imagePath = byName[name];
    if (!imagePath) continue;
    await addImagePages(pdf, imagePath, labelFromFile(path.basename(imagePath)), fontRegular);
  }

  const pdfBytes = await pdf.save();
  await writeFile(PDF_PATH, pdfBytes);
}

async function main() {
  console.log("Сжимаю изображения...");
  const compressed = await compressAll();

  const before = (await readdir(SRC_DIR))
    .filter((f) => f.endsWith(".png"))
    .reduce(async (accP, f) => {
      const acc = await accP;
      const { size } = await import("node:fs/promises").then((fs) =>
        fs.stat(path.join(SRC_DIR, f))
      );
      return acc + size;
    }, Promise.resolve(0));

  const after = compressed.reduce(async (accP, f) => {
    const acc = await accP;
    const { size } = await import("node:fs/promises").then((fs) => fs.stat(f));
    return acc + size;
  }, Promise.resolve(0));

  const beforeSize = await before;
  const afterSize = await after;

  console.log("Собираю PDF...");
  await buildPdf(compressed);

  const { size: pdfSize } = await import("node:fs/promises").then((fs) =>
    fs.stat(PDF_PATH)
  );

  console.log(`\nГотово:`);
  console.log(`  Сжатые фото: ${COMPRESSED_DIR}`);
  console.log(`  PDF: ${PDF_PATH}`);
  console.log(
    `  Размер PNG: ${(beforeSize / 1024 / 1024).toFixed(1)} MB → JPG: ${(afterSize / 1024 / 1024).toFixed(1)} MB`
  );
  console.log(`  PDF: ${(pdfSize / 1024 / 1024).toFixed(1)} MB\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
