"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>

      <div className="rounded-2xl shadow-md p-4 bg-white">
        <h3 className="font-semibold mb-3">Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input className="mt-1 w-full border rounded px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input className="mt-1 w-full border rounded px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-gray-600">Photo</label>
            <input type="file" className="mt-1 w-full" />
          </div>
        </div>
        <button className="mt-4 px-4 py-2 rounded-full text-white" style={{backgroundColor: "var(--brand-secondary)"}}>Save Changes</button>
      </div>

      <div className="rounded-2xl shadow-md p-4 bg-white">
        <h3 className="font-semibold mb-3">Membership</h3>
        <p className="text-sm text-gray-700">Status: Active</p>
        <p className="text-sm text-gray-700">Hub ID: THB-000123</p>
        <p className="text-sm text-gray-700">Expiry: 12/2026</p>
        <button className="mt-3 px-4 py-2 rounded border" style={{borderColor: "var(--brand-primary)", color: "var(--brand-primary)"}}>Renew</button>
      </div>

      <div className="rounded-2xl shadow-md p-4 bg-white">
        <button className="px-4 py-2 rounded-full text-white" style={{backgroundColor: "#ef4444"}}>Logout</button>
      </div>
    </div>
  );
}
