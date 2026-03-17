"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right";

interface AnimateInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
  stagger?: number;
}

const variantStyles: Record<Variant, { from: string; to: string }> = {
  "fade-up": { from: "translate-y-8 opacity-0", to: "translate-y-0 opacity-100" },
  "fade-in": { from: "opacity-0", to: "opacity-100" },
  "scale-in": { from: "scale-95 opacity-0", to: "scale-100 opacity-100" },
  "slide-left": { from: "translate-x-12 opacity-0", to: "translate-x-0 opacity-100" },
  "slide-right": { from: "-translate-x-12 opacity-0", to: "translate-x-0 opacity-100" },
};

export function AnimateInView({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const styles = variantStyles[variant];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? styles.to : styles.from
      } ${className}`}
      style={{ transitionDelay: visible ? "0ms" : `${delay}ms` }}
    >
      {children}
    </div>
  );
}
