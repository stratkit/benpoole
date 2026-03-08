import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Ben Poole",
  description: "Ben Poole's certifications in Microsoft Azure and Prosci Change Management, and the real work behind each one.",
};

const certifications = [
  {
    name: "Microsoft Azure",
    issuer: "Microsoft",
    credential: "Azure Fundamentals (AZ-900)",
    summary: "Cloud architecture and services, earned to put to work, not to hang on a wall.",
    description:
      "Azure certification gave me a rigorous foundation in cloud infrastructure: compute, networking, storage, identity, and security. More importantly, it gave me a shared vocabulary with engineering teams and the credibility to make architectural decisions that held up under scrutiny.",
    work: {
      title: "Fintech Startup Scaling: $1B+ Valuation",
      detail:
        "Contributed to cloud infrastructure strategy during a period of hypergrowth at a fintech startup. The challenge wasn't just scaling. It was scaling reliably, securely, and without proportional headcount growth. Cloud-native thinking was core to making that possible.",
      stats: [
        { value: "$1B+", label: "Valuation reached" },
        { value: "Cloud-native", label: "Architecture approach" },
      ],
    },
    tags: ["Cloud", "Infrastructure", "Fintech", "Enterprise"],
    accentColor: "border-[#3b4f6b]",
    tagColor: "bg-[#3b4f6b]/10 text-[#3b4f6b]",
  },
  {
    name: "Prosci Change Management",
    issuer: "Prosci",
    credential: "Prosci Certified Change Practitioner",
    summary: "Technology without adoption is just expensive shelf-ware.",
    description:
      "Prosci's ADKAR model is the most practical change management framework I've used. It focuses on individual transitions, not organizational charts. Getting certified formalized what I'd learned the hard way: that resistance is information, not a problem to be managed away.",
    work: {
      title: "Microsoft Teams Global Rollout: 30,000+ Employees",
      detail:
        "Led UX research and change management for one of the largest enterprise collaboration deployments of its kind. Built a 'Change Champions Community' embedded in business units across the organization. Ran industry-standard research to identify adoption barriers before launch, not after. The result was one of the faster large-scale Teams rollouts on record.",
      stats: [
        { value: "30K+", label: "Employees impacted" },
        { value: "Global", label: "Deployment scale" },
      ],
    },
    tags: ["Change Management", "Leadership", "Enterprise", "UX Research"],
    accentColor: "border-[#c2612a]",
    tagColor: "bg-[#c2612a]/10 text-[#c2612a]",
  },
];

export default function Certifications() {
  return (
    <div className="pt-24">

      {/* Header */}
      <section className="bg-honeycomb py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#d97706] font-medium text-sm tracking-widest uppercase mb-4">Certifications & Work</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#1a1a2e] leading-tight mb-4">
            Credentials in context.
          </h1>
          <p className="text-[#6b7280] text-xl max-w-2xl leading-relaxed">
            Every certification here connects to real work. Here&apos;s what I earned, why it matters, and where I put it to use.
          </p>
        </div>
      </section>

      {/* Certification cards */}
      <section className="bg-grid py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {certifications.map((cert) => (
            <div key={cert.name} className={`bg-[#faf7f2] border-l-4 ${cert.accentColor} rounded-xl shadow-sm overflow-hidden`}>
              {/* Top */}
              <div className="p-8 pb-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1a1a2e]">{cert.name}</h2>
                    <p className="text-[#6b7280] text-sm mt-1">{cert.issuer} · {cert.credential}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-3 py-1 rounded-full ${cert.tagColor}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[#d97706] font-medium italic mb-3">&ldquo;{cert.summary}&rdquo;</p>
                <p className="text-[#374151] leading-relaxed">{cert.description}</p>
              </div>

              {/* Featured work */}
              <div className="bg-[#1a1a2e] px-8 py-6">
                <p className="text-xs text-[#d97706] font-medium uppercase tracking-wider mb-3">Featured Work</p>
                <h3 className="font-heading text-lg font-semibold text-[#faf7f2] mb-3">{cert.work.title}</h3>
                <p className="text-[#a0a0b0] text-sm leading-relaxed mb-6">{cert.work.detail}</p>
                <div className="flex gap-8">
                  {cert.work.stats.map(({ value, label }) => (
                    <div key={label}>
                      <div className="text-2xl font-bold text-[#d97706]">{value}</div>
                      <div className="text-xs text-[#6b7280] mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#6b7280] text-lg mb-6">
            Want to talk about how these capabilities apply to your organization?
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#1a1a2e] text-[#faf7f2] px-8 py-3 rounded text-sm font-medium hover:bg-[#3b4f6b] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

    </div>
  );
}
