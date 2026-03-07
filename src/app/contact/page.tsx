import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Ben Poole",
};

export default function Contact() {
  return (
    <div className="bg-grid min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-[#d97706] font-medium text-sm tracking-widest uppercase mb-4">Contact</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight">
          Let&apos;s talk.
        </h1>
        <p className="text-[#6b7280] text-xl mb-16">
          Whether you&apos;re building something new, navigating a hard change, or just want to connect — I&apos;d love to hear from you.
        </p>

        <div className="bg-[#faf7f2] border border-[#3b4f6b]/10 rounded p-8">
          <p className="text-[#6b7280] text-sm mb-6">Contact form coming soon. In the meantime:</p>
          <a
            href="mailto:ben@benpoole.me"
            className="inline-block bg-[#1a1a2e] text-[#faf7f2] px-6 py-3 rounded text-sm font-medium hover:bg-[#3b4f6b] transition-colors"
          >
            Email me at ben@benpoole.me
          </a>
          <div className="mt-6 pt-6 border-t border-[#3b4f6b]/10">
            <a
              href="https://linkedin.com/in/benpoole"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b4f6b] text-sm font-medium hover:text-[#d97706] transition-colors"
            >
              Connect on LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
