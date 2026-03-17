"use client";

import { useState, useEffect } from "react";
import { StatsCard } from "./StatsCard";
import { ChartIcon, ShieldIcon, CogIcon } from "@/components/icons";

const stats = [
  {
    id: "1",
    value: "+34%",
    label: "Рост прибыли в среднем",
    icon: <ChartIcon />,
  },
  {
    id: "2",
    value: "24/7",
    label: "Контроль цен",
    icon: <ShieldIcon />,
  },
  {
    id: "3",
    value: "−80%",
    label: "Ручной работы",
    icon: <CogIcon />,
  },
];

export function StatsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Desktop: grid of all cards */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`transition-all duration-700 ease-out ${
              index === activeIndex ? "animate-carousel" : ""
            }`}
          >
            <StatsCard {...stat} />
          </div>
        ))}
      </div>

      {/* Mobile: carousel one card at a time */}
      <div className="sm:hidden relative min-h-[200px]">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`absolute inset-x-0 top-0 transition-all duration-500 ease-out ${
              index === activeIndex
                ? "opacity-100 translate-x-0 z-10"
                : "opacity-0 translate-x-8 pointer-events-none"
            }`}
          >
            <StatsCard {...stat} />
          </div>
        ))}
        <div className="flex justify-center gap-2 mt-6 pt-4">
          {stats.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-[var(--accent)]"
                  : "w-2 bg-[var(--border-light)]"
              }`}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
