import { type ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      <h2 className="text-3xl font-semibold leading-[1.2] tracking-tight text-[var(--text-heading)] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
