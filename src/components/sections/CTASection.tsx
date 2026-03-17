import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  showEmail?: boolean;
  ctaText?: string;
}

export function CTASection({
  title,
  subtitle,
  showEmail = true,
  ctaText = "Запустить демо",
}: CTASectionProps) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm sm:p-12">
      <h2 className="text-2xl font-semibold text-[var(--text-heading)] sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-[var(--text-muted)]">{subtitle}</p>
      )}
      {showEmail ? (
        <form className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Input
            type="email"
            placeholder="your@email.com"
            className="sm:max-w-md"
          />
          <Button variant="primary" className="shrink-0">
            {ctaText}
          </Button>
        </form>
      ) : (
        <div className="mt-6">
          <Button href="#demo" variant="primary">
            {ctaText}
          </Button>
        </div>
      )}
    </div>
  );
}
