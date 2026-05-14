import { supabaseServer } from "@/lib/supabase/server";
import { Eventos } from "@/types/types";
import toast from "react-hot-toast";

export async function handleUpdateEvento(id: string, data: Eventos) {

  toast.loading("Atualizando...");

  try {
    let imageUrl: string | null = null;

    // se veio nova imagem
    if (data.fotoEvento instanceof File) {
      const file = data.fotoEvento;

      const extension = file.name.split('.').pop();
      const fileName = `eventos/${Date.now()}.${extension}`;

      const { error: uploadError } = await supabaseServer.storage
        .from("eventos")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: publicUrl } = supabaseServer.storage
        .from("eventos")
        .getPublicUrl(fileName);

      imageUrl = publicUrl.publicUrl;
    }

    // 🧠 update banco
    const { data: updated, error } = await supabaseServer
      .from("eventos")
      .update({
        nomeEvento: data.nomeEvento,
        localEvento: data.localEvento,
        dataEvento: data.dataEvento,
        horaEvento: data.horaEvento,
        descricaoEvento: data.descricaoEvento,
        fotoEvento:
          imageUrl !== null
            ? imageUrl
            : typeof data.fotoEvento === "string"
            ? data.fotoEvento
            : null,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    toast.dismiss();
    toast.success("Evento atualizado!");

    return { success: true, data: updated };
  } catch (error) {
    toast.dismiss();
    toast.error("Erro ao atualizar");
    console.error(error);
    return { success: false };
  }
}