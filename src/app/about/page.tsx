import Hero from "@/components/Hero";

export default function About() {
  return (
    <main>
      <Hero title="About" subtitle="Learn about our mission and story" />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission & Vision</h2>
          <p className="text-gray-700">Our mission is to empower students with practical skills and a vibrant community to drive innovation. Our vision is a thriving ecosystem where ideas become impactful solutions.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700">TechHub BOUESTI began as a student initiative to bridge the gap between academia and industry through hands-on programs, mentorship, and collaboration.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-[color:var(--brand-primary)] text-center mb-8">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Collaboration","Innovation","Excellence"].map((v) => (
              <div key={v} className="p-6 rounded-2xl shadow-lg border border-[color:var(--brand-primary)]/15 bg-white text-center">
                <h3 className="text-xl font-semibold text-gray-900">{v}</h3>
                <p className="mt-2 text-sm text-gray-700">We champion {v.toLowerCase()} across projects and programs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden border shadow-sm border-[color:var(--brand-primary)]/15 bg-white">
                <div className="h-40 bg-gray-100" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">Member {i}</h3>
                  <p className="text-sm text-gray-700">Role</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
