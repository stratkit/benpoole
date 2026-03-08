import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Ben Poole",
};

export default function Contact() {
  return (
    <div className="bg-grid min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-[#06b6d4] font-medium text-sm tracking-widest uppercase mb-4">Contact</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-4 leading-tight">
          Let&apos;s talk.
        </h1>
        <p className="text-[#94a3b8] text-xl mb-16">
          Whether you&apos;re building something new, navigating a hard change, or just want to connect. I&apos;d love to hear from you.
        </p>

        <div className="bg-[#1e293b] border border-[#3b4f6b]/10 rounded p-8">
          <Suspense>
            <ContactForm />
          </Suspense>
        </div>

        <div className="mt-8 pt-8 border-t border-[#3b4f6b]/10">
          <a
            href="https://linkedin.com/in/benpoole"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3b4f6b] text-sm font-medium hover:text-[#06b6d4] transition-colors"
          >
            Connect on LinkedIn →
          </a>
        </div>
      </div>
    </div>
  );
}
