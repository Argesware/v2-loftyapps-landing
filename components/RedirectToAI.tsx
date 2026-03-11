import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  //
  const payload = JSON.stringify({ prompt, ts: Date.now() });

  const res = NextResponse.json({ ok: true });

  res.cookies.set("ai_prompt_handoff", payload, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 10, // 10 min
  });

  return res;
}