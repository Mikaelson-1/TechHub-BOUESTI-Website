"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
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

const featuredCommunities = [
  {
    name: "GDGoC BOUESTI",
    description: "Peer-to-peer learning, Google developer tech, and campus hackathons.",
    logo: "/images/logo.png",
  },
  {
    name: "Enactus BOUESTI",
    description: "Entrepreneurial action empowering students to solve social challenges.",
    logo: "/images/logo.png",
  },
  {
    name: "Hult Prize BOUESTI",
    description: "Global innovation competition tackling world issues through student solutions.",
    logo: "/images/logo.png",
  },
  {
    name: "Cowrywise BOUESTI",
    description: "Financial literacy, savings culture, and personal finance workshops.",
    logo: "/images/logo.png",
  },
  {
    name: "Amazing Tech Community",
    description: "An all-inclusive space for tech enthusiasts to discover new opportunities.",
    logo: "/images/logo.png",
  },
];

const ekitiCommunities = [
  "GDG Ado-Ekiti",
  "AWS User Group Ado-Ekiti",
  "She Code Africa Ekiti",
  "Product Designers EKSU",
  "Figma Africa Ekiti",
];

const offerings = [
  { icon: "🎓", title: "Workshops & Bootcamps", text: "Hands-on learning experiences led by mentors and industry experts." },
  { icon: "💡", title: "Hackathons & Competitions", text: "Collaborate, compete, and showcase solutions to real challenges." },
  { icon: "🧭", title: "Mentorship & Career Guidance", text: "Navigate your journey with personalized support from professionals." },
  { icon: "🛠", title: "Collaborative Projects", text: "Build projects with teammates, improve your portfolio, and ship ideas." },
  { icon: "🤝", title: "Networking Opportunities", text: "Connect with peers, communities, and companies across Nigeria." },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-gray-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-primary)]/15 to-[color:var(--brand-secondary)]/20" />
        <div className="relative container mx-auto max-w-5xl px-6 py-24 sm:py-28 text-center space-y-6">
          <motion.span
            className="inline-flex items-center justify-center rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[color:var(--brand-primary)] shadow"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            TechHub BOUESTI Community
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Join the TechHub BOUESTI Community
          </motion.h1>
          <motion.p
            className="mx-auto max-w-3xl text-lg text-gray-600"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            A space for students to learn, grow, and connect through technology and innovation.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--brand-primary)] px-6 py-3 text-white font-semibold shadow-lg transition hover:bg-[color:var(--brand-secondary)]"
            >
              Join the Community
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <motion.div
          className="rounded-3xl bg-white shadow-xl border border-gray-100 p-8 sm:p-10 space-y-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900">About TechHub Community</h2>
          <p className="text-lg text-gray-600">
            TechHub BOUESTI is a central hub where students collaborate, learn new skills, and build projects. We provide mentorship, workshops, and events to help students thrive in technology.
          </p>
        </motion.div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto max-w-6xl px-6 py-16 sm:py-20 space-y-10">
          <motion.div
            className="text-center space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Featured Student Communities</h2>
            <p className="text-gray-600">Explore student-led groups making a difference across BOUESTI.</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCommunities.map((community, index) => (
              <motion.div
                key={community.name}
                className="rounded-3xl bg-slate-50 border border-slate-100 p-6 shadow-sm"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full bg-white shadow flex items-center justify-center">
                    <Image src={community.logo} alt={`${community.name} logo`} fill className="object-contain p-2" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{community.name}</h3>
                </div>
                <p className="mt-4 text-sm text-gray-600">{community.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 py-16 sm:py-20 space-y-8">
        <motion.div
          className="rounded-3xl bg-white shadow-lg border border-gray-100 p-8 sm:p-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900">Other Tech Communities in Ekiti State</h2>
          <p className="mt-3 text-gray-600">
            Connect with thriving tech ecosystems beyond campus and expand your learning network across Ekiti State.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {ekitiCommunities.map((name, index) => (
              <motion.div
                key={name}
                className="rounded-2xl bg-slate-50 border border-slate-100 p-4 text-sm text-gray-700"
                variants={fadeUp}
                custom={index}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto max-w-6xl px-6 py-16 sm:py-20 space-y-10">
          <motion.div
            className="text-center space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Community Offerings</h2>
            <p className="text-gray-600">We create opportunities for every student to grow.</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-3xl bg-gradient-to-br from-[color:var(--brand-primary)]/10 to-[color:var(--brand-secondary)]/10 border border-[color:var(--brand-primary)]/20 p-6 shadow-sm"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6 py-16 sm:py-20 space-y-10">
        <motion.div
          className="text-center space-y-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Community Gallery</h2>
          <p className="text-gray-600">A snapshot of communities across BOUESTI and Ekiti State.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...featuredCommunities.map((c) => c.name), ...ekitiCommunities].map((name, index) => (
            <motion.div
              key={name}
              className="rounded-3xl bg-white shadow-lg border border-gray-100 p-6 flex flex-col items-start"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <div className="rounded-xl bg-[color:var(--brand-primary)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--brand-primary)] uppercase tracking-wide">
                Community
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{name}</h3>
              <Link href="/register" className="mt-4 text-sm font-semibold text-[color:var(--brand-primary)] hover:text-[color:var(--brand-secondary)]">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 pb-20">
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] text-white shadow-xl p-10 sm:p-14 text-center spacey-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">Be Part of the Next Generation of Tech Leaders</h2>
          <p className="mt-3 text-white/80 text-base sm:text-lg">
            Plug into mentorship, learning, and collaboration designed to help BOUESTI students thrive in technology.
          </p>
          <div className="mt-6">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-[color:var(--brand-primary)] font-semibold shadow-lg transition hover:bg-slate-100"
            >
              Join the Community
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
