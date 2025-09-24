"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

const agenda = [
  { time: "9:00 AM", title: "Opening Remarks" },
  { time: "9:30 AM", title: "Keynote Address" },
  { time: "10:00 AM – 2:00 PM", title: "Speaker Sessions (25 mins each)" },
  { time: "2:00 PM", title: "Panel Session (Academia × Tech)" },
  { time: "3:30 PM", title: "Community Partners Pitch" },
  { time: "4:00 PM", title: "Closing & Networking" },
];

const speakers = [
  { name: "Goodness Adebayo", role: "Product Designer", image: "/images/Goodness Adebayo.png" },
  { name: "Olamide Ilorin", role: "Frontend Engineer", image: "/images/team-placeholder.svg" },
  { name: "Imam Bashir Abdulwahab", role: "Community Enabler", image: "/images/Imam Bashir IDs (1).JPG" },
  { name: "Samuel Afolabi", role: "Principal Cybersecurity Consultant", image: "/images/Samuel Afolabi.jpg" },
  { name: "Shalom Gbamigboye", role: "CEO & Co-Founder, Entobo Technologies", image: "/images/Shalom Bamigboye.jpeg" },
  { name: "GDG Ado-Ekiti Lead", role: "Community Leader", image: "/images/team-placeholder.svg" },
  { name: "David Oluwabusayo", role: "Software Engineer", image: "/images/David Oluwabusayo.jpeg.jpg" },
  { name: "Femi Taiwo", role: "Tech Ecosystem Advocate", image: "/images/Femi Taiwo.JPG" },
  { name: "Gospel Jonathan", role: "Product Manager", image: "/images/Gospel Jonathan.jpg" },
];

const organizers = [
  { name: "TechHub BOUESTI Team", description: "Student leaders, mentors, and facilitators powering the hub." },
  { name: "Campus Director", description: "Coordinating logistics and student experience." },
  { name: "Student Volunteers", description: "Ensuring seamless registration, hospitality, and tech support." },
];

const partnerLogos = [1, 2, 3, 4, 5, 6, 7, 8];

