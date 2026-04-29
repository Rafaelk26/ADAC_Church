export async function handleLogin(usuario: string, senha: string) {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email: usuario, senha }),
    });

    if (!res.ok) throw new Error("Erro no login");

    return true;

  } catch (err: any) {
    console.error(err);
    return false;
  }
}