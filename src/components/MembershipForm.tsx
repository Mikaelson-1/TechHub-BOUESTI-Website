"use client";

import { useState } from "react";
import HubPass from "@/components/HubPass";

export default function MembershipForm() {
  const [card, setCard] = useState<null | { name: string; hubId: string; status: string; expiry: string; qrValue: string }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/membership/register", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Registration failed");
      const data = await res.json();
      setCard({ name: data.name, hubId: data.hubId, status: data.status, expiry: data.expiry, qrValue: data.qrValue });
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl shadow-lg p-6 bg-white">
      <h3 className="text-xl font-semibold">Join TechHub BOUESTI</h3>
      <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" placeholder="Full name" required className="border rounded px-3 py-2" />
        <input name="email" type="email" placeholder="Email" required className="border rounded px-3 py-2" />
        <input name="photo" type="file" accept="image/*" className="md:col-span-2" />
        <button disabled={loading} className="mt-2 px-4 py-2 rounded-full text-white md:col-span-2" style={{backgroundColor: "var(--brand-secondary)"}}>
          {loading ? "Registering..." : "Register & Get Hub Card"}
        </button>
      </form>
      {error ? <p className="text-red-600 text-sm mt-3">{error}</p> : null}

      {card && (
        <div className="mt-6 space-y-4">
          <HubPass name={card.name} hubId={card.hubId} status={card.status} expiry={card.expiry} qrValue={card.qrValue} />
          <div className="text-center">
            <a href={`/card/${encodeURIComponent(card.hubId)}/print`} className="px-4 py-2 rounded-full text-white" style={{backgroundColor: "var(--brand-secondary)"}}>Download / Print</a>
          </div>
        </div>
      )}
    </div>
  );
}
