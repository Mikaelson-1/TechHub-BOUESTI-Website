import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-16">
      <div className="container mx-auto max-w-6xl px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">TechHub BOUESTI</h3>
          <p className="text-sm text-gray-400">
            Building a community of student innovators through mentorship, collaboration, and hands-on experience.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/events" className="hover:text-white transition">Events</Link></li>
            <li><Link href="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Contact</h4>
          <p className="mt-3 text-sm text-gray-300">techhub@bouesti.edu.ng</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Connect</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="https://x.com/techhub_bouesti"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/techhub-bouesti/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/techhub_bouesti/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TechHub BOUESTI. All rights reserved.
      </div>
    </footer>
  );
}
