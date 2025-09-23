export default function DashboardEventsPage() {
  const events = [
    { id: "e1", title: "Launch Event", date: "2025-10-12", status: "Registered" },
    { id: "e2", title: "Tech Meetup", date: "2025-11-01", status: "Attended" },
    { id: "e3", title: "Intro to AI", date: "2025-12-10", status: "Missed" },
  ];
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((e) => (
          <div key={e.id} className="rounded-2xl shadow-md p-4 bg-white">
            <div className="text-sm text-gray-600">{e.date}</div>
            <div className="font-semibold">{e.title}</div>
            <div className="mt-2 text-sm">Status: <span className="font-medium">{e.status}</span></div>
            <a href="/events" className="mt-3 inline-block px-4 py-2 rounded-full text-white" style={{backgroundColor: "var(--brand-secondary)"}}>Register</a>
          </div>
        ))}
      </div>
    </div>
  );
}
