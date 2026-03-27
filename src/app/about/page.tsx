import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RandomQuote from "@/components/RandomQuote";

export const metadata: Metadata = {
  title: "About | Ben Poole",
  description: "Product leader, technologist, and data storyteller. From self-taught web developer to strategic technology leader.",
};

export default function About() {
  return (
    <div className="pt-24">

      <RandomQuote />

      {/* Hero */}
      <section className="bg-honeycomb py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#06b6d4] font-medium text-sm tracking-widest uppercase mb-4">About</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#f1f5f9] leading-tight mb-6">
            Move fast<br />
            <span className="text-[#3b4f6b]">and fix things.</span>
          </h1>
          <p className="text-[#cbd5e1] text-xl max-w-2xl leading-relaxed">
            &ldquo;Goals in pen, plans in pencil.&rdquo;
          </p>
        </div>
      </section>

      {/* Story + Photo */}
      <section className="bg-grid py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-[#cbd5e1] leading-relaxed">
              <p className="text-lg">
                As a leader in product and technology transformations, I partner across Product and Data Teams to bring clarity to complex challenges by connecting data products, Process management, marketing, UX research, and process design. I’m a strong advocate for developers, engineers, data scientists and business users, translating their unique perspectives into actionable roadmaps that bridge gaps, identify the trade-offs, and build shared understanding. 
              </p>
              <p>
                I grew up alongside the internet, first transitioning my print design skills to building websites. To continue making an impact Marketing Financial Services firms, I learned Web Programming and Database development.
                That hands-on foundation gives me something a lot of executives lack. I can actually talk to engineers, not just at them.
              </p>
              <p>
                Over time I moved into strategic technology leadership. I helped scale a fintech startup
                to a $1B+ valuation. I led the global UX research and change management effort for one
                of the largest Microsoft Teams deployments ever, reaching 30,000+ employees across multiple countries.
                I&apos;ve managed enterprise vendor relationships, built product roadmaps from scratch,
                and turned messy data into decisions that actually stuck.
              </p>
              <p>
                My philosophy is what I call <strong className="text-[#f1f5f9]">&ldquo;just enough&rdquo; CIO thinking</strong>: listening to users and interpreting targeted data yields better outcomes than complex frameworks and bloated governance. Technology should serve people, not the other way around.
              </p>
              <p>
                I believe enterprise-grade thinking shouldn&apos;t be reserved for enterprises. Smaller
                organizations, nonprofits, and civic groups deserve the same strategic clarity, just delivered practically and without the overhead.
              </p>
<!--
              <blockquote className="border-l-4 border-[#06b6d4] pl-5 italic text-[#94a3b8]">
                &ldquo;Plans in pencil, goals in pen.&rdquo;
              </blockquote>
  -->
            </div>

            <div className="space-y-8">
              <div className="relative">
                <Image
                  src="/images/action-LA.png"
                  alt="Ben Poole"
                  width={500}
                  height={500}
                  className="rounded-xl object-cover w-full shadow-md border-2 border-slate-300"
                />
              </div>

              {/* Quick facts */}
              <div className="bg-[#1e293b] border border-[#3b4f6b]/10 rounded-xl p-6 space-y-4">
                {[
                  { label: "Current focus", value: "AI-powered products & digital transformation" },
                  { label: "Background", value: "Product, UX, data, enterprise tech" },
                  { label: "Available for", value: "Speaking, consulting, advisory" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col">
                    <span className="text-xs text-[#06b6d4] font-medium uppercase tracking-wider">{label}</span>
                    <span className="text-[#f1f5f9] text-sm mt-0.5">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-24 bg-[#020617]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[#06b6d4] font-medium text-xs tracking-widest uppercase mb-2">Community</p>
            <h2 className="font-heading text-3xl font-bold text-[#faf7f2] mb-2">
              Beyond the work.
            </h2>
            <p className="text-[#a0a0b0] text-lg max-w-xl">
              I believe enterprise-grade thinking shouldn&apos;t be reserved for enterprises.
              Here&apos;s how I bring that philosophy into the Omaha community.
            </p>
          </div>
          <Link
            href="/about/community"
            className="shrink-0 border border-[#3b4f6b]/30 text-[#3b4f6b] px-6 py-3 rounded text-sm font-medium hover:border-[#3b4f6b] transition-colors"
          >
            Community involvement →
          </Link>
        </div>
      </section>

      {/* Expertise threads */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-[#f1f5f9] mb-12">
            Where I create the most impact.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Product Development",
                desc: "Building and scaling products that solve real problems, from conception through launch and the long haul after.",
              },
              {
                title: "Digital Transformation",
                desc: "Guiding organizations through technology adoption with practical, achievable roadmaps that people actually follow.",
              },
              {
                title: "UX Design & Research",
                desc: "User-centered design backed by industry-standard research. I've run studies at global scale and at scrappy startup speed.",
              },
              {
                title: "Data Storytelling",
                desc: "Transforming complex data into compelling narratives that drive decisions, not just dashboards nobody reads.",
              },
              {
                title: "Change Management",
                desc: "Prosci certified. Leading people through organizational change with empathy, clarity, and a healthy respect for resistance.",
              },
              {
                title: "Enterprise Architecture",
                desc: "Designing scalable systems that align technology with business objectives, without overengineering for problems you don't have yet.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-1 bg-[#06b6d4] rounded-full shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-semibold text-[#f1f5f9] mb-1">{title}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
