import Hero from "@/components/Hero";
import Image from "next/image";

export default function Partners() {
  const placeholders = new Array(8).fill(0);
  return (
    <main>
      <Hero title="Our Partners" subtitle="Organizations and brands we collaborate with" />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="max-w-3xl text-gray-700 mb-8">We partner with universities, startups, and industry to deliver impactful programs for students. Let’s collaborate on events, internships, sponsorships, or research.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
            {placeholders.map((_, i) => (
              <div key={i} className="h-20 flex items-center justify-center rounded border border-[color:var(--brand-primary)]/30 bg-white">
                <span className="text-sm" style={{color: "color-mix(in oklab, var(--brand-primary) 40%, black)"}}>Logo</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/contact" className="inline-block px-6 py-3 rounded-full text-white" style={{backgroundColor: "var(--brand-secondary)"}}>Partner with Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
