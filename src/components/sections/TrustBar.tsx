export function TrustBar() {
  const items = [
    { value: "500+", label: "продавцов" },
    { value: "24/7", label: "поддержка" },
    { value: "5 мин", label: "старт" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 py-6 border-y border-[var(--border)]">
      {items.map((item, i) => (
        <div
          key={item.label}
          className="text-center transition-all duration-300 hover:scale-105"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <span className="block text-xl font-semibold tabular-nums text-[var(--accent)] transition-colors hover:text-[var(--accent-light)] sm:text-2xl">
            {item.value}
          </span>
          <span className="text-sm text-[var(--text-muted)]">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
