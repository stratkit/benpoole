import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cornbelt Diabetes Connection | Ben Poole",
  description: "How Ben Poole advocated for the Cornbelt Diabetes Connection through the Omaha Venture Group and HDR Foundation.",
};

export default function CornbeltDiabetesConnection() {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="bg-honeycomb py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#06b6d4] font-medium text-sm tracking-widest uppercase mb-4">
            <Link href="/about" className="hover:underline">About</Link>
            {" · "}
            <Link href="/about/community" className="hover:underline">Community</Link>
            {" · "}
            Cornbelt Diabetes Connection
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#f1f5f9] leading-tight mb-6">
            Cornbelt Diabetes<br />
            <span className="text-[#3b4f6b]">Connection</span>
          </h1>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#3b4f6b]/40 text-[#faf7f2] text-xs px-3 py-1 rounded-full border border-[#3b4f6b]">HDR Foundation</span>
            <span className="bg-[#3b4f6b]/40 text-[#faf7f2] text-xs px-3 py-1 rounded-full border border-[#3b4f6b]">Omaha Venture Group</span>
            <span className="bg-[#3b4f6b]/40 text-[#faf7f2] text-xs px-3 py-1 rounded-full border border-[#3b4f6b]">Community Health</span>
            <span className="bg-[#3b4f6b]/40 text-[#faf7f2] text-xs px-3 py-1 rounded-full border border-[#3b4f6b]">HDR Professional Associate</span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-grid py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Text */}
            <div className="space-y-6 text-[#cbd5e1] leading-relaxed">
              <p className="text-lg text-[#f1f5f9]">
                Advocating for the Cornbelt Diabetes Connection was one of those rare moments where
                my professional work and community life converged in a meaningful way.
              </p>
              <p>
                Through my involvement with the <strong className="text-[#f1f5f9]">Omaha Venture Group</strong> — a program of the Omaha Community Foundation — I had the opportunity to bring this organization forward for consideration for a grant from the <strong className="text-[#f1f5f9]">HDR Foundation</strong>, a natural fit given my designation as an <strong className="text-[#f1f5f9]">HDR Professional Associate</strong>.
              </p>

              <h2 className="font-heading text-xl font-bold text-[#f1f5f9] pt-2">About the Organization</h2>
              <p>
                The Cornbelt Diabetes Connection (CDC) provides free glucose screenings, health care,
                and education about diabetes and related complications to communities and individuals
                who may not have adequate access to such care or information, and may have no medical insurance.
              </p>
              <p>
                With rising rates of diabetes in the United States, the CDC focuses in particular on the
                critical need for <strong className="text-[#f1f5f9]">early detection</strong>, as well as
                education to care for and prevent the disease. Their unique mission takes on three components:
              </p>

              <div className="space-y-4 pl-2">
                {[
                  { label: "Detection", desc: "Free glucose screenings reaching individuals who may otherwise go undiagnosed." },
                  { label: "Management", desc: "Practical support and resources for those already living with diabetes." },
                  { label: "Education", desc: "Community outreach that builds awareness and preventive health literacy." },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-1 bg-[#c2612a] rounded-full shrink-0 mt-1" />
                    <div>
                      <span className="text-[#f1f5f9] font-semibold">{label}</span>
                      <p className="text-[#94a3b8] text-sm mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-[#06b6d4] pl-5 italic text-[#94a3b8]">
                Enterprise-grade thinking shouldn&apos;t be reserved for enterprises. Smaller organizations
                and civic groups deserve the same strategic clarity — just delivered practically.
              </blockquote>
            </div>

            {/* Image + context card */}
            <div className="space-y-8">
              <Image
                src="/images/cornbelt-diabetes-connection.png"
                alt="Cornbelt Diabetes Connection"
                width={500}
                height={400}
                className="rounded-xl object-cover w-full shadow-md border-2 border-slate-300"
              />

              <div className="bg-[#1e293b] border border-[#3b4f6b]/10 rounded-xl p-6 space-y-4">
                {[
                  { label: "Organization", value: "Cornbelt Diabetes Connection" },
                  { label: "Channel", value: "Omaha Venture Group / Omaha Community Foundation" },
                  { label: "Grant source", value: "HDR Foundation" },
                  { label: "My role", value: "Advocate · HDR Professional Associate" },
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

    </div>
  );
}