const valueProps = [
  { icon: "🎤", title: "Learn from industry experts" },
  { icon: "🤝", title: "Network with communities" },
  { icon: "🚀", title: "Discover career paths" },
  { icon: "🔑", title: "Get involved in the hub" },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-gray-900">
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[260px] sm:h-[360px]">
          <Image
            src="/images/Tech Hub Bouesti_Banner.webp"
            alt="TechHub BOUESTI Launch banner"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 pt-10 pb-16 sm:pt-14 sm:pb-20 space-y-12">
        <motion.div
          className="mx-auto max-w-3xl rounded-3xl bg-white shadow-xl border border-gray-100 p-8 sm:p-9 text-center space-y-5 -mt-12 sm:-mt-14 relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--brand-primary)]">Launch Event</span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">TechHub BOUESTI Launch</h1>
          <div className="text-gray-600 text-sm sm:text-base space-y-1">
            <p>September 26, 2025 — 9:00 AM to 4:00 PM</p>
            <p>BOUESTI Campus TechHub, Ikere-Ekiti</p>
          </div>
          <Link
            href="https://gdg.community.dev/events/details/google-gdg-on-campus-bamidele-olumilua-university-of-education-science-and-technology-ikere-ekiti-nigeria-presents-techhub-bouesti-launch-event/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[color:var(--brand-primary)] px-6 py-3 text-white font-semibold shadow-lg transition hover:bg-[color:var(--brand-secondary)]"
          >
            Register Now
          </Link>
        </motion.div>

        <motion.div
          className="space-y-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Event Overview</h2>
          <p className="text-lg text-gray-600">
            The TechHub BOUESTI Launch is our kickoff experience for empowering students to dream, build, and lead through technology. Expect a full day with 9 inspiring speakers, 10+ partners, panel conversations, community showcases, and hands-on opportunities to join the hub.
          </p>
        </motion.div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <motion.div
            className="space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-gray-900">Agenda</h2>
            <div className="relative border-l-2 border-[color:var(--brand-primary)]/40 pl-6 space-y-6">
              {agenda.map((item, index) => (
                <motion.div
                  key={item.time}
                  className="relative"
                  variants={fadeUp}
                  custom={index}
                >
                  <span className="absolute -left-7 top-1.5 h-3 w-3 rounded-full bg-[color:var(--brand-primary)]" />
                  <p className="text-sm font-medium text-[color:var(--brand-primary)]">{item.time}</p>
                  <p className="text-lg text-gray-800">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <motion.div
          className="text-center space-y-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Speakers</h2>
          <p className="text-gray-600">A lineup of mentors, builders, and community leaders sharing insights across design, engineering, security, and startup culture.</p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              className="relative overflow-hidden rounded-3xl shadow-xl border border-gray-100 h-72 sm:h-80"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <Image
                src={speaker.image}
                alt={`${speaker.name} portrait`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <h3 className="text-xl font-semibold">{speaker.name}</h3>
                <p className="text-sm text-white/80">{speaker.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6 py-16 sm:py-20 space-y-12">
          <motion.div
            className="grid gap-8 lg:grid-cols-[2fr_3fr]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="rounded-3xl bg-white border border-gray-100 shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900">Organizers</h2>
              <p className="mt-3 text-sm text-gray-600">Powered by TechHub BOUESTI leadership, faculty champions, and student volunteers.</p>
              <ul className="mt-6 space-y-4">
                {organizers.map((org, index) => (
                  <motion.li key={org.name} className="space-y-1" variants={fadeUp} custom={index + 1}>
                    <h3 className="text-lg font-semibold text-gray-900">{org.name}</h3>
                    <p className="text-sm text-gray-600">{org.description}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white border border-gray-100 shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900">Partners</h2>
              <p className="mt-3 text-sm text-gray-600">We’re teaming up with communities and companies dedicated to student success.</p>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {partnerLogos.map((logo) => (
                  <motion.div
                    key={logo}
                    className="h-20 rounded-2xl bg-slate-100 flex items-center justify-center"
                    variants={fadeUp}
                    custom={logo}
                  >
                    <span className="text-sm font-semibold text-gray-400">Logo</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <motion.div
          className="rounded-3xl border border-[color:var(--brand-primary)]/20 bg-gradient-to-br from-[color:var(--brand-primary)]/10 to-[color:var(--brand-secondary)]/10 p-8 sm:p-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900">Panel Session Highlight</h2>
          <p className="mt-3 text-gray-700">
            “Bridging the Gap Between Academia and Technology” brings together BOUESTI faculty leads and a top industry speaker to discuss how students can transform research into real-world innovation.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Featuring the BOUESTI School Representative alongside an industry voice from Entobo Technologies.
          </p>
        </motion.div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <motion.div
            className="text-center space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Why Attend?</h2>
            <p className="text-gray-600">Your chance to plug into the leading student tech ecosystem at BOUESTI.</p>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-2xl bg-slate-50 border border-slate-100 p-6 text-center shadow-sm"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 pb-16">
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] text-white shadow-xl p-10 sm:p-14 text-center space-y-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">Seats are limited. Don’t miss out on the biggest student tech event at BOUESTI!</h2>
          <p className="text-white/80 text-base sm:text-lg">
            Secure your spot to connect with mentors, discover pathways, and register for the TechHub community.
          </p>
          <Link
            href="https://gdg.community.dev/events/details/google-gdg-on-campus-bamidele-olumilua-university-of-education-science-and-technology-ikere-ekiti-nigeria-presents-techhub-bouesti-launch-event/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-[color:var(--brand-primary)] font-semibold shadow-lg transition hover:bg-slate-100"
          >
            Register Now
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
