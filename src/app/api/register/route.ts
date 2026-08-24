import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const { email, senha } = await req.json();

    // hash da senha
    const senhaHash = await bcrypt.hash(senha, 10);

    // inserir no banco
    const { data, error } = await supabaseServer
      .from("users")
      .insert([
        {
          email,
          senha: senhaHash,
          role: "admin",
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, user: data });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}