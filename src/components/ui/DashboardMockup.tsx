export function DashboardMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[var(--border-light)] bg-[var(--card)] shadow-[0_0_60px_rgba(253,128,46,0.1)] ${className}`}
    >
      <div className="border-b border-[var(--border)] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500/80" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
          <div className="h-2 w-2 rounded-full bg-green-500/80" />
          <span className="ml-4 text-xs text-[var(--text-muted)]">Панель аналитики</span>
        </div>
      </div>
      <div className="p-4">
        {/* Chart area */}
        <div className="rounded-xl bg-[var(--overlay-subtle)] p-4">
          <div className="mb-4 flex justify-between">
            <span className="text-sm font-medium text-[var(--text-primary)]">Динамика цен</span>
            <span className="text-xs text-[var(--text-muted)]">24ч</span>
          </div>
          <div className="flex h-32 items-end gap-1">
            {[40, 65, 45, 80, 55, 70, 90, 75, 85, 95, 88, 92].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-[var(--accent)]/60 to-[var(--accent)]/20 animate-chart-bar transition-all duration-300 hover:from-[var(--accent)]/80"
                style={{ height: `${h}%`, animationDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-[var(--text-muted)]">
            <span>00:00</span>
            <span>12:00</span>
            <span>24:00</span>
          </div>
        </div>
        {/* Stats row */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "Позиция", value: "#1", color: "text-[var(--accent)]" },
            { label: "Маржа", value: "24%", color: "text-[var(--accent)]" },
            { label: "Продажи", value: "+18%", color: "text-[var(--accent-light)]" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-[var(--border)] bg-[var(--overlay-subtle)] px-3 py-2"
            >
              <p className="text-xs text-[var(--text-muted)]">{stat.label}</p>
              <p className={`text-lg font-semibold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
