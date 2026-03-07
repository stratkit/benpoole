export default function Footer() {
  return (
    <footer className="border-t border-[#3b4f6b]/10 bg-[#f0ebe0] mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-[#374151] text-sm">
          © {new Date().getFullYear()} Ben Poole
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/benpoole"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#6b7280] hover:text-[#d97706] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ben@benpoole.me"
            className="text-sm text-[#6b7280] hover:text-[#d97706] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
