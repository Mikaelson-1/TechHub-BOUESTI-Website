export default function DashboardHome() {
  const stats = [
    { label: "Courses in Progress", value: 3 },
    { label: "Completed Courses", value: 5 },
    { label: "Event Attendance", value: 12 },
    { label: "Membership Status", value: "Active" },
  ];

  const feed = [
    { title: "Launch Event", text: "Join us Oct 12 for the official launch." },
    { title: "Workshop", text: "Intro to AI this December." },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Welcome, John Doe 👋</h2>
        <p className="text-gray-600">Here’s your overview.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl shadow-md p-4 bg-white">
            <div className="text-sm text-gray-600">{s.label}</div>
            <div className="text-2xl font-semibold mt-2">{s.value as any}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl shadow-md p-4 bg-white">
            <h3 className="font-semibold mb-3">Announcements</h3>
            <div className="space-y-3">
              {feed.map((f, i) => (
                <div key={i} className="rounded-xl border p-3">
                  <div className="font-medium">{f.title}</div>
                  <div className="text-sm text-gray-700">{f.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl shadow-md p-4 bg-white">
            <h3 className="font-semibold mb-3">Upcoming Event</h3>
            <div className="rounded-xl border p-3">
              <div className="text-sm text-gray-600">Oct 12 • BOUESTI Campus</div>
              <div className="font-medium">TechHub BOUESTI Launch Event</div>
              <a href="/events" className="mt-3 inline-block px-4 py-2 rounded-full text-white" style={{backgroundColor: "var(--brand-secondary)"}}>Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
