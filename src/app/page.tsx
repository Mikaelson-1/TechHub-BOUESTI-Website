import Image from "next/image";
import TrackMarquee from "@/components/TrackMarquee";
import MembershipForm from "@/components/MembershipForm";
import HubPass from "@/components/HubPass";

export default function Home() {
  const sampleHubId = "BOUESTI-2025-000";
  const qrValue = `/verify/${encodeURIComponent(sampleHubId)}`;

  return (
    <main>
      <div
        className="relative h-96 flex items-center justify-center"
        style={{ backgroundColor: "var(--brand-secondary)" }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">Empowering Students to Shape the Future of Tech</h1>
          <p className="mt-4 text-lg">Hands-on learning, community, and real-world projects.</p>
          <a href="/join" className="mt-6 inline-block px-6 py-3 rounded-full shadow-lg border" style={{backgroundColor: "#ffffff", color: "var(--brand-primary)", borderColor: "#ffffff"}}>Join Us</a>
        </div>
      </div>

      {/* About snippet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">About TechHub BOUESTI</h2>
          <p className="mt-4 text-gray-700">We are a student-driven technology hub fostering innovation through programs, mentorship, and community events.</p>
        </div>
      </section>

      {/* Get Your Hub Card (restored position under About) */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-[color:var(--brand-primary)] text-center mb-6">Get Your Hub Card</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <MembershipForm />
            <div className="rounded-2xl shadow-lg p-6 bg-white">
              <h3 className="font-semibold mb-4">Card Preview</h3>
              <HubPass name="John Doe" hubId={sampleHubId} status="Active" expiry="Dec 2025" qrValue={qrValue} />
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
