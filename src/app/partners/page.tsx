"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const heroFade = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -12, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const partners = [
  { name: "GDGoC BOUESTI", logo: "/images/partners/GDGoC BOUESTI.png" },
  { name: "TechHub EKSU", logo: "/images/partners/techhub EKSU.png" },
  { name: "ATC Africa", logo: "/images/partners/ATC Africa BOUESTI.png" },
  { name: "ARVANI", logo: "/images/partners/ARVANI-2.jpeg", emphasis: true },
  { name: "OSCA Ado-Ekiti", logo: "/images/partners/Osca Ado-Ekiti.png" },
  { name: "The Mikaelson Community", logo: "/images/partners/The Mikaelson Community.png" },
  { name: "Enactus BOUESTI", logo: "/images/partners/Enactus Logo 1024x444.png" },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-gray-900">
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #F7F1E1 0%, #F1F7EB 50%, #E3F4E4 100%)" }}>
        <div className="container mx-auto max-w-5xl px-6 py-24 sm:py-28 text-center space-y-6">
          <motion.span
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#B5840B] shadow-md border border-white/60"
            variants={heroFade}
            initial="hidden"
            animate="visible"
          >
            Our Network
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold leading-tight text-[#111827]"
            variants={heroFade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Our Partners
          </motion.h1>
          <motion.p
            className="mx-auto max-w-3xl text-lg text-gray-600"
            variants={heroFade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            We collaborate with amazing communities, organizations, and companies to empower students at TechHub BOUESTI.
          </motion.p>
          <motion.div variants={heroFade} initial="hidden" animate="visible" custom={3}>
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-2xl px-8 py-3 text-base font-semibold text-black shadow-[0_12px_24px_rgba(212,152,47,0.35)] transition hover:-translate-y-0.5 bg-[#F9E4B5] hover:bg-[#F3D48D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C28421]"
            >
              Join Our Network
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6 py-16 sm:py-20 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Featured Partners</h2>
          <p className="text-gray-600">Floating logos celebrate the communities that power student success.</p>
        </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <motion.div
                key={partner.name}
                className={`relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100 flex flex-col items-center gap-5 p-10 ${partner.emphasis ? "sm:p-12" : ""}`}
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.03, rotate: 1 }}
            >
                <motion.div
                  className={`relative rounded-2xl bg-white border border-[color:var(--brand-primary)]/20 flex items-center justify-center shadow-md ${partner.emphasis ? "h-36 w-36" : "h-32 w-32"}`}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                >
                  <Image src={partner.logo} alt={`${partner.name} logo`} fill className={`object-contain ${partner.emphasis ? "p-4" : "p-6"}`} />
                </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">{partner.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <motion.div
          className="rounded-3xl bg-white shadow-lg border border-gray-100 p-8 sm:p-10 text-center space-y-4"
          variants={heroFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900">Why Partnerships Matter</h2>
          <p className="text-lg text-gray-600">
            Our partners provide mentorship, resources, and opportunities to help students thrive in tech. Together, we unlock pathways to careers, entrepreneurship, and community impact across Ekiti State and beyond.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 pb-20">
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] text-white shadow-xl p-10 sm:p-14 text-center space-y-4"
          variants={heroFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">Become a Partner</h2>
          <p className="text-white/80 text-base sm:text-lg">
            Collaborate with TechHub BOUESTI to mentor, sponsor programs, or co-create opportunities for students.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-2xl px-8 py-3 text-base font-semibold text-black shadow-[0_12px_24px_rgba(212,152,47,0.35)] transition hover:-translate-y-0.5 bg-[#F9E4B5] hover:bg-[#F3D48D]"
          >
            Partner with Us
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
