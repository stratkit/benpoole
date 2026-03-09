"use client";

import { useActionState, useEffect, useState } from "react";
import { sendContactEmail, type FormState } from "@/app/contact/actions";

const initialState: FormState = { status: "idle", message: "" };

const TOPICS = [
  "Agentic AI",
  "AI Enablement for the Org",
  "Marketing/UX Research",
  "Product Strategy",
  "Product Discovery",
  "Product Analytics",
  "Vendors and Tech Stack",
  "Coffee / Cooking / Home Bar Mixology / Other?",
];

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initialState);
  const [visitor, setVisitor] = useState<string | null>(null);

  useEffect(() => {
    setVisitor(sessionStorage.getItem("visitor"));
  }, []);

  return (
    <form action={action} className="space-y-6">
      {visitor && <input type="hidden" name="visitor" value={visitor} />}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#94a3b8] mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={pending || state.status === "success"}
            className="w-full bg-[#0f172a] border border-[#3b4f6b]/40 rounded px-4 py-3 text-[#f1f5f9] text-sm placeholder-[#475569] focus:outline-none focus:border-[#06b6d4] transition-colors disabled:opacity-50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#94a3b8] mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={pending || state.status === "success"}
            className="w-full bg-[#0f172a] border border-[#3b4f6b]/40 rounded px-4 py-3 text-[#f1f5f9] text-sm placeholder-[#475569] focus:outline-none focus:border-[#06b6d4] transition-colors disabled:opacity-50"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#94a3b8] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          disabled={pending || state.status === "success"}
          className="w-full bg-[#0f172a] border border-[#3b4f6b]/40 rounded px-4 py-3 text-[#f1f5f9] text-sm placeholder-[#475569] focus:outline-none focus:border-[#06b6d4] transition-colors resize-none disabled:opacity-50"
          placeholder="What's on your mind?"
        />
      </div>

      <div>
        <p className="block text-sm font-medium text-[#94a3b8] mb-3">
          What would you like to talk over?
        </p>
        <div className="space-y-2">
          {TOPICS.map((topic) => (
            <label key={topic} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="topics"
                value={topic}
                disabled={pending || state.status === "success"}
                className="w-4 h-4 rounded border border-[#3b4f6b]/40 bg-[#0f172a] accent-[#06b6d4] disabled:opacity-50"
              />
              <span className="text-sm text-[#cbd5e1] group-hover:text-[#f1f5f9] transition-colors">
                {topic}
              </span>
            </label>
          ))}
        </div>
      </div>

      {state.message && (
        <p
          className={`text-sm ${
            state.status === "success" ? "text-[#06b6d4]" : "text-[#c2612a]"
          }`}
        >
          {state.message}
        </p>
      )}

      {state.status !== "success" && (
        <button
          type="submit"
          disabled={pending}
          className="bg-[#020617] text-[#faf7f2] px-8 py-3 rounded text-sm font-medium hover:bg-[#3b4f6b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? "Sending…" : "Send Message"}
        </button>
      )}
    </form>
  );
}
