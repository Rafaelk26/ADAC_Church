import { supabaseServer } from "@/lib/supabase/server";

export async function fetchAllTrabalhadores() {
  const { data: trabalhadores, error } = await supabaseServer
    .from("trabalhadores")
    .select("id, nomeTrabalhador, whatsappTrabalhador, ministerioTrabalhador");

  if (error) throw error;

  const { data: ministerios, error: errorMinisterio } = await supabaseServer
    .from("ministerios")
    .select("id, nomeMinisterio, fotoMinisterio, liderMinisterio");

  if (errorMinisterio) throw errorMinisterio;

  const dataReturn = trabalhadores.map((t) => {
    const ministerio = ministerios.find(
      (m) => m.id === t.ministerioTrabalhador
    );

    return {
      id: t.id,
      nomeTrabalhador: t.nomeTrabalhador,
      whatsappTrabalhador: t.whatsappTrabalhador,
      nomeMinisterio: ministerio?.nomeMinisterio ?? "Sem ministério",
      liderMinisterio: ministerio?.liderMinisterio ?? "Sem líder",
      fotoMinisterio: ministerio?.fotoMinisterio ?? null,
    };
  });

  return dataReturn;
}