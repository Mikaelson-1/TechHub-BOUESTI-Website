import Hero from "@/components/Hero";

export default function Community() {
  return (
    <main>
      <Hero title="Community" subtitle="Why join the hub?" />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Mentorship","Peer Learning","Real Projects","Career Support","Hackathons","Networking"].map((b) => (
              <div key={b} className="p-6 rounded-2xl shadow-lg border border-[color:var(--brand-primary)]/15 bg-white text-center">
                <h3 className="text-lg font-semibold text-gray-900">{b}</h3>
                <p className="mt-2 text-sm text-gray-700">Grow faster with {b.toLowerCase()} at the hub.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="text-2xl font-bold text-gray-900">Get Involved</h3>
          <p className="mt-3 text-gray-700">Attend meetups, volunteer at events, or join a track to start building.</p>
          <a href="/join" className="mt-6 inline-block px-6 py-3 rounded-full text-white" style={{backgroundColor: "var(--brand-secondary)"}}>Join Us Today</a>
        </div>
      </section>
    </main>
  );
}
