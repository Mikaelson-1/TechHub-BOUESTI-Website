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

const pillars = [
  {
    icon: "📚",
    title: "Learning",
    description: "Hands-on workshops, bootcamps, and courses designed for students at every level.",
  },
  {
    icon: "🛠",
    title: "Building",
    description: "Project studios where students prototype, ship, and iterate real-world solutions.",
  },
  {
    icon: "🤝",
    title: "Community",
    description: "Peer learning circles, mentorship, and a supportive network of technologists.",
  },
  {
    icon: "🚀",
    title: "Opportunities",
    description: "Hackathons, internships, and industry connections to launch your career.",
  },
];

const benefits = [
  "Hands-on technical training and mentorship",
  "Dedicated innovation space to research, build, and test ideas",
  "Access to a vibrant network of peers and industry experts",
  "Global exposure through events, challenges, and partnerships",
  "Support for launching student-led products and startups",
];

const stats = [
  { value: "2,000+", label: "Students empowered" },
  { value: "20+", label: "Events hosted" },
  { value: "10+", label: "Community partners" },
  { value: "9+", label: "Industry speakers" },
];

const team = [
  {
    name: "Michael Olukayode",
    role: "Founder & Community Lead",
    description: "Creates pathways for students to collaborate, learn, and build impactful projects.",
  },
  {
    name: "Goodness Adebayo",
    role: "Product Design Mentor",
    description: "Guides students on user-centric design, rapid prototyping, and design thinking.",
  },
  {
    name: "Olamide Ilorin",
    role: "Frontend Engineer Mentor",
    description: "Supports learners in modern web technologies, clean architecture, and best practices.",
  },
  {
    name: "Imam Bashir Abdulwahab",
    role: "Community Enabler",
    description: "Builds inclusive student communities and fosters collaborative learning experiences.",
  },
  {
    name: "Samuel Afolabi",
    role: "Cybersecurity Consultant",
    description: "Equips members with security fundamentals and real-world defense strategies.",
  },
  {
    name: "Shalom Gbamigboye",
    role: "CEO & Co-Founder, Entobo Technologies",
    description: "Partners with TechHub to unlock entrepreneurship and startup readiness.",
  },
];

const partners = [1, 2, 3, 4, 5, 6];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-gray-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-primary)]/10 via-transparent to-[color:var(--brand-secondary)]/10" />
        <div className="relative container mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <motion.div
            className="text-center space-y-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex items-center justify-center rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[color:var(--brand-primary)] shadow">
              About TechHub BOUESTI
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              A Space for Students to Learn, Explore, and Build Solid Tech Skills
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              TechHub BOUESTI empowers students with resources, mentorship, and opportunities to thrive in tech.
            </p>
            <div className="pt-2">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-xl bg-[color:var(--brand-primary)] px-6 py-3 text-white font-semibold shadow-lg transition hover:bg-[color:var(--brand-secondary)]"
              >
                Join Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 py-16 sm:py-20 space-y-12">
        <motion.div
          className="space-y-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Our Story</h2>
          <p className="text-gray-600 text-lg">
            TechHub BOUESTI was created to bridge the gap between classroom theory and real-world practice — giving students the tools, community, and mentorship needed to build meaningful technology.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2">
          <motion.div
            className="rounded-2xl bg-white shadow-lg p-6 sm:p-8 border border-gray-100"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            <h3 className="text-xl font-semibold text-[color:var(--brand-primary)]">Our Mission</h3>
            <p className="mt-4 text-lg font-semibold text-gray-800">
              “To nurture and empower the next generation of innovators by providing an inclusive space for learning, collaboration, and hands-on tech experience.”
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-white shadow-lg p-6 sm:p-8 border border-gray-100"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            <h3 className="text-xl font-semibold text-[color:var(--brand-primary)]">Our Vision</h3>
            <p className="mt-4 text-lg text-gray-800">
              “To make BOUESTI the home of future tech leaders in Africa — starting with students who dream, build, and lead through technology.”
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto max-w-6xl px-6 py-16 sm:py-20 space-y-12">
          <motion.div
            className="text-center space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">What We Offer</h2>
            <p className="text-gray-600">
              Our core pillars ensure every student can learn, build, connect, and launch ideas that matter.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="rounded-2xl bg-slate-50 border border-slate-100 p-6 shadow-sm"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={index}
              >
                <span className="text-3xl">{pillar.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{pillar.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{pillar.description}</p>
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
          <h2 className="text-3xl font-semibold text-gray-900">Why Join TechHub BOUESTI?</h2>
          <p className="mt-3 text-gray-600">Unlock opportunities designed to elevate your tech journey.</p>
          <ul className="mt-6 space-y-3 text-gray-700 text-sm">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 text-lg text-[color:var(--brand-primary)]">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto max-w-6xl px-6 py-16 sm:py-20 space-y-12">
          <motion.div
            className="text-center space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Our Impact in Numbers</h2>
            <p className="text-gray-600">We are building momentum for the next generation of builders and innovators.</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl bg-gradient-to-br from-[color:var(--brand-primary)]/15 to-[color:var(--brand-secondary)]/10 border border-[color:var(--brand-primary)]/20 p-6 text-center shadow-sm"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <div className="text-3xl font-bold text-[color:var(--brand-primary)]">{stat.value}</div>
                <p className="mt-2 text-sm text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6 py-16 sm:py-20 space-y-12">
        <motion.div
          className="text-center space-y-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Meet the Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">A diverse group of mentors, builders, and enablers guiding the community forward.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="rounded-2xl bg-white shadow-lg border border-gray-100 p-6 flex flex-col items-center text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <div className="relative h-28 w-28">
                <Image
                  src="/images/team-placeholder.svg"
                  alt={`${member.name} portrait`}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-[color:var(--brand-primary)] font-medium">{member.role}</p>
              <p className="mt-3 text-sm text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6 py-16 sm:py-20 space-y-12">
          <motion.div
            className="text-center space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Our Partners</h2>
            <p className="text-gray-600">We collaborate with industry and community partners to broaden student opportunities.</p>
          </motion.div>

          <div className="rounded-3xl bg-white border border-gray-100 p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((partner) => (
                <motion.div
                  key={partner}
                  className="h-20 rounded-2xl bg-slate-100 flex items-center justify-center"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={partner}
                >
                  <span className="text-gray-400 text-sm font-semibold">Logo</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 py-16 sm:py-20 text-center space-y-6">
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] text-white shadow-xl p-10 sm:p-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">Be Part of the Next Generation of Tech Leaders</h2>
          <p className="mt-3 text-base sm:text-lg text-white/80">
            Join a thriving community of student builders, designers, and innovators shaping the future of technology at BOUESTI.
          </p>
          <div className="mt-6">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-[color:var(--brand-primary)] font-semibold shadow-lg transition hover:bg-slate-100"
            >
              Join Us
            </Link>
          </div>
        </motion.div>
      </section>

      <footer className="bg-gray-900 text-gray-200">
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
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} TechHub BOUESTI. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
