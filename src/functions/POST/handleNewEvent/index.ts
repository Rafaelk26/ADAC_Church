import { supabaseServer } from "@/lib/supabase/server";
import toast from "react-hot-toast";

function sanitizeFileName(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9.-]/g, "")
    .toLowerCase();
}

export async function handleNewEvento(data: any) {
  toast.loading("Cadastrando...");

  try {
    let imageUrl: string | null = null;

    if (!(data.fotoEvento instanceof File)) {
      toast.error("Imagem inválida, escolha outra.");
      console.log("Imagem inválida:", data.fotoEvento);
    }

    // 📸 upload imagem
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

    // 🧠 insert banco
    const { data: newEvento, error } = await supabaseServer
      .from("eventos")
      .insert({
        nomeEvento: data.nomeEvento,
        localEvento: data.localEvento,
        dataEvento: data.dataEvento,
        horaEvento: data.horaEvento,
        descricaoEvento: data.descricaoEvento,
        fotoEvento: imageUrl,
      })
      .select()
      .single();

    if (error) throw error;

    toast.dismiss();
    toast.success("Evento criado!");

    return { success: true, data: newEvento };
  } catch (error) {
    toast.dismiss();
    toast.error("Erro ao criar evento");
    console.error(error);
    return { success: false };
  }
}