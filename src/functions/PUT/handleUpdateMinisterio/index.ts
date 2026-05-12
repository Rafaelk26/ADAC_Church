import { supabaseServer } from "@/lib/supabase/server";
import { Ministerio } from "@/types/types";
import toast from "react-hot-toast";

export async function handleUpdateMinisterio(id: string, data: Ministerio) {
  toast.loading("Atualizando...");

  try {
    let imageUrl: string | null = null;

    // se veio nova imagem
    if (data.fotoMinisterio instanceof File) {
      const file = data.fotoMinisterio;

      const fileName = `ministerios/${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabaseServer.storage
        .from("ministerios")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: publicUrl } = supabaseServer.storage
        .from("ministerios")
        .getPublicUrl(fileName);

      imageUrl = publicUrl.publicUrl;
    }

    // 🧠 update banco
    const { data: updated, error } = await supabaseServer
      .from("ministerios")
      .update({
        nomeMinisterio: data.nomeMinisterio,
        liderMinisterio: data.liderMinisterio,
        descricaoMinisterio: data.descricaoMinisterio,
        statusMinisterio: data.statusMinisterio,
        fotoMinisterio:
          imageUrl !== null
            ? imageUrl
            : typeof data.fotoMinisterio === "string"
            ? data.fotoMinisterio
            : null,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    toast.dismiss();
    toast.success("Ministério tualizado!");

    return { success: true, data: updated };
  } catch (error) {
    toast.dismiss();
    toast.error("Erro ao atualizar");
    console.error(error);
    return { success: false };
  }
}