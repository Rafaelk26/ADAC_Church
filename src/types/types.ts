import { StaticImageData } from "next/image";

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
    fotoMinisterio?: string | StaticImageData | null | File;
    criado_em?: string;
}


export type MinisterioForm = {
  nomeMinisterio: string;
  liderMinisterio: string;
  descricaoMinisterio: string;
  statusMinisterio: boolean;
  fotoMinisterio: string | StaticImageData | File | null | undefined;
};


export interface Eventos {
    id?: string;
    nomeEvento: string;
    localEvento: string;
    dataEvento: string;
    horaEvento: string;
    descricaoEvento: string;
    fotoEvento?: string | File | StaticImageData | null;
    criado_em?: string;
}



export interface Trabalhador {
    id?: string;
    nomeTrabalhador: string;
    whatsappTrabalhador: string;
    ministerioTrabalhador?: string;
    nomeMinisterio?: string;
    liderMinisterio?: string;
    fotoMinisterio?: string | File | StaticImageData | null;
    criado_em?: string;
}


export interface Visitante {
    id?: string;
    nomeVisitante: string;
    whatsappVisitante: string;
    criado_em?: string;
}