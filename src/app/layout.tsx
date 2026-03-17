import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DMP.bot — Умный демпинг цен | Автоматизация ценообразования",
  description:
    "Автоматически снижайте цены, удерживайте ТОП-1 и увеличивайте прибыль. 500+ продавцов уже используют Demping Bot. Старт за 5 минут — бесплатное демо.",
  keywords: ["демпинг", "ценообразование", "автоматизация цен", "маркетплейс", "Wildberries", "Kaspi"],
  openGraph: {
    title: "DMP.bot — Умный демпинг цен",
    description: "Автоматизация ценообразования для продавцов. Защита прибыли. Старт за 5 минут.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main" className="skip-link">
          Перейти к основному содержимому
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
