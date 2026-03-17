"use client";

interface InputProps {
  type?: "text" | "email" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id?: string;
  name?: string;
}

export function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  id,
  name,
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`min-h-[48px] w-full rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] ${className}`}
    />
  );
}
