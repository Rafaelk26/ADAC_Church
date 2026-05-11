import { supabaseServer } from "@/lib/supabase/server";
import { Ministerio } from "@/types/types";
import toast from "react-hot-toast";

export async function handleNewMinisterio(data: any) {
  toast.loading("Cadastrando...");

  try {
    let imageUrl: string | null = null;

    // 📸 upload imagem
    if (data.fotoMinisterio) {
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

    // 🧠 insert banco
    const { data: newMinisterio, error } = await supabaseServer
      .from("ministerios")
      .insert({
        nomeMinisterio: data.nomeMinisterio,
        liderMinisterio: data.liderMinisterio,
        descricaoMinisterio: data.descricaoMinisterio,
        statusMinisterio: data.statusMinisterio ?? true,
        fotoMinisterio: imageUrl,
      })
      .select()
      .single();

    if (error) throw error;

    toast.dismiss();
    toast.success("Ministério criado!");

    return { success: true, data: newMinisterio };
  } catch (error) {
    toast.dismiss();
    toast.error("Erro ao criar ministério");
    console.error(error);
    return { success: false };
  }
}