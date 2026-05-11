import { supabaseServer } from "@/lib/supabase/server";
import toast from "react-hot-toast";

export async function handleUpdateMinisterio(id: string, data: any) {
  toast.loading("Atualizando...");

  try {
    let imageUrl = data.fotoMinisterio;

    // 📸 se tiver nova imagem
    if (data.fotoMinisterio instanceof File) {
      const fileName = `ministerios/${Date.now()}-${data.fotoMinisterio.name}`;

      const { error: uploadError } = await supabaseServer.storage
        .from("ministerios")
        .upload(fileName, data.fotoMinisterio);

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
        fotoMinisterio: imageUrl,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    toast.dismiss();
    toast.success("Atualizado!");

    return { success: true, data: updated };
  } catch (error) {
    toast.dismiss();
    toast.error("Erro ao atualizar");
    console.error(error);
    return { success: false };
  }
}