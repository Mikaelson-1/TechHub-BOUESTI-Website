import HubPass from "@/components/HubPass";

export default function HubCardPage() {
  const hubId = "BOUESTI-2025-001";
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const qrValue = `${base}/verify/${encodeURIComponent(hubId)}`;
  return (
    <div className="max-w-5xl">
      <div className="rounded-2xl shadow-md p-6 bg-white">
        <h2 className="text-xl font-semibold mb-6">Digital Membership Card</h2>
        <HubPass name="John Doe" hubId={hubId} status="Active" expiry="Dec 2025" qrValue={qrValue} />
        <div className="mt-6">
          <button className="px-4 py-2 rounded-full text-white" style={{backgroundColor: "var(--brand-secondary)"}}>Download Card</button>
        </div>
      </div>
    </div>
  );
}
