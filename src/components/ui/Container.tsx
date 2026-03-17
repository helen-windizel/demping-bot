import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-6xl",
    narrow: "max-w-4xl",
    wide: "max-w-7xl",
  };

  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
}
