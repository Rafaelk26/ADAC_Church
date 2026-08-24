import toast from "react-hot-toast";

export async function handleLogin(usuario: string, senha: string) {
  
  toast.loading("Conectando...");
  
  try {

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email: usuario, senha }),
    });

    if (!res.ok) throw new Error("Erro no login");

    toast.dismiss();
    toast.success("Login realizado com sucesso!");

    return true;

  } catch (err: any) {
    toast.dismiss();
    toast.error(err.message || "Erro no login");
    console.error(err);
    return false;
  }
}