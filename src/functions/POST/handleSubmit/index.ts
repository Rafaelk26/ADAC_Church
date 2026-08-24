import { handleLogin } from "../handleLogin";

// Função para lidar com o envio do formulário de login
export async function handleSubmit(formData: FormData) {
    // Consumindo os dados do formulário no front-end
    const usuario = formData.get("usuario") as string;
    const senha = formData.get("senha") as string;

    // Chamar a função de login e aguardar o resultado
    const isLoginSuccessful = await handleLogin(usuario, senha);

    if(isLoginSuccessful) {
        // Redirecionar para a página inicial da admin
        window.location.href = "/admin/home";
    }
    
}