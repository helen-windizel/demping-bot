interface StatsCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export function StatsCard({ value, label, icon }: StatsCardProps) {
  return (
    <div className="group card-hover-lift rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm hover:border-[var(--border-light)] hover:shadow-[0_12px_40px_-12px_rgba(253,128,46,0.12)] sm:p-8">
      {icon && (
        <div className="mb-4 text-[var(--accent)] opacity-90 transition-opacity group-hover:opacity-100" aria-hidden>
          {icon}
        </div>
      )}
      <div className="text-2xl font-bold tabular-nums text-[var(--text-heading)] sm:text-3xl">{value}</div>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{label}</p>
    </div>
  );
}
