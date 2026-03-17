import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { HeroBadge } from "@/components/ui/HeroBadge";
import { Button } from "@/components/ui/Button";
import { StatsCarousel } from "@/components/sections/StatsCarousel";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { PricingCard } from "@/components/sections/PricingCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { RobotMascot } from "@/components/ui/RobotMascot";
import { DashboardMockup } from "@/components/ui/DashboardMockup";
import {
  ChartIcon,
  ShieldIcon,
  CpuIcon,
  LightningIcon,
  BellIcon,
  PuzzleIcon,
  CogIcon,
  CheckIcon,
} from "@/components/icons";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { faqItems } from "@/data/faq";
import { pricingPlans } from "@/data/pricing";

function HomePage() {
  return (
    <div className="noise-bg relative min-h-screen">
      <Header />

      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32 lg:pt-44 lg:pb-40">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 via-transparent to-transparent animate-gradient-shift" />
          <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[var(--accent)]/10 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-3xl animate-float-slow" style={{ animationDelay: "-2s" }} />
          <Container className="relative">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="animate-fade-up">
                <HeroBadge className="mb-6">Выбор 500+ продавцов</HeroBadge>
                <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--text-heading)] sm:text-5xl lg:text-6xl">
                  Demping Bot —
                  <br />
                  <span className="bg-gradient-to-r from-[var(--accent-dark)] to-[var(--accent)] bg-clip-text text-transparent">
                    умный демпинг цен
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-[1.7] text-[var(--text-secondary)] reading-width">
                  Автоматически снижает цену, удерживает вас в ТОП-1 и помогает
                  продавать больше. Без ручной работы — только данные и алгоритмы.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                  Защита маржи. Контроль в ваших руках. Старт за 5 минут.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button href="#demo" variant="primary" className="min-h-[48px] px-8 text-base font-medium">
                    Попробовать бесплатно
                  </Button>
                  <Button href="#how-it-works" variant="secondary" className="min-h-[48px]">
                    Как это работает
                  </Button>
                </div>
              </div>
              <AnimateInView variant="slide-right" delay={200} className="relative flex items-center justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-[var(--accent)]/10 blur-2xl animate-float-slow" />
                  <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
                    <DashboardMockup className="w-full max-w-sm transition-transform duration-500 hover:scale-[1.02]" />
                    <div className="hidden sm:block animate-float-slow" style={{ animationDelay: "-1s" }}>
                    <RobotMascot />
                  </div>
                  </div>
                </div>
              </AnimateInView>
            </div>
          </Container>
        </section>

        {/* Trust bar */}
        <section aria-label="Почему нам доверяют">
          <Container>
            <TrustBar />
          </Container>
        </section>

        {/* Stats */}
        <section className="py-20 sm:py-24" aria-label="Результаты">
          <Container>
            <StatsCarousel />
          </Container>
        </section>

        {/* Value proposition */}
        <section className="py-20 sm:py-28 bg-[var(--overlay-subtle)]">
          <Container size="narrow">
            <AnimateInView>
            <SectionTitle
              title="Решения, основанные на данных — не на эмоциях"
              subtitle="Бот работает по вашим правилам: учитывает маржу, комиссии и ограничения. Никаких неконтролируемых снижений — только продуманная стратегия, которая защищает вашу прибыль."
              align="center"
            />
            </AnimateInView>
          </Container>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-20 sm:py-28">
          <Container>
            <AnimateInView>
            <SectionTitle
              title="Как работает?"
              subtitle="Четыре шага к умному ценообразованию"
              align="center"
            />
            </AnimateInView>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <AnimateInView delay={0}><FeatureCard
                icon={<ChartIcon />}
                title="Анализ рынка"
                description="Собираем цены конкурентов в реальном времени и отслеживаем динамику."
              /></AnimateInView>
              <AnimateInView delay={100}><FeatureCard
                icon={<CpuIcon />}
                title="Расчёт стратегии"
                description="Учитываем вашу маржу, комиссии и правила для оптимального решения."
              /></AnimateInView>
              <AnimateInView delay={200}><FeatureCard
                icon={<LightningIcon />}
                title="Умный демпинг"
                description="Автоматически корректируем цены, сохраняя конкурентоспособность."
              /></AnimateInView>
              <AnimateInView delay={300}><FeatureCard
                icon={<ShieldIcon />}
                title="Контроль и защита"
                description="Никогда не опускаем цену ниже установленного порога."
              /></AnimateInView>
            </div>
          </Container>
        </section>

        {/* Feature strip */}
        <section id="features" className="py-20 sm:py-28">
          <Container>
            <AnimateInView>
            <SectionTitle
              title="Возможности"
              align="center"
            />
            </AnimateInView>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <BellIcon />,
                  title: "Уведомления о ключевых изменениях",
                  desc: "Получайте алерты, когда конкуренты меняют цены.",
                },
                {
                  icon: <PuzzleIcon />,
                  title: "API и интеграции",
                  desc: "Подключайте маркетплейсы и системы учёта.",
                },
                {
                  icon: <CogIcon />,
                  title: "Полная автоматизация",
                  desc: "Настройте один раз — работайте без участия.",
                },
                {
                  icon: <ChartIcon />,
                  title: "Аналитика в реальном времени",
                  desc: "Графики, отчёты и прогнозы в одном интерфейсе.",
                },
                {
                  icon: <CpuIcon />,
                  title: "Гибкие правила",
                  desc: "Задавайте любые ограничения и стратегии.",
                },
                {
                  icon: <ShieldIcon />,
                  title: "Защита прибыли",
                  desc: "Минимальная маржа и цена под вашим контролем.",
                },
              ].map((f, i) => (
                <AnimateInView key={f.title} delay={i * 60}>
                  <FeatureCard {...f} description={f.desc} />
                </AnimateInView>
              ))}
            </div>
          </Container>
        </section>

        {/* Product preview */}
        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
              <AnimateInView variant="slide-left">
              <div>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--text-heading)] sm:text-4xl">
                  Управляйте ценообразованием в одном интерфейсе
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
                  Вся аналитика, настройки и контроль — в единой панели. Видите
                  полную картину и принимаете решения на основе данных.
                </p>
                <ul className="mt-8 space-y-5">
                  {[
                    "Динамика цен и позиций в реальном времени",
                    "Настройка правил и ограничений за минуты",
                    "Отчёты и экспорт для аналитики",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/20">
                        <CheckIcon className="h-5 w-5 text-[var(--accent)]" />
                      </span>
                      <span className="text-[var(--text-secondary)] pt-0.5">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </AnimateInView>
              <AnimateInView variant="slide-right" delay={150}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-[var(--accent)]/5 blur-2xl" />
                <DashboardMockup className="relative w-full max-w-lg" />
              </div>
              </AnimateInView>
            </div>
          </Container>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 sm:py-28 bg-[var(--overlay-subtle)]">
          <Container>
            <AnimateInView>
            <SectionTitle
              title="Тарифы"
              subtitle="Выберите план под ваш бизнес. Без скрытых платежей — отмена в любой момент."
              align="center"
            />
            </AnimateInView>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {pricingPlans.map((plan, i) => (
                <AnimateInView key={plan.name} delay={i * 100}>
                  <PricingCard {...plan} />
                </AnimateInView>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 sm:py-28">
          <Container size="narrow">
            <SectionTitle
              title="Частые вопросы"
              align="center"
            />
            <FAQAccordion items={faqItems} />
            <div className="mt-20">
              <CTASection
                title="Остались вопросы?"
                subtitle="Наша команда всегда на связи и готова помочь."
                showEmail={false}
                ctaText="Связаться с нами"
              />
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section id="demo" className="py-20 sm:py-28">
          <Container size="narrow">
            <AnimateInView variant="scale-in">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-10 shadow-xl transition-all duration-500 hover:shadow-[0_0_60px_-15px_rgba(253,128,46,0.2)] sm:p-14">
              <h2 className="text-center text-3xl font-semibold leading-tight text-[var(--text-heading)] sm:text-4xl">
                Ценообразование нового уровня
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-[var(--text-secondary)]">
                Начните с бесплатного демо за 2 минуты. Без кредитной карты.
                Отмена в любой момент — без вопросов.
              </p>
              <form className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row sm:items-stretch" action="#" method="post">
                <label htmlFor="demo-email" className="sr-only">
                  Email для доступа к демо
                </label>
                <input
                  id="demo-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="min-h-[48px] w-full rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3.5 text-[var(--text-primary)] placeholder-[var(--text-muted)] backdrop-blur-sm transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
                />
                <Button variant="primary" className="shrink-0 min-h-[48px] px-8">
                  Запустить демо
                </Button>
              </form>
              <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-[var(--text-muted)]" role="list">
                <span className="flex items-center gap-2" role="listitem">
                  <CheckIcon className="h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
                  Бесплатное демо
                </span>
                <span className="flex items-center gap-2" role="listitem">
                  <CheckIcon className="h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
                  Отмена в любой момент
                </span>
                <span className="flex items-center gap-2" role="listitem">
                  <CheckIcon className="h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
                  Старт за 5 минут
                </span>
              </div>
            </div>
            </AnimateInView>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
