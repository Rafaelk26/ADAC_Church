import { supabaseServer } from "@/lib/supabase/server";
import toast from "react-hot-toast";

export async function handleNewMinisterio(data: any) {
  toast.loading("Cadastrando...");

  try {
    let imageUrl: string | null = null;

    if (!(data.fotoMinisterio instanceof File)) {
      toast.error("Imagem inválida, escolha outra.");
      console.log("Imagem inválida:", data.fotoMinisterio);
    }

    // 📸 upload imagem
    if (data.fotoMinisterio instanceof File) {
      const file = data.fotoMinisterio;

      const extension = file.name.split('.').pop();
      const fileName = `eventos/${Date.now()}.${extension}`;

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