"use client";

import { useState } from "react";

type EventItem = { id: string; title: string; date: string; description: string; image?: string; isPast?: boolean };

const SAMPLE_EVENTS: EventItem[] = [
  { id: "launch", title: "TechHub BOUESTI Launch Event", date: "2025-10-12", description: "Official launch with demos, talks, and networking." },
  { id: "meetup", title: "Tech Meetup", date: "2025-11-01", description: "Monthly networking and talks." },
  { id: "ai-recap", title: "AI Workshop Recap", date: "2025-05-10", description: "Highlights from our spring AI workshop.", isPast: true },
];

export default function EventsList() {
  const [filter, setFilter] = useState<"upcoming" | "past">("upcoming");
  const items = SAMPLE_EVENTS.filter(e => (filter === "past" ? e.isPast : !e.isPast));

  return (
    <div>
      <div className="flex gap-3 mb-6">
        <button onClick={() => setFilter("upcoming")} className={`px-4 py-2 rounded-full ${filter === "upcoming" ? "text-white" : "text-[color:var(--brand-primary)]"}`} style={{backgroundColor: filter === "upcoming" ? "var(--brand-primary)" : "transparent", border: "1px solid var(--brand-primary)"}}>Upcoming</button>
        <button onClick={() => setFilter("past")} className={`px-4 py-2 rounded-full ${filter === "past" ? "text-white" : "text-[color:var(--brand-primary)]"}`} style={{backgroundColor: filter === "past" ? "var(--brand-primary)" : "transparent", border: "1px solid var(--brand-primary)"}}>Past</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((evt) => (
          <div key={evt.id} className="p-6 rounded-2xl shadow-lg border border-[color:var(--brand-primary)]/15 bg-white">
            <div className="h-32 bg-gray-100 rounded mb-3" />
            <p className="text-sm" style={{color: "color-mix(in oklab, var(--brand-primary) 40%, black)"}}>{evt.date}</p>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">{evt.title}</h3>
            <p className="mt-2 text-sm text-gray-700">{evt.description}</p>
            <a href="#" className="mt-4 inline-block px-4 py-2 rounded-full text-white" style={{backgroundColor: "var(--brand-secondary)"}}>{filter === "past" ? "View Recap" : "Register"}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
