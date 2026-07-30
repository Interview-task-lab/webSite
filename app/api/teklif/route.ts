import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import * as z from "zod";

// Input validation schema
const requestSchema = z.object({
  adSoyad: z.string().min(3).max(100),
  telefon: z.string().max(30).optional().default("Belirtilmedi"),
  hizmet: z.string().min(1).max(100),
  ilce: z.string().min(2).max(100).optional(),
  detay: z.string().max(1000).optional(),
  kaynak: z.string().min(1).max(100),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate inputs
    const parsed = requestSchema.parse(body);

    // Save record to SQLite
    const request = await db.quoteRequest.create({
      data: {
        adSoyad: parsed.adSoyad,
        telefon: parsed.telefon,
        hizmet: parsed.hizmet,
        ilce: parsed.ilce || null,
        detay: parsed.detay || null,
        kaynak: parsed.kaynak,
      },
    });

    // Build WhatsApp URL
    const whatsappUrl = buildWhatsAppUrl({
      adSoyad: parsed.adSoyad,
      telefon: parsed.telefon,
      hizmet: parsed.hizmet,
      ilce: parsed.ilce,
      detay: parsed.detay,
      kaynak: parsed.kaynak,
    });

    return NextResponse.json({
      ok: true,
      id: request.id,
      whatsappUrl,
    });
  } catch (error: any) {
    console.error("Teklif API Error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: "Geçersiz form verileri.", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { ok: false, error: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}
