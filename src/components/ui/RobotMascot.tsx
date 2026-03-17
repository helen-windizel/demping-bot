export function RobotMascot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 120 140"
        fill="none"
        className="h-full w-full max-h-[200px] sm:max-h-[260px]"
      >
        {/* Head */}
        <rect
          x="30"
          y="20"
          width="60"
          height="55"
          rx="12"
          fill="url(#robotGrad)"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />
        {/* Eyes */}
        <rect
          x="42"
          y="38"
          width="14"
          height="14"
          rx="4"
          fill="#FD802E"
          opacity="0.9"
        />
        <rect
          x="64"
          y="38"
          width="14"
          height="14"
          rx="4"
          fill="#FD802E"
          opacity="0.9"
        />
        {/* Eye shine */}
        <rect x="45" y="41" width="4" height="4" rx="1" fill="white" opacity="0.8" />
        <rect x="67" y="41" width="4" height="4" rx="1" fill="white" opacity="0.8" />
        {/* Antenna */}
        <line
          x1="60"
          y1="20"
          x2="60"
          y2="8"
          stroke="rgba(253,128,46,0.6)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="60" cy="6" r="3" fill="#FD802E" />
        {/* Body */}
        <rect
          x="25"
          y="80"
          width="70"
          height="45"
          rx="10"
          fill="url(#robotGrad2)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        {/* Display on body */}
        <rect
          x="35"
          y="90"
          width="50"
          height="25"
          rx="4"
          fill="rgba(0,0,0,0.4)"
          stroke="rgba(253,128,46,0.3)"
          strokeWidth="1"
        />
        <rect x="40" y="95" width="15" height="3" rx="1" fill="#FD802E" opacity="0.6" />
        <rect x="40" y="102" width="25" height="3" rx="1" fill="#FD802E" opacity="0.4" />
        <rect x="40" y="109" width="20" height="3" rx="1" fill="#FD802E" opacity="0.3" />
        <defs>
          <linearGradient id="robotGrad" x1="30" y1="20" x2="90" y2="75">
            <stop offset="0%" stopColor="rgba(253,128,46,0.2)" />
            <stop offset="100%" stopColor="rgba(253,128,46,0.05)" />
          </linearGradient>
          <linearGradient id="robotGrad2" x1="25" y1="80" x2="95" y2="125">
            <stop offset="0%" stopColor="rgba(253,128,46,0.15)" />
            <stop offset="100%" stopColor="rgba(253,128,46,0.05)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
