import Hero from "@/components/Hero";

export default function ContactUs() {
  return (
    <main>
      <Hero title="Contact" subtitle="We'd love to hear from you" />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{color: "color-mix(in oklab, var(--brand-primary) 40%, black)"}}>Name</label>
              <input className="w-full border rounded px-3 py-2 outline-none focus:ring-2" style={{borderColor: "color-mix(in oklab, var(--brand-primary) 30%, black)"}} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{color: "color-mix(in oklab, var(--brand-primary) 40%, black)"}}>Email</label>
              <input type="email" className="w-full border rounded px-3 py-2 outline-none focus:ring-2" style={{borderColor: "color-mix(in oklab, var(--brand-primary) 30%, black)"}} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{color: "color-mix(in oklab, var(--brand-primary) 40%, black)"}}>Message</label>
              <textarea rows={5} className="w-full border rounded px-3 py-2 outline-none focus:ring-2" style={{borderColor: "color-mix(in oklab, var(--brand-primary) 30%, black)"}} />
            </div>
            <button type="submit" className="px-6 py-2 rounded text-white" style={{backgroundColor: "var(--brand-secondary)"}}>Send Message</button>
          </form>
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-900">Socials</h3>
            <ul className="mt-2 space-y-1 text-[color:var(--brand-primary)]">
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mt-6">Address</h3>
            <p className="text-gray-700">BOUESTI Campus, Ikare-Akoko, Nigeria</p>
          </div>
        </div>
      </section>
    </main>
  );
}
