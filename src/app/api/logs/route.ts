import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
      const logs = await prisma.game_log.findMany({
        orderBy: { createdAt: "desc" }
      });
      return NextResponse.json(logs, { status: 200 });
    } catch (error) {
      console.error("ERREUR GET /api/logs :", error); // 👈 Important
      return NextResponse.json({ error: "Erreur lors de la récupération des logs" }, { status: 500 });
    }
  }
  

export async function POST()  {
    try {
        const newLog = await prisma.game_log.create({
            data: {},
        });
        return NextResponse.json(newLog, { status: 201 });
    } 
    catch {
        return NextResponse.json({ error: "Erreur lors de l'ajout d'un log"}, { status: 500 });
    }
}