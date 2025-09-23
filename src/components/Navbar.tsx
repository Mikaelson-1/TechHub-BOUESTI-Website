import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-md border-b border-[color:var(--brand-primary)]/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="TechHub BOUESTI Logo"
            width={150}
            height={50}
            className="object-contain"
            priority
          />
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
}
