import Hero from "@/components/Hero";
import EventsList from "@/components/EventsList";

export default function Events() {
  return (
    <main>
      <Hero title="Events" subtitle="Explore upcoming and past events" />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <EventsList />
        </div>
      </section>
    </main>
  );
}
