"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ProtectedPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError("Введите пароль");
      return;
    }
    setError("");
    // В реальном приложении здесь была бы проверка пароля
    alert("Проверка пароля не реализована. Это демо-страница.");
  };

  return (
    <div className="noise-bg flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-[var(--border-light)] bg-[var(--overlay-subtle)] p-8 backdrop-blur-sm">
        <p className="text-sm font-medium text-[var(--accent)]">
          Доступ ограничен
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
          Защищённая страница
        </h1>
        <p className="mt-4 text-[var(--text-muted)]">
          Эта страница защищена паролем. Введите пароль для продолжения.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="password" className="sr-only">
              Пароль
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
            {error && (
              <p className="mt-2 text-sm text-red-400">{error}</p>
            )}
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Продолжить
          </Button>
        </form>
      </div>
    </div>
  );
}
