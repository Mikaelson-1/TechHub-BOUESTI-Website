"use client";

import { useState } from "react";

type Course = { id: string; name: string; progress: number };

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([
    { id: "c1", name: "Web Development", progress: 60 },
    { id: "c2", name: "Data & AI", progress: 35 },
    { id: "c3", name: "UI/UX Design", progress: 80 },
  ]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", progress: 0 });

  function addCourse() {
    if (!form.name) return;
    setCourses([{ id: Math.random().toString(36).slice(2), name: form.name, progress: Number(form.progress) || 0 }, ...courses]);
    setOpen(false);
    setForm({ name: "", progress: 0 });
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Courses</h2>
        <button className="px-4 py-2 rounded-full text-white shadow" style={{backgroundColor: "var(--brand-secondary)"}} onClick={() => setOpen(true)}>+ Add New Course</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((c) => (
          <div key={c.id} className="rounded-2xl shadow-md p-4 bg-white">
            <div className="font-semibold">{c.name}</div>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
              <div className="h-2 rounded-full" style={{ width: `${c.progress}%`, backgroundColor: "var(--brand-primary)" }} />
            </div>
            <div className="text-sm text-gray-600 mt-2">{c.progress}% complete</div>
            <button className="mt-3 text-sm px-3 py-1 rounded-full border" style={{borderColor: "var(--brand-primary)", color: "var(--brand-primary)"}}>Update Progress</button>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold">Add New Course</h3>
            <div className="mt-4 space-y-3">
              <input placeholder="Course name" className="w-full border rounded px-3 py-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input type="number" placeholder="Progress %" className="w-full border rounded px-3 py-2" value={form.progress} onChange={(e) => setForm({ ...form, progress: Number(e.target.value) })} />
              <div className="flex justify-end gap-2">
                <button className="px-4 py-2 rounded" onClick={() => setOpen(false)}>Cancel</button>
                <button className="px-4 py-2 rounded text-white" style={{backgroundColor: "var(--brand-secondary)"}} onClick={addCourse}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
