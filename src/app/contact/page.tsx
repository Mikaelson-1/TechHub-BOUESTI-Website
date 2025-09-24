"use client";

import Link from "next/link";
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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-gray-900">
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #F7F1E1 0%, #F1F7EB 50%, #E3F4E4 100%)" }}>
        <div className="container mx-auto max-w-5xl px-6 py-24 sm:py-28 text-center space-y-6">
          <motion.span
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#B5840B] shadow-md border border-white/60"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold leading-tight text-[#111827]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Contact TechHub BOUESTI
          </motion.h1>
          <motion.p
            className="mx-auto max-w-3xl text-lg text-gray-600"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Have questions? Reach out to us and we’ll get back to you promptly.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <a href="#contact-form" className="inline-flex items-center justify-center rounded-2xl px-8 py-3 text-base font-semibold text-white shadow-[0_12px_24px_rgba(212,152,47,0.35)] transition hover:-translate-y-0.5 bg-[#D4982F] hover:bg-[#C28421] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C28421]">
              Send a Message
            </a>
          </motion.div>
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
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Contact Details</h2>
          <p className="text-gray-600">We’re happy to hear from students, partners, and community members.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Email", value: "techhub@bouesti.edu.ng" },
            { label: "Phone", value: "+234 XXX XXX XXXX" },
            { label: "Location", value: "BOUESTI Campus TechHub, Ikere-Ekiti" },
            { label: "Social", value: "Twitter · Instagram · LinkedIn" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="rounded-3xl bg-white shadow-lg border border-gray-100 p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <h3 className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wide">{item.label}</h3>
              <p className="mt-3 text-gray-800 text-base">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact-form" className="bg-white">
        <div className="container mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <motion.div
            className="rounded-3xl bg-white shadow-xl border border-gray-100 p-8 sm:p-10 space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-gray-900">Send a Message</h2>
            <p className="text-gray-600">Share your questions or collaboration ideas and the TechHub team will respond shortly.</p>
            <form className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-[color:var(--brand-primary)] focus:ring-2 focus:ring-[color:var(--brand-primary)]/20" placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-[color:var(--brand-primary)] focus:ring-2 focus:ring-[color:var(--brand-primary)]/20" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-[color:var(--brand-primary)] focus:ring-2 focus:ring-[color:var(--brand-primary)]/20" placeholder="How can we help?" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea rows={6} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-[color:var(--brand-primary)] focus:ring-2 focus:ring-[color:var(--brand-primary)]/20" placeholder="Write your message here..." />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl px-8 py-3 text-base font-semibold text-white shadow-[0_12px_24px_rgba(212,152,47,0.35)] transition hover:-translate-y-0.5 bg-[#D4982F] hover:bg-[#C28421] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C28421]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 pb-20">
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] text-white shadow-xl p-10 sm:p-14 text-center space-y-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">Let’s Build the Future Together</h2>
          <p className="text-white/80 text-base sm:text-lg">
            Whether you’re a student, mentor, or partner, we’d love to connect and collaborate.
          </p>
          <Link
            href="/partners"
            className="inline-flex items-center justify-center rounded-2xl px-8 py-3 text-base font-semibold text-[color:var(--brand-primary)] bg-white shadow-lg transition hover:bg-slate-100"
          >
            Explore Partnerships
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
