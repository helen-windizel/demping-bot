import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "resume-screenshots");
const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

async function setTheme(page, theme) {
  await page.evaluate((t) => {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("dmp-theme", t);
  }, theme);
}

async function screenshotSection(page, selector, filePath) {
  const el = page.locator(selector).first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await el.screenshot({ path: filePath });
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    deviceScaleFactor: 2,
    locale: "ru-RU",
  });

  const desktop = await context.newPage();
  await desktop.setViewportSize({ width: 1440, height: 900 });
  await desktop.goto(BASE_URL, { waitUntil: "networkidle" });
  await setTheme(desktop, "dark");

  await desktop.screenshot({
    path: path.join(OUT_DIR, "01-hero-dark-desktop.png"),
  });

  const sections = [
    ["02-trust-bar-dark.png", 'section[aria-label="Почему нам доверяют"]'],
    ["03-stats-dark.png", 'section[aria-label="Результаты"]'],
    ["04-value-proposition-dark.png", "section:has(h2:text('Решения, основанные'))"],
    ["05-how-it-works-dark.png", "#how-it-works"],
    ["06-features-dark.png", "#features"],
    ["07-dashboard-preview-dark.png", "section:has(h2:text('Управляйте ценообразованием'))"],
    ["08-pricing-dark.png", "#pricing"],
    ["09-faq-dark.png", "#faq"],
    ["10-demo-cta-dark.png", "#demo"],
    ["11-footer-dark.png", "footer"],
  ];

  for (const [file, selector] of sections) {
    await screenshotSection(desktop, selector, path.join(OUT_DIR, file));
  }

  await desktop.screenshot({
    path: path.join(OUT_DIR, "12-full-page-dark-desktop.png"),
    fullPage: true,
  });

  await setTheme(desktop, "light");
  await desktop.goto(BASE_URL, { waitUntil: "networkidle" });
  await setTheme(desktop, "light");
  await desktop.screenshot({
    path: path.join(OUT_DIR, "13-hero-light-desktop.png"),
  });
  await desktop.screenshot({
    path: path.join(OUT_DIR, "14-full-page-light-desktop.png"),
    fullPage: true,
  });

  const mobile = await context.newPage();
  await mobile.setViewportSize({ width: 390, height: 844 });
  await mobile.goto(BASE_URL, { waitUntil: "networkidle" });
  await setTheme(mobile, "dark");
  await mobile.screenshot({
    path: path.join(OUT_DIR, "15-mobile-hero-dark.png"),
  });
  await mobile.screenshot({
    path: path.join(OUT_DIR, "16-mobile-full-dark.png"),
    fullPage: true,
  });

  await setTheme(mobile, "light");
  await mobile.goto(BASE_URL, { waitUntil: "networkidle" });
  await setTheme(mobile, "light");
  await mobile.screenshot({
    path: path.join(OUT_DIR, "17-mobile-hero-light.png"),
  });

  const protectedPage = await context.newPage();
  await protectedPage.setViewportSize({ width: 1440, height: 900 });
  await protectedPage.goto(`${BASE_URL}/protected`, { waitUntil: "networkidle" });
  await protectedPage.screenshot({
    path: path.join(OUT_DIR, "18-protected-page.png"),
  });

  const notFound = await context.newPage();
  await notFound.setViewportSize({ width: 1440, height: 900 });
  await notFound.goto(`${BASE_URL}/this-page-does-not-exist`, {
    waitUntil: "networkidle",
  });
  await notFound.screenshot({
    path: path.join(OUT_DIR, "19-not-found-page.png"),
  });

  await browser.close();

  console.log(`\nГотово: ${OUT_DIR}`);
  console.log("Создано 19 скриншотов для резюме.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
