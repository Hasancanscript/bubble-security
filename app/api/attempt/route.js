// app/api/attempt/route.js
// Mock-Endpoint: nimmt das Ergebnis einer Quiz-Session an.
// App Router erwartet benannte Exporte: POST (für POST-Requests).

export async function POST(req) {
  try {
    const body = await req.json();
    // Optional: Validierung mit zod; später DB-Speicherung via Prisma

    return Response.json({
      ok: true,
      xpTotalUpdated: body?.xpEarned ?? 0,
      streakNew: body?.streakDelta ?? 0,
      badgesUnlocked: [], // z. B. ["Perfekte Runde"] wenn du möchtest
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: "Bad payload" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }
}
