export default function Footer() {
  return (
    <footer className="border-t border-[#3b4f6b]/10 bg-[#0f172a] mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-[#94a3b8] text-sm">
          © {new Date().getFullYear()} Ben Poole
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/benpoole"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#6b7280] hover:text-[#06b6d4] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/contact"
            className="text-sm text-[#6b7280] hover:text-[#06b6d4] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
