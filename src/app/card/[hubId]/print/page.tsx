export default function PrintCard({ params }: { params: { hubId: string } }) {
  const hubId = decodeURIComponent(params.hubId);
  return (
    <main className="flex items-center justify-center p-6 print:p-0">
      <div className="relative w-[336px] h-[214px] rounded-xl shadow overflow-hidden" style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)" }}>
        <div className="p-4 text-white">
          <div className="text-sm">TechHub BOUESTI</div>
          <div className="text-xl font-bold mt-1">John Doe</div>
          <div className="text-xs mt-1">Hub ID: {hubId}</div>
          <div className="text-xs">Status: Active</div>
          <div className="text-xs">Expiry: Dec 2025</div>
        </div>
        <div className="absolute bottom-3 right-3 bg-white/80 rounded text-[10px] px-2 py-1">QR</div>
      </div>
      <style>{`
        @media print { @page { size: 85.6mm 54mm; margin: 0; } body { -webkit-print-color-adjust: exact; } }
      `}</style>
    </main>
  );
}
