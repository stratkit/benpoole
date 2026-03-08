import Link from "next/link";
import Image from "next/image";
import RandomQuote from "@/components/RandomQuote";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-honeycomb min-h-screen flex items-center pt-20">
        <div className="max-w-5xl mx-auto px-6 py-24 w-full">
          <p className="text-[#06b6d4] font-medium text-sm tracking-widest uppercase mb-4 flex gap-12">
            <span>Product Strategy</span><span>|</span><span>Agentic AI</span><span>|</span><span>Data Products</span>
          </p>
          <div className="grid md:grid-cols-[70%_30%] gap-12 items-start">
            {/* Left — main content (70%) */}
            <div>
              {/* Photo — visible on mobile only, above headline */}
              <div className="flex md:hidden justify-center mb-8">
                <Image
                  src="/images/ben-poole.jpg"
                  alt="Ben Poole"
                  width={200}
                  height={200}
                  className="rounded-2xl object-cover shadow-lg aspect-square border-2 border-slate-300"
                />
              </div>
              <h1 className="font-heading font-bold text-[#f1f5f9] leading-tight mb-6">
                <span className="text-2xl md:text-4xl">Opinion builds a product, research builds a business.</span>
                <span className="block text-lg md:text-2xl text-[#3b4f6b] mt-2">I help product people apply Agentic AI, Data Analytics, and UX Research to make decisions on building and marketing their products.</span>
              </h1>
              <p className="text-[#cbd5e1] text-base md:text-lg leading-relaxed mb-10">
                All Product teams add features and build really great things, but they are often doing it without enough certainty. Certain that it's the right thing to build, from many different angles, lenses, and trade-offs. I bring Agentic AI and Customer Analytics to the art of Product Design and Marketing. I enjoy working across Product teams, bringing Engineering and Data Science closer to the customers, and business KPIs that matter. Everything is a product to me, including the very process that Data teams follow to better understand their products, their users' behavior and needs, and how they go to market, experiment, and engage feedback loops to unlock product growth and balance with stable, predictable systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="bg-[#020617] text-[#faf7f2] px-6 py-3 rounded text-sm font-medium hover:bg-[#3b4f6b] transition-colors"
                >
                  About Me
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#06b6d4] text-[#06b6d4] px-6 py-3 rounded text-sm font-medium hover:bg-[#06b6d4] hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right — photo (30%), desktop only */}
            <div className="hidden md:flex justify-center">
              <Image
                src="/images/ben-poole.jpg"
                alt="Ben Poole"
                width={320}
                height={320}
                className="rounded-2xl object-cover shadow-lg w-full aspect-square border-2 border-slate-300"
              />
            </div>
          </div>
        </div>
      </section>

      <RandomQuote />

      {/* What I Do */}
      <section className="bg-grid py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-4">
            At the intersection of data, people, and strategy.
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mb-16">
            My work lives at the edge of what&apos;s technical and what&apos;s human: where data tells a story, systems serve people, and change actually sticks.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Product Leadership",
                desc: "Turning messy ambiguity into clear roadmaps, aligned teams, and shipped outcomes, at scale.",
                color: "border-[#06b6d4]",
              },
              {
                title: "AI & Technology",
                desc: "Building with AI thoughtfully: not hype-first, but outcome-first. Azure certified, hands-on practitioner.",
                color: "border-[#3b4f6b]",
              },
              {
                title: "Change & People",
                desc: "Prosci certified. Change that doesn't account for people isn't change. It's disruption with a timeline.",
                color: "border-[#c2612a]",
              },
            ].map(({ title, desc, color }) => (
              <div
                key={title}
                className={`bg-[#1e293b] border-t-4 ${color} p-6 rounded shadow-sm`}
              >
                <h3 className="font-heading text-xl font-semibold text-[#f1f5f9] mb-3">
                  {title}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-24 bg-[#1e293b]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-[#f1f5f9] mb-2">
              Thinking out loud.
            </h2>
            <p className="text-[#94a3b8] text-lg">
              Perspectives on AI, product, leadership, and the messy middle of getting things done.
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 bg-[#1e293b] border border-[#3b4f6b]/30 text-[#3b4f6b] px-6 py-3 rounded text-sm font-medium hover:border-[#3b4f6b] transition-colors"
          >
            Read the Blog →
          </Link>
        </div>
      </section>

      {/* Certifications teaser */}
      <section className="py-24 bg-[#020617]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-[#faf7f2] mb-2">
            Credentials that mean something.
          </h2>
          <p className="text-[#a0a0b0] text-lg mb-10">
            Not just logos on a page. Each certification represents a capability I put to work.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Microsoft Azure", "Prosci Change Management", "More →"].map((cert) => (
              <span
                key={cert}
                className="bg-[#3b4f6b]/40 text-[#faf7f2] text-sm px-4 py-2 rounded-full border border-[#3b4f6b]"
              >
                {cert}
              </span>
            ))}
          </div>
          <Link
            href="/certifications"
            className="text-[#06b6d4] text-sm font-medium hover:underline"
          >
            View certifications & featured work →
          </Link>
        </div>
      </section>
    </>
  );
}
