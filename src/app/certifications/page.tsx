import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Certifications | Ben Poole",
  description: "Ben Poole's certifications in Microsoft Azure and Prosci Change Management, and the real work behind each one.",
};

const certifications = [
  {
    name: "Microsoft Azure",
    issuer: "Microsoft",
    credential: "Azure Fundamentals (AZ-900)",
    summary: "",
    description:
      "Earning the Microsoft Azure Certification gave me a rigorous foundation in cloud infrastructure: compute, networking, storage, identity, and security. More importantly, it gave me a shared vocabulary with engineering teams and the credibility to make architectural decisions that held up under scrutiny. And of course, it prepared me to begin creating with Copilot and Microsoft AI tools.",
    work: null,
    tags: ["Cloud", "Infrastructure", "Fintech", "Enterprise"],
    accentColor: "border-[#3b4f6b]",
    tagColor: "bg-[#3b4f6b]/10 text-[#3b4f6b]",
    image: "/images/cert-azure-func.png",
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
      image: "/images/nps-metrics-paypal.png",
    },
    videoThumb: "/images/microsoft-video-change-poole.png",
    videoUrl: "https://www.youtube.com/watch?v=0BfmuFHuWbc",
    videoCaption: "Featured by Microsoft: How I created an Organizational Change Management team whose unique approach to Data Analytics, UX Research, and Change Management drove the global technology transformation that led to an elite Microsoft Teams rollout worth talking about.",
    tags: ["Change Management", "Leadership", "Enterprise", "UX Research"],
    accentColor: "border-[#c2612a]",
    tagColor: "bg-[#c2612a]/10 text-[#c2612a]",
    image: "/images/cert-prosci.png",
  },
  {
    name: "FINRA Series 6",
    issuer: "FINRA",
    credential: "Registered Financial Products Representative (Formerly NASD)",
    summary: "",
    description:
      "My goal for earning the Series 6 Mutual Funds, Variable Annuities and Variable Insurance Products was never to sell investments or take on investors as clients. But in building software for the financial industry, I needed to first build credibility among Advisors, Broker/Dealers, Representatives, and even the Custodians. Earning it required deep fluency in securities regulation and compliance, investor protections and data privacy rights, and the compliance frameworks that govern financial product distribution. It gave me firsthand appreciation for how much regulatory structure shapes product design in fintech — and why engineers and product managers in that space need to understand the rules before they build the tools.",
    work: {
      title: "Orion Advisor Services: Founding Team to $40B AUA",
      detail:
        "As a founding team member at what became Orion Advisor Services, I helped build the platform from the ground up — leading web application development and marketing through a high-growth phase. Earning the Series 6 was a deliberate move to deepen credibility with advisors, broker/dealers, and custodians, and to understand the regulatory constraints that shape fintech product design.",
      stats: [
        { value: "$40B", label: "AUA at scale" },
        { value: "Founding", label: "Team member" },
      ],
    },
    tags: ["Fintech", "Compliance", "Financial Products", "Regulation"],
    accentColor: "border-[#06b6d4]",
    tagColor: "bg-[#06b6d4]/10 text-[#06b6d4]",
    image: "/images/FINRA-series6.png",
  },
  {
    name: "HDR Associate Professional Designation",
    issuer: "HDR, Inc.",
    credential: "Associate Designation for Leadership; Pathfinder Award for Innovation and Teamwork",
    summary: "",
    description:
      "The HDR Associate Professional Designation recognized sustained leadership within one of the world's largest architecture, engineering, and construction firms. Over eight years at HDR, I grew from Senior Web Application Developer to Product Manager, leading cloud platform strategy and hybrid architecture design for a 10,000+ employee global firm. I built an enterprise change champion network, negotiated vendor contracts saving $1.4M, and became a trusted partner to technology leadership on strategic planning and cross-functional coordination. The Pathfinder Award recognized the innovation and teamwork behind that work.",
    work: {
      title: "Cloud Platform Strategy for 10,000+ Employee AEC Firm",
      detail:
        "Led multi-year cloud platform strategy including hybrid architecture design and a technology service catalog for HDR. Expanded from Product Owner to a Chief-of-Staff function, driving cross-functional coordination and enterprise platform ownership across design and construction workflows.",
      stats: [
        { value: "$1.4M", label: "Vendor cost savings" },
        { value: "10K+", label: "Employees supported" },
      ],
    },
    tags: ["Cloud Strategy", "Leadership", "Enterprise", "AEC"],
    accentColor: "border-[#d97706]",
    tagColor: "bg-[#d97706]/10 text-[#d97706]",
    image: "/images/hdr-associate.png",
  },
  {
    name: "AIM Institute Advanced IT Leadership Academy",
    issuer: "AIM Institute",
    credential: "Graduate, Advanced IT Leadership Academy (2014)",
    summary: "",
    description:
      "The AIM Institute's Advanced IT Leadership Academy is a selective program for technology professionals ready to step into strategic leadership. The curriculum bridged the gap between technical execution and business strategy — covering executive communication, organizational influence, financial acumen for IT leaders, and cross-functional team leadership. Completing it sharpened how I translate technical complexity into business outcomes and gave me a peer network of technology leaders across the Midwest.",
    work: null,
    tags: ["Leadership", "Strategy", "Executive Development", "Technology"],
    accentColor: "border-[#3b82f6]",
    tagColor: "bg-[#3b82f6]/10 text-[#3b82f6]",
    image: "/images/cert-aim.png",
  },
  {
    name: "LUMA Design Thinking",
    issuer: "LUMA Institute",
    credential: "Certified LUMA Practitioner",
    summary: "",
    description:
      "LUMA's system of 36 human-centered design methods gave me a structured toolkit for the messiest part of product work: the front end of innovation. From stakeholder alignment workshops to rapid ideation and concept testing, LUMA methods became my go-to for facilitating cross-functional teams through ambiguity. I've used them to run Design Thinking workshops with customers and partners at Autodesk, inform UX research strategy at PayPal, and drive alignment on platform decisions at HDR.",
    work: null,
    tags: ["Design Thinking", "UX Research", "Facilitation", "Innovation"],
    accentColor: "border-[#ef4444]",
    tagColor: "bg-[#ef4444]/10 text-[#ef4444]",
    image: "/images/cert-LUMA.png",
  },
];

