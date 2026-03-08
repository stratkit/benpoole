import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community | Ben Poole",
  description: "Ben Poole's community involvement and nonprofit work in the Omaha area.",
};

export default function Community() {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="bg-honeycomb py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#06b6d4] font-medium text-sm tracking-widest uppercase mb-4">
            <Link href="/about" className="hover:underline">About</Link> · Community
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#f1f5f9] leading-tight mb-6">
            Giving back to<br />
            <span className="text-[#3b4f6b]">the community.</span>
          </h1>
          <p className="text-[#cbd5e1] text-xl max-w-2xl leading-relaxed">
            Enterprise-grade thinking shouldn&apos;t be reserved for enterprises. I bring the same
            strategic rigor I use at work to the nonprofits and civic groups that need it most.
          </p>
        </div>
      </section>

      {/* Stories */}
      <section className="bg-grid py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-[#f1f5f9] mb-10">Involvement</h2>
          <div className="grid md:grid-cols-2 gap-8">

            {/* OVG card — no image */}
            <div className="bg-[#1e293b] rounded-xl overflow-hidden border border-[#3b4f6b]/20">
              <div className="p-6 flex flex-col h-full">
                <p className="text-xs text-[#06b6d4] font-medium uppercase tracking-widest mb-3">Omaha Community Foundation</p>
                <h3 className="font-heading text-xl font-semibold text-[#f1f5f9] mb-3">
                  Omaha Venture Group
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  As a Senior Member and Group Leader of the Omaha Venture Group — a program of the Omaha
                  Community Foundation — I help evaluate and advocate for nonprofits seeking grants and
                  strategic support. OVG brings together civic-minded professionals to direct philanthropic
                  resources toward organizations making a measurable impact across the Omaha community.
                </p>
                <p className="text-xs text-[#3b4f6b] font-medium uppercase tracking-wider mt-6">Senior Member · Group Leader</p>
              </div>
            </div>

            <Link href="/about/community/cornbelt-diabetes-connection" className="group bg-[#1e293b] rounded-xl overflow-hidden border border-[#3b4f6b]/20 hover:border-[#06b6d4]/40 transition-colors">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src="/images/cornbelt-diabetes-connection.png"
                  alt="Cornbelt Diabetes Connection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-[#06b6d4] font-medium uppercase tracking-widest mb-3">HDR Foundation · Omaha Venture Group</p>
                <h3 className="font-heading text-xl font-semibold text-[#f1f5f9] mb-3 group-hover:text-[#06b6d4] transition-colors">
                  Cornbelt Diabetes Connection
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  Advocating for a local nonprofit at the intersection of community health, early detection,
                  and the HDR Professional Associate designation — bringing free diabetes screenings to
                  underserved communities in Omaha.
                </p>
                <p className="text-[#06b6d4] text-sm font-medium mt-4">Read the story →</p>
              </div>
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}
