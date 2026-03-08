import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-honeycomb min-h-screen flex items-center pt-20">
        <div className="max-w-5xl mx-auto px-6 py-24 w-full">
          <p className="text-[#d97706] font-medium text-sm tracking-widest uppercase mb-4 flex gap-12">
            <span>Product Strategy</span><span>|</span><span>Agentic AI</span><span>|</span><span>Data Products</span>
          </p>
          <div className="grid md:grid-cols-[70%_30%] gap-12 items-start">
            {/* Left — main content (70%) */}
            <div>
              <h1 className="font-heading font-bold text-[#1a1a2e] leading-tight mb-6">
                <span className="text-2xl md:text-4xl">Opinion builds a product, research builds a business.</span>
                <span className="block text-lg md:text-2xl text-[#3b4f6b] mt-2">I help product people apply Agentic AI, Data Analytics, and UX Research to make decisions on building and marketing their products.</span>
              </h1>
              <p className="text-[#374151] text-base md:text-lg leading-relaxed mb-10">
                Twenty-five years in marketing and product taught me one thing: the biggest competitive edge isn't building something good, it's doing the research to know you're building the right thing. I build certified data products at the intersection of UX research, behavioral economics, and change management, bringing engineering closer to customers and the KPIs that matter. Now leading the shift where AI agents and agentic analytics replace traditional dashboards entirely.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="bg-[#1a1a2e] text-[#faf7f2] px-6 py-3 rounded text-sm font-medium hover:bg-[#3b4f6b] transition-colors"
                >
                  About Me
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#d97706] text-[#d97706] px-6 py-3 rounded text-sm font-medium hover:bg-[#d97706] hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right — photo (30%) */}
            <div className="hidden md:flex justify-center">
              <Image
                src="/images/ben-poole.jpg"
                alt="Ben Poole"
                width={320}
                height={320}
                className="rounded-2xl object-cover shadow-lg w-full aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="bg-grid py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            At the intersection of data, people, and strategy.
          </h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mb-16">
            My work lives at the edge of what&apos;s technical and what&apos;s human: where data tells a story, systems serve people, and change actually sticks.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Product Leadership",
                desc: "Turning messy ambiguity into clear roadmaps, aligned teams, and shipped outcomes, at scale.",
                color: "border-[#d97706]",
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
                className={`bg-[#faf7f2] border-t-4 ${color} p-6 rounded shadow-sm`}
              >
                <h3 className="font-heading text-xl font-semibold text-[#1a1a2e] mb-3">
                  {title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-24 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-[#1a1a2e] mb-2">
              Thinking out loud.
            </h2>
            <p className="text-[#6b7280] text-lg">
              Perspectives on AI, product, leadership, and the messy middle of getting things done.
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 bg-[#faf7f2] border border-[#3b4f6b]/30 text-[#3b4f6b] px-6 py-3 rounded text-sm font-medium hover:border-[#3b4f6b] transition-colors"
          >
            Read the Blog →
          </Link>
        </div>
      </section>

      {/* Certifications teaser */}
      <section className="py-24 bg-[#1a1a2e]">
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
            className="text-[#d97706] text-sm font-medium hover:underline"
          >
            View certifications & featured work →
          </Link>
        </div>
      </section>
    </>
  );
}
