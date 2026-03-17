# Demping Bot — лендинг

Лендинг для SaaS-продукта умной автоматизации цен на маркетплейсах.

## Стек

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

## Быстрый старт

### Требования

- Node.js 18+
- npm

### Установка

```bash
# Клонировать репозиторий (или распаковать архив)
cd demping-bot

# Установить зависимости
npm install

# Скопировать переменные окружения (опционально)
cp .env.example .env
```

### Запуск

```bash
# Режим разработки (с hot reload)
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен-сборки
npm start
```

После `npm run dev` сайт откроется на [http://localhost:3000](http://localhost:3000).

## Структура проекта

```
demping-bot/
├── src/
│   ├── app/                 # Страницы (App Router)
│   │   ├── page.tsx         # Главная
│   │   ├── protected/      # Защищённая страница
│   │   ├── not-found.tsx    # 404
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Секции лендинга
│   │   └── ui/              # UI-компоненты
│   ├── contexts/            # React Context (тема)
│   ├── data/                # Статические данные (FAQ, тарифы)
│   └── components/icons/    # Иконки
├── public/
├── .env.example
└── package.json
```

## Страницы

| Путь | Описание |
|------|----------|
| `/` | Главная — Hero, TrustBar, Stats, Features, Pricing, FAQ, CTA |
| `/protected` | Защищённая страница (пароль) |
| `*` | 404 |

## Темы

- **Тёмная** (по умолчанию): `#403D39`
- **Светлая**: `#FFF4E1`
- **Акцент**: `#FD802E`

Переключатель темы в хедере. Выбор сохраняется в `localStorage`.

## Переменные окружения

См. `.env.example`. Для локальной разработки без API можно не создавать `.env`.

## Деплой

Подходит для Vercel, Netlify и других платформ с поддержкой Next.js:

```bash
npm run build
```

Папка `.next` — результат сборки. На Vercel достаточно подключить репозиторий.

## Для backend-разработчика

- API-эндпоинты пока не подключены — лендинг статический
- Формы (CTA, демо) готовы к интеграции
- При добавлении API используйте `NEXT_PUBLIC_*` для публичных URL

## Лицензия

Private
