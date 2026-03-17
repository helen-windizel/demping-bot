interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="group card-hover-lift rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm hover:border-[var(--border-light)] hover:shadow-[0_12px_40px_-12px_rgba(253,128,46,0.15)] sm:p-8">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--accent)]/20">
        {icon}
      </div>
      <h3 className="text-lg font-semibold leading-snug text-[var(--text-heading)] sm:text-xl">{title}</h3>
      <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">{description}</p>
    </article>
  );
}
