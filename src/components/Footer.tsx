import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[color:var(--brand-primary)]/30 text-[color:var(--brand-secondary)]">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-sm">© TechHub BOUESTI 2025</p>
          <nav>
            <ul className="flex flex-wrap gap-6 text-sm">
              <li><Link href="/about" className="text-[color:var(--brand-secondary)] hover:opacity-80">About</Link></li>
              <li><Link href="/events" className="text-[color:var(--brand-secondary)] hover:opacity-80">Events</Link></li>
              <li><Link href="/community" className="text-[color:var(--brand-secondary)] hover:opacity-80">Community</Link></li>
              <li><Link href="/partners" className="text-[color:var(--brand-secondary)] hover:opacity-80">Partners</Link></li>
              <li><Link href="/contact" className="text-[color:var(--brand-secondary)] hover:opacity-80">Contact</Link></li>
              <li><Link href="/join" className="text-[color:var(--brand-secondary)] hover:opacity-80">Join</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-6 flex gap-4 text-sm">
          <a href="#" className="hover:opacity-80">Twitter</a>
          <a href="#" className="hover:opacity-80">Instagram</a>
          <a href="#" className="hover:opacity-80">LinkedIn</a>
        </div>
      </div>
      <div className="h-1 brand-gradient" />
    </footer>
  );
}
