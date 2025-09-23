"use client";

import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";

type HubPassProps = {
  name: string;
  hubId: string;
  status: string;
  expiry: string;
  qrValue: string;
};

export default function HubPass({ name, hubId, status, expiry, qrValue }: HubPassProps) {
  return (
    <div className="w-full flex justify-center">
      <motion.div
        className="relative w-full max-w-md rounded-2xl shadow-xl text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
        animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="p-6">
          {/* Logo placeholder */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded bg-white/20 flex items-center justify-center text-xs">Logo</div>
            <div className="font-semibold">TechHub BOUESTI</div>
          </div>

          <div className="space-y-1">
            <div className="text-sm opacity-90">Name</div>
            <div className="text-xl font-bold">{name}</div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs opacity-90">Hub ID</div>
              <div className="font-medium">{hubId}</div>
            </div>
            <div>
              <div className="text-xs opacity-90">Status</div>
              <div className="font-medium">{status}</div>
            </div>
            <div>
              <div className="text-xs opacity-90">Expiry</div>
              <div className="font-medium">{expiry}</div>
            </div>
          </div>
        </div>
        {/* QR code */}
        <div className="absolute bottom-4 right-4 bg-white p-1 rounded">
          <QRCodeCanvas value={qrValue} size={56} />
        </div>
      </motion.div>
    </div>
  );
}
