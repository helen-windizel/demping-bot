"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "#main", label: "Главная" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-[var(--text-primary)] transition-opacity hover:opacity-80"
        >
          DMP.bot
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href="#demo" variant="primary" className="hidden sm:inline-flex">
            Запустить демо
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--input-bg)] hover:text-[var(--text-primary)] md:hidden"
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--input-bg)] hover:text-[var(--text-primary)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Button href="#demo" variant="primary" className="w-full">
                Запустить демо
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
