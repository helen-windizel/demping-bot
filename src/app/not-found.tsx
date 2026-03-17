import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="noise-bg flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <p className="text-sm font-medium text-[var(--accent)]">404</p>
        <h1 className="mt-2 text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
          Страница не найдена
        </h1>
        <p className="mt-4 max-w-md text-[var(--text-muted)]">
          Запрашиваемая страница не существует или была перемещена.
        </p>
        <Button href="/" variant="primary" className="mt-8">
          На главную
        </Button>
      </div>
    </div>
  );
}
