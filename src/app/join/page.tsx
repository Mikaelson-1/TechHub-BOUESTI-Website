import Hero from "@/components/Hero";

export default function Join() {
  return (
    <main>
      <Hero title="Join TechHub BOUESTI" subtitle="Fill the form to become a member" />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-gray-700 mb-6">Please complete the registration form below. You will receive a confirmation email once your application is reviewed.</p>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder/viewform?embedded=true"
              width="100%"
              height="100%"
              style={{border: 0}}
              loading="lazy"
              title="Join Form"
            />
          </div>
          <p className="text-gray-700 mt-6">Approval typically takes 3–5 working days. For questions, reach out via the contact page.</p>
        </div>
      </section>
    </main>
  );
}
