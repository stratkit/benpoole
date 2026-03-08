"use client";

import { useEffect, useState } from "react";
import quotes from "@/data/quotes.json";

type Quote = { text: string; tags: string[] };

export default function RandomQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const pick = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(pick);
  }, []);

  if (!quote) return null;

  return (
    <section className="py-20 bg-[#0f172a] border-t border-b border-[#06b6d4]/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-[#06b6d4] text-6xl font-heading leading-none select-none">&ldquo;</span>
        <p className="font-heading text-xl md:text-2xl text-[#f1f5f9] leading-relaxed -mt-4">
          {quote.text}
        </p>
        <div className="mt-6 flex justify-center gap-2">
          {quote.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs uppercase tracking-widest text-[#06b6d4]/60 border border-[#06b6d4]/20 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
