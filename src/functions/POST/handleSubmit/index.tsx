import { handleLogin } from "../handleLogin";

// Função para lidar com o envio do formulário de login
export function handleSubmit(formData: FormData) {
    const usuario = formData.get("usuario") as string;
    const senha = formData.get("senha") as string;
    
    handleLogin(usuario, senha);
}