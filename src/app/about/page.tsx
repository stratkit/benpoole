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
        </div>
      </section>

      {/* Story + Photo */}
      <section className="bg-grid py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-[#cbd5e1] leading-relaxed md:-mt-16">
              <p className="text-lg">
                I&apos;m a product and technology leader who helps teams replace opinion-driven roadmaps with evidence-driven ones. In a world where AI makes output cheap, that shift is the difference between shipping more and shipping what matters.
              </p>
              <blockquote className="border-l-4 border-[#06b6d4] pl-5 italic text-[#94a3b8]">
                &ldquo;Goals in pen, plans in pencil.&rdquo;
              </blockquote>
              <p>
                My work sits where there&apos;s a common gap: between technical depth and business outcomes. I partner across Data Science, Engineering, Product Analytics, and Marketing to turn complex inputs (models, data, customer signal) into decisions leadership can actually act on. That&apos;s where trade-offs become visible instead of buried.
              </p>
              <p>
                That foundation took me into strategic leadership. I scaled a FinTech startup past a $1B valuation and led global UX for one of the largest Microsoft Teams deployments ever: 30,000+ employees across multiple countries. Today I lead a team of Data Product Managers and Analysts, partnered across Data Science, Data Engineering, and Product Analytics. Recent work: a Data Catalog that gave my organization structured visibility into its data assets for the first time, and an Executive Monitoring Board that turns KPIs into action for leadership, both built using Claude Code, Cursor, and MCPs to wire modern AI into how the business reads and acts on its data.
              </p>
              <p>
                My belief: technology should serve people, not the other way around. The path there runs through listening to users and reading the right data, not louder opinions in the room. That belief travels well, inside a Product org or alongside one. Enterprise-grade thinking shouldn&apos;t be reserved for enterprises; smaller organizations, nonprofits, and civic groups deserve the same clarity, delivered practically.
              </p>
              {/*
              <blockquote className="border-l-4 border-[#06b6d4] pl-5 italic text-[#94a3b8]">
                &ldquo;Plans in pencil, goals in pen.&rdquo;
              </blockquote>
              */}
            </div>

            <div className="space-y-8 md:-mt-[22rem]">
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
