import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:opacity-50 min-h-[44px] active:scale-[0.98]";

  const variantClasses = {
    primary:
      "btn-primary",
    secondary:
      "border border-[var(--border-light)] bg-[var(--input-bg)] text-[var(--text-primary)] backdrop-blur-sm hover:bg-[var(--card-hover)] hover:border-[var(--border-light)]",
    ghost:
      "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--input-bg)]",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
