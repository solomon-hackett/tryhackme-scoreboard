import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get("password");

  if (!password) {
    return NextResponse.json(
      { error: "Password is required" },
      { status: 400 },
    );
  }

  const hash = await bcrypt.hash(password, 10);
  return NextResponse.json({ hash });
}
