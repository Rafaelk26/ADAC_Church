import toast from "react-hot-toast";

export function handleLogin(usuario: string, senha: string): boolean {
    try{
        console.log("Login attempt:", { usuario, senha });
        toast.success("Login successful!");
        return true;
    }
    catch(error){
        console.error("Login error:", error);
        toast.error("Falha no login, por favor tente mais tarde.");
        return false;
    }
}