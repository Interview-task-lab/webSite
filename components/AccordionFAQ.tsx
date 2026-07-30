"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  order: number;
}

interface AccordionFAQProps {
  faqs: FAQItem[];
}

export default function AccordionFAQ({ faqs }: AccordionFAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-700"
          >
            <button
              onClick={() => toggle(faq.id)}
              className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-lg text-white pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-teal-500 transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer body with smooth height transition */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[500px] border-t border-slate-800/50" : "max-h-0"
              } overflow-hidden`}
            >
              <div className="p-6 text-slate-300 leading-relaxed text-base bg-slate-900/20">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
