"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-colors hover:border-[var(--border-light)]"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full min-h-[56px] items-center justify-between px-6 py-4 text-left transition-colors hover:bg-[var(--card-hover)]"
          >
            <span className="font-medium text-[var(--text-primary)]">{item.question}</span>
            <svg
              className={`h-5 w-5 shrink-0 text-[var(--text-muted)] transition-transform duration-300 ease-out ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`grid transition-all duration-300 ease-out ${
              openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-[var(--border)] px-6 py-4">
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
