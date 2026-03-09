import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Ben Poole",
};

export default function Blog() {
  return (
    <div className="bg-honeycomb min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-[#06b6d4] font-medium text-sm tracking-widest uppercase mb-4">Blog</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight">
          Thinking out loud.
        </h1>
        <p className="text-[#6b7280] text-xl mb-16">
          Perspectives on AI, product, leadership, and the messy middle of getting things done.
        </p>
        <div className="bg-[#faf7f2] border border-[#3b4f6b]/10 rounded p-8 text-center">
          <p className="text-[#6b7280]">Posts coming soon.</p>
          <p className="text-[#6b7280] mt-4 text-sm">
            Until then, check out my articles on{" "}
            <a
              href="https://linkedin.com/in/benpoole"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d97706] hover:underline font-medium"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
