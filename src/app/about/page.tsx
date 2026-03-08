import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Ben Poole",
  description: "Product leader, technologist, and data storyteller. From self-taught web developer to strategic technology leader.",
};

export default function About() {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="bg-honeycomb py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#d97706] font-medium text-sm tracking-widest uppercase mb-4">About</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#1a1a2e] leading-tight mb-6">
            Move fast.<br />
            <span className="text-[#3b4f6b]">And fix things.</span>
          </h1>
          <p className="text-[#374151] text-xl max-w-2xl leading-relaxed">
            I started as a self-taught web developer with no formal training and no roadmap.
            That turned out to be an advantage.
          </p>
        </div>
      </section>

      {/* Story + Photo */}
      <section className="bg-grid py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-[#374151] leading-relaxed">
              <p className="text-lg">
                My career has been a deliberate journey from building things to leading teams that build things, and eventually to shaping the strategy behind what gets built at all.
              </p>
              <p>
                I spent years in the trenches: writing code, designing interfaces, wrangling data.
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
                My philosophy is what I call <strong className="text-[#1a1a2e]">&ldquo;just enough&rdquo; CIO thinking</strong>: listening to users and interpreting targeted data yields better outcomes than complex frameworks and bloated governance. Technology should serve people, not the other way around.
              </p>
              <p>
                I believe enterprise-grade thinking shouldn&apos;t be reserved for enterprises. Smaller
                organizations, nonprofits, and civic groups deserve the same strategic clarity, just delivered practically and without the overhead.
              </p>

              <blockquote className="border-l-4 border-[#d97706] pl-5 italic text-[#6b7280]">
                &ldquo;Plans in pencil, goals in pen.&rdquo;
              </blockquote>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <Image
                  src="/images/ben-poole.jpg"
                  alt="Ben Poole"
                  width={500}
                  height={500}
                  className="rounded-xl object-cover w-full shadow-md"
                />
              </div>

              {/* Quick facts */}
              <div className="bg-[#faf7f2] border border-[#3b4f6b]/10 rounded-xl p-6 space-y-4">
                {[
                  { label: "Current focus", value: "AI-powered products & digital transformation" },
                  { label: "Background", value: "Product, UX, data, enterprise tech" },
                  { label: "Available for", value: "Speaking, consulting, advisory" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col">
                    <span className="text-xs text-[#d97706] font-medium uppercase tracking-wider">{label}</span>
                    <span className="text-[#1a1a2e] text-sm mt-0.5">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise threads */}
      <section className="py-24 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-[#1a1a2e] mb-12">
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
                <div className="w-1 bg-[#d97706] rounded-full shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-semibold text-[#1a1a2e] mb-1">{title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
