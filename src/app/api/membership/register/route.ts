import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const name = String(form.get("name") || "John Doe");
  const email = String(form.get("email") || "");

  // TODO: Persist to database (Supabase/Firebase). For now, generate mock values.
  const random = Math.floor(100 + Math.random() * 900);
  const hubId = `BOUESTI-2025-${random}`;
  const status = "Active";
  const expiry = "Dec 2025";
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const qrValue = `${base}/verify/${encodeURIComponent(hubId)}`;

  return NextResponse.json({ name, email, hubId, status, expiry, qrValue });
}
