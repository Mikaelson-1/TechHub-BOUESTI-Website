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

const speakers = [
  { name: "Femi Taiwo", role: "CTO & Co-founder, INITS Limited", image: "/images/speakers/Femi Taiwo.JPG" },
  { name: "Goodness Adebayo", role: "Senior Product Designer, Ahavaplan", image: "/images/speakers/Goodness Adebayo.png" },
  { name: "Olamide Ilori", role: "Frontend Engineer Lead, Prospa (YC W21)", image: "/images/speakers/Olamide Ilori.png" },
  { name: "Imam Bashir Abdulwahab", role: "Security Engineer & Community Enabler", image: "/images/speakers/Imam Bashir IDs (1).JPG" },
  { name: "Samuel Afolabi", role: "Principal Cybersecurity Consultant", image: "/images/speakers/Samuel Afolabi.jpg" },
  { name: "Shalom Bamigboye", role: "CEO & Co-Founder, Entobo Technologies", image: "/images/speakers/Shalom Bamigboye.jpeg" },
  { name: "Gospel Jonathan", role: "Software Engineer, PurpleBee", image: "/images/speakers/Gospel Jonathan.jpg" },
  { name: "David Oluwabusayo", role: "GDG Ado-Ekiti Lead", image: "/images/speakers/David Oluwabusayo.jpeg.jpg" },
  { name: "Favour Adeshina", role: "Community Manager, 3MTT Ekiti State", image: "/images/speakers/Favour Adeshina.jpg" },
  { name: "Tenibiaje Mobolaji", role: "Senior DevOps Engineer", image: "/images/speakers/Tenibiaje Mobolaji.PNG" },
];

const agendaSections = [
  {
    title: "Morning Session",
    items: [
      { time: "09:00 – 09:30 AM", detail: "Arrival & Registration" },
      { time: "09:30 – 09:45 AM", detail: "Opening Remarks", sub: "UCRC Director · Dean of Student Affairs" },
      { time: "09:45 – 10:00 AM", detail: "Introduction to TechHub BOUESTI" },
      { time: "10:00 – 10:20 AM", detail: "Samuel Afolabi", sub: "What I Will Tell My Younger Self in Cybersecurity" },
      { time: "10:25 – 10:45 AM", detail: "Jonathan Gospel" },
      { time: "10:50 – 11:10 AM", detail: "Imam Bashir Abdulwahab" },
      { time: "11:15 – 11:35 AM", detail: "Shalom Bamigboye" },
      { time: "11:40 – 12:00 PM", detail: "Jerry" },
    ],
  },
  {
    title: "Midday",
    items: [
      { time: "12:00 – 12:15 PM", detail: "Break / Networking" },
      { time: "12:15 – 12:35 PM", detail: "David Oluwabusayo" },
      { time: "12:40 – 01:00 PM", detail: "Femi Taiwo" },
      { time: "01:00 – 01:45 PM", detail: "Tenibiaje Mobolaji" },
    ],
  },
  {
    title: "Afternoon Session",
    items: [
      { time: "01:45 – 02:05 PM", detail: "Favour Adeshina" },
      { time: "02:10 – 02:30 PM", detail: "Goodness Adebayo" },
      { time: "02:30 – 02:50 PM", detail: "Olamide Olori" },
    ],
  },
  {
    title: "Panel Discussion: Bridging Academia & Technology",
    items: [
      { time: "02:30 – 03:15 PM", detail: "Panel Session", sub: "Moderator · School Representative (Academia) · 2–3 Industry Speakers" },
      { time: "03:15 – 03:55 PM", detail: "Community Partners Pitch", sub: "10+ Communities · 3–4 minutes each" },
      { time: "03:55 – 04:00 PM", detail: "Vote of Thanks & Closing Remarks" },
    ],
  },
];

const organizers = [
  { name: "Michael Olukayode", role: "Chief Organizer", image: "/images/organizers/Michael Olukayode.jpeg" },
  { name: "TechHub Operations Team", role: "Campus coordination & student experience", image: null },
  { name: "Student Volunteers", role: "Registration · Hospitality · Tech support", image: null },
];