export default function Certifications() {
  return (
    <div className="pt-24">

      {/* Header */}
      <section className="bg-honeycomb py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#06b6d4] font-medium text-sm tracking-widest uppercase mb-4">Certifications & Work</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#f1f5f9] leading-tight mb-4">
            Certifications and Credentials
          </h1>
          <p className="text-[#94a3b8] text-xl leading-relaxed">
            Every certification here connects to real work. Here&apos;s what I learned, why it matters, and where I put it to use.
          </p>
        </div>
      </section>

      {/* Certification cards */}
      <section className="bg-grid py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {certifications.map((cert) => (
            <div key={cert.name} className={`bg-[#1e293b] border-l-4 ${cert.accentColor} rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row`}>
              {/* Left — cert info (70%) */}
              <div className="p-8 flex-[7]">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-5">
                    {cert.image && (
                      <div className="shrink-0 bg-white rounded-xl p-2 shadow-sm">
                        <Image src={cert.image} alt={`${cert.name} badge`} width={144} height={144} className="object-contain" />
                      </div>
                    )}
                    <div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#f1f5f9]">{cert.name}</h2>
                      <p className="text-[#94a3b8] text-sm mt-1">{cert.issuer} · {cert.credential}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-3 py-1 rounded-full ${cert.tagColor}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {cert.summary && <p className="text-[#06b6d4] font-medium italic mb-3">&ldquo;{cert.summary}&rdquo;</p>}
                <p className="text-[#cbd5e1] leading-relaxed">{cert.description}</p>
                {cert.videoThumb && (
                  <div className="mt-6">
                    {cert.videoUrl ? (
                      <a href={cert.videoUrl} target="_blank" rel="noopener noreferrer" className="block group max-w-md mx-auto">
                        <div className="relative">
                          <Image src={cert.videoThumb} alt="Microsoft OCM video feature" width={480} height={270} className="rounded-lg object-contain w-full" />
                          <div className="absolute inset-0 flex items-center justify-end pr-[50px]">
                            <div className="bg-black/60 rounded-full p-3 group-hover:bg-[#06b6d4]/80 transition-colors">
                              <svg className="w-8 h-8 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                          </div>
                        </div>
                        <p className="text-[#94a3b8] text-sm mt-2 group-hover:text-[#06b6d4] transition-colors">{cert.videoCaption}</p>
                      </a>
                    ) : (
                      <div>
                        <Image src={cert.videoThumb} alt="Microsoft OCM video feature" width={480} height={270} className="rounded-lg object-contain w-full max-w-md" />
                        <p className="text-[#94a3b8] text-sm mt-2">{cert.videoCaption}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right — featured work (30%) */}
              {cert.work && (
                <div className="bg-[#020617] px-6 py-8 flex-[3] flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-[#06b6d4] font-medium uppercase tracking-wider mb-3">Featured Work</p>
                    <h3 className="font-heading text-lg font-semibold text-[#faf7f2] mb-3">{cert.work.title}</h3>
                    <p className="text-[#a0a0b0] text-sm leading-relaxed mb-6">{cert.work.detail}</p>
                    <div className="flex gap-8 mb-6">
                      {cert.work.stats.map(({ value, label }) => (
                        <div key={label}>
                          <div className="text-2xl font-bold text-[#06b6d4]">{value}</div>
                          <div className="text-xs text-[#94a3b8] mt-0.5">{label}</div>
                        </div>
                      ))}
                    </div>
                    {cert.work.image && (
                      <Image src={cert.work.image} alt="NPS metrics" width={300} height={160} className="rounded-lg object-contain w-full" />
                    )}
                  </div>
                  <a
                    href="/case-studies"
                    className="text-xs font-medium text-[#06b6d4] hover:text-[#faf7f2] transition-colors tracking-wide uppercase mt-6 block"
                  >
                    View Case Study →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1e293b]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#94a3b8] text-lg mb-6">
            Want to talk about how these capabilities apply to your organization?
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#020617] text-[#faf7f2] px-8 py-3 rounded text-sm font-medium hover:bg-[#3b4f6b] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

    </div>
  );
}
