import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const productLinks = [
  { href: "#main", label: "Главная" },
  { href: "#features", label: "Возможности" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#demo", label: "Демо" },
];

const solutionLinks = [
  { href: "#", label: "Автоматический демпинг" },
  { href: "#", label: "Контроль цен" },
  { href: "#", label: "Защита прибыли" },
  { href: "#", label: "API и интеграции" },
];

const companyLinks = [
  { href: "#", label: "О нас" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacts", label: "Контакты" },
  { href: "#", label: "Документация" },
];

const socialLinks = [
  { href: "#", label: "Telegram" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-[var(--border)] bg-[var(--card)]/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="text-xl font-semibold text-[var(--text-primary)]"
            >
              DMP.bot
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
              Интеллектуальная система управления ценами на основе данных и
              алгоритмов.
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-[var(--text-muted)]">Казахстан</p>
              <a
                href="mailto:support@dmp.bot"
                className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                support@dmp.bot
              </a>
              <div className="flex gap-4 pt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h4 className="text-sm font-medium text-[var(--text-primary)]">Продукт</h4>
              <ul className="mt-4 space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-[var(--text-primary)]">Решения</h4>
              <ul className="mt-4 space-y-3">
                {solutionLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-[var(--text-primary)]">Компания</h4>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-medium text-[var(--text-primary)]">
              Начните с Demping Bot
            </h4>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Оставьте email для доступа к демо
            </p>
            <form className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Input type="email" placeholder="your@email.com" className="flex-1" />
              <Button variant="primary" className="shrink-0">
                Запустить демо
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row">
          <p className="text-sm text-[var(--text-muted)]">
            © 2026 Demping Bot. Все права защищены.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
