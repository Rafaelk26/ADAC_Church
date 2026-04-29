import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: Request) {
  
  const { email, senha } = await req.json();

  // buscar usuário
  const { data: user } = await supabaseServer
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (!user) {
    return NextResponse.json({ error: "Usuário não encontrado" }, { status: 401 });
  }

  // validar senha
  const isValid = await bcrypt.compare(senha, user.senha);

  if (!isValid) {
    return NextResponse.json({ error: "Senha inválida" }, { status: 401 });
  }

  // gerar token
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "1d" }
  );

  // salvar cookie
  const response = NextResponse.json({ success: true });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return response;
}