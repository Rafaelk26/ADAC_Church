export interface Celula {
    id?: string;
    nomeCelula: string;
    liderCelula: string;
    bairroCelula: string;
    diaCelula: string;
    horaCelula: string;
    generoCelula: string;
    faixaCelula: string;
    fotoCelula?: string;
    criado_em?: string;
}


export interface Ministerio {
    id?: string;
    nomeMinisterio: string;
    liderMinisterio: string;
    descricaoMinisterio: string;
    statusMinisterio: boolean;
    membrosMinisterio?: string[];
    fotoMinisterio?: string;
    criado_em?: string;
}


export interface Eventos {
    id?: string;
    nomeEvento: string;
    localEvento: string;
    dataEvento: string;
    horaEvento: string;
    descricaoEvento: string;
    fotoEvento?: string;
    criado_em?: string;
}


export interface Trabalhador {
    id?: string;
    nomeTrabalhador: string;
    whatsappTrabalhador: string;
    criado_em?: string;
}


export interface Visitante {
    id?: string;
    nomeVisitante: string;
    whatsappVisitante: string;
    criado_em?: string;
}