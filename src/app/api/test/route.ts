import { NextResponse } from "next/server";

export async function GET() {
  console.log("✅ /api/test fonctionne !");
  return NextResponse.json({ message: "API OK" });
}
