import Hero from "@/components/Hero";

export default function Team() {
  return (
    <main>
      <Hero title="Our Team" subtitle="Meet the awesome minds behind TechHub BOUESTI" />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden border shadow-sm border-[color:var(--brand-primary)]/20">
                <div className="h-48 bg-gray-100" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[color:var(--brand-primary)]">Team Member {i}</h3>
                  <p className="text-sm mt-1" style={{color: "color-mix(in oklab, var(--brand-primary) 30%, black)"}}>Role / Title</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
