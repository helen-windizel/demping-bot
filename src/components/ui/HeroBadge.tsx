interface HeroBadgeProps {
  children: string;
  className?: string;
}

export function HeroBadge({ children, className = "" }: HeroBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-[var(--border-light)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] shadow-sm transition-all duration-300 hover:scale-105 hover:border-[var(--accent)]/30 hover:shadow-md ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
      {children}
    </span>
  );
}
