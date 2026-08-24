export const formatNumberForVisit = (whatsapp: string, msg: string) => {

    // Pega o número e deixa em formato '11900000000'
    const numeroLimpo = whatsapp.replace(/\D/g, '');

    // Ajusta a mensagem com '%20' nos espaços
    const mensagemCodificada = encodeURIComponent(msg);
    
    // Cria o link para redirecionamento
    const url = `https://wa.me/+55${numeroLimpo}?text=${mensagemCodificada}`;

    window.open(url, '_blank');
}