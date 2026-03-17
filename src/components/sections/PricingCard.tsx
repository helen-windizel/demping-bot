import { Button } from "@/components/ui/Button";

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

export function PricingCard({
  name,
  description,
  price,
  features,
  highlighted = false,
  ctaText = "Начать",
}: PricingCardProps) {
  return (
    <article
      className={`relative flex min-w-0 flex-col rounded-2xl border p-6 transition-all duration-300 sm:p-8 ${
        highlighted
          ? "border-[var(--accent)]/50 bg-[var(--card)] ring-2 ring-[var(--accent)]/30 animate-pulse-glow card-hover-lift hover:scale-[1.02]"
          : "border-[var(--border)] bg-[var(--card)] shadow-sm card-hover-lift hover:border-[var(--border-light)] hover:shadow-[0_12px_40px_-12px_rgba(253,128,46,0.1)]"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium text-white">
            Рекомендован
          </span>
        </div>
      )}
      <h3 className="text-xl font-semibold text-[var(--text-heading)]">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
      <div className="mt-6">
        <span className="text-3xl font-bold tabular-nums text-[var(--text-heading)]">{price}</span>
      </div>
      <ul className="mt-6 flex-1 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-secondary)]">
            <svg
              className="h-5 w-5 shrink-0 text-[var(--accent)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        href="#demo"
        variant={highlighted ? "primary" : "secondary"}
        className="mt-8 w-full min-h-[48px]"
      >
        {ctaText}
      </Button>
    </article>
  );
}