const partnerLogos = [
  { name: "GDGoC BOUESTI", logo: "/images/partners/GDGoC BOUESTI.png" },
  { name: "TechHub EKSU", logo: "/images/partners/techhub EKSU.png" },
  { name: "ATC Africa", logo: "/images/partners/ATC Africa BOUESTI.png" },
  { name: "ARVANI", logo: "/images/partners/ARVANI-2.jpeg", emphasis: true },
  { name: "OSCA Ado-Ekiti", logo: "/images/partners/Osca Ado-Ekiti.png" },
  { name: "The Mikaelson Community", logo: "/images/partners/The Mikaelson Community.png" },
  { name: "Enactus BOUESTI", logo: "/images/partners/Enactus Logo 1024x444.png" },
];

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
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-black bg-[#F9E4B5] hover:bg-[#F3D48D] shadow-lg transition hover:-translate-y-0.5"
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

      <section className="bg-white">
        <div className="container mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <motion.div
            className="space-y-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-semibold text-gray-900">TechHub BOUESTI Launch – Event Agenda</h2>
              <p className="text-sm text-gray-600">📍 TechHub BOUESTI · 📅 Friday, 26 September 2025 · 🕘 9:00 AM – 4:00 PM</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {agendaSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  className="relative rounded-3xl border border-[color:var(--brand-primary)]/20 bg-white shadow-lg p-6 space-y-4 hover:-translate-y-1 transition"
                  variants={fadeUp}
                  custom={sectionIndex}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-4 right-4 text-xs font-semibold text-[color:var(--brand-primary)]/70 uppercase tracking-wide">{sectionIndex + 1}</div>
                  <h3 className="text-lg font-semibold text-[color:var(--brand-primary)]">{section.title}</h3>
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <div key={`${item.time}-${item.detail}`} className="rounded-2xl border border-[color:var(--brand-primary)]/15 bg-[color:var(--brand-primary)]/5 px-4 py-3">
                        <p className="text-sm font-semibold text-[color:var(--brand-primary)]">{item.time}</p>
                        <p className="text-base text-gray-900">{item.detail}</p>
                        {item.sub ? <p className="text-sm text-gray-600 mt-1">{item.sub}</p> : null}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6 py-16 sm:py-20 space-y-12">
          <motion.div
            className="rounded-3xl bg-white border border-gray-100 shadow-lg p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900">Organizers</h2>
            <p className="mt-3 text-sm text-gray-600">Powered by TechHub BOUESTI leadership, faculty champions, and student volunteers.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {organizers.map((org, index) => (
                <motion.div
                  key={org.name}
                  className="rounded-3xl border border-[color:var(--brand-primary)]/20 bg-white shadow-sm p-5 text-center space-y-4"
                  variants={fadeUp}
                  custom={index + 1}
                >
                  <div className="relative mx-auto h-20 w-20">
                    {org.image ? (
                      <img
                        src={org.image}
                        alt={`${org.name} portrait`}
                        className="h-full w-full rounded-full object-cover shadow"
                      />
                    ) : (
                      <div className="h-full w-full rounded-full bg-[color:var(--brand-primary)]/10 border border-[color:var(--brand-primary)]/25 flex items-center justify-center text-sm font-semibold text-[color:var(--brand-primary)]">
                        Photo Coming Soon
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900">{org.name}</h3>
                    <p className="text-sm text-gray-600">{org.role}</p>
                  </div>
                  <Link
                    href="/join"
                    className="inline-flex items-center justify-center rounded-full border border-[color:var(--brand-primary)] px-4 py-2 text-xs font-semibold text-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)]/10 transition"
                  >
                    View Profile
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl bg-white border border-gray-100 shadow-lg p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900">Partners</h2>
            <p className="mt-3 text-sm text-gray-600">We’re teaming up with communities and companies dedicated to student success.</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {partnerLogos.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className={`${partner.emphasis ? "h-28 sm:h-32" : "h-24"} rounded-3xl bg-white border border-[color:var(--brand-primary)]/20 shadow-lg flex items-center justify-center`}
                  variants={fadeUp}
                  custom={index}
                  whileHover={{ scale: 1.04 }}
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={`${partner.emphasis ? "max-h-24 max-w-[88%]" : "max-h-20 max-w-[80%]"} object-contain`}
                  />
                </motion.div>
              ))}
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
