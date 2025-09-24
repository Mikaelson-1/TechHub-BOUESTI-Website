"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TrackMarquee from "@/components/TrackMarquee";
import HubPass from "@/components/HubPass";

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

export default function Home() {
  const sampleHubId = "BOUESTI-2025-000";
  const qrValue = `/verify/${encodeURIComponent(sampleHubId)}`;

  return (
    <main>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #F7F1E1 0%, #F1F7EB 50%, #E3F4E4 100%)" }}>
        <div className="container mx-auto max-w-5xl px-6 py-24 sm:py-28 text-center space-y-6">
          <span className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#B5840B] shadow-md border border-white/60">
            TechHub BOUESTI
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#111827]">
            Empowering Students to Shape the Future of Tech
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Learn with mentors, build real projects, and join a vibrant community accelerating BOUESTI students into tech careers.
          </p>
          <div>
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-2xl px-8 py-3 text-base font-semibold text-white shadow-[0_12px_24px_rgba(212,152,47,0.35)] transition hover:-translate-y-0.5 bg-[#D4982F] hover:bg-[#C28421] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C28421]"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">About TechHub BOUESTI</h2>
          <p className="mt-4 text-gray-700">We are a student-driven technology hub fostering innovation through programs, mentorship, and community events.</p>
        </div>
      </section>

      {/* Get Your Hub Card */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-[color:var(--brand-primary)] text-center mb-6">Register & Get Your Hub Card</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl shadow-lg p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-900">Become a Verified Member</h3>
              <p className="text-sm text-gray-600 mt-3">
                Complete the multi-step registration to submit your details, customize your hub card, and pay the one-time card fee.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>• Provide basic student information</li>
                <li>• Choose your tech journey level</li>
                <li>• Customize your digital hub card in real time</li>
                <li>• Secure checkout via Paystack</li>
              </ul>
              <Link
                href="/join"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-6 py-3 text-white font-semibold shadow hover:-translate-y-0.5 transition"
              >
                Start Registration
              </Link>
            </div>
            <div className="rounded-2xl shadow-lg p-6 bg-white">
              <h3 className="font-semibold mb-4">Card Preview</h3>
              <HubPass name="John Doe" hubId={sampleHubId} status="Pending" expiry="Dec 2025" qrValue={qrValue} />
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Tracks */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-[color:var(--brand-primary)] text-center mb-8">Programs & Tracks</h2>
          <TrackMarquee tracks={["Web Development","Data & AI","Product & Design","Cybersecurity","Cloud & DevOps","Mobile Development","Game Development","Blockchain","AR/VR"]} speedMs={18000} />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Web Development", desc: "Frontend, Backend, and Full‑Stack bootcamps." },
              { title: "Data & AI", desc: "Data analysis, ML fundamentals, and AI projects." },
              { title: "Product & Design", desc: "UI/UX, product thinking, and prototyping." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl shadow-lg border border-[color:var(--brand-primary)]/15 bg-white">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-[color:var(--brand-primary)] text-center mb-8">Upcoming Event</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "TechHub BOUESTI Launch Event", date: "Oct 12, 2025", location: "BOUESTI Campus", description: "Official launch with demos, talks, and networking." },
              { title: "Tech Meetup", date: "Nov 2025", location: "TechHub", description: "Monthly networking and talks." },
              { title: "Intro to AI", date: "Dec 2025", location: "TechHub", description: "Hands-on AI basics." },
            ].map((evt, i) => (
              <div key={i} className="p-6 rounded-2xl shadow-lg border border-[color:var(--brand-primary)]/15 bg-white">
                <p className="text-sm" style={{color: "color-mix(in oklab, var(--brand-primary) 40%, black)"}}>{evt.date} • {evt.location}</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{evt.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{evt.description}</p>
                <a href="/events" className="mt-4 inline-block px-4 py-2 rounded-full text-white" style={{backgroundColor: "var(--brand-secondary)"}}>Register</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center text-sm tracking-widest mb-6" style={{color: "color-mix(in oklab, var(--brand-primary) 50%, black)"}}>PROUDLY PARTNERED WITH</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {[1,2,3,4].map((i) => (
              <div key={i} className="h-12 bg-gray-100 rounded" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
