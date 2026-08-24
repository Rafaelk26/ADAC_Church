import { supabaseServer } from "@/lib/supabase/server";
import toast from "react-hot-toast";

export async function handleDeleteMinisterio(id: string) {

  toast.loading("Deletando...");

  try {
    // Buscar o ministério
    const { data: cell, error: fetchError } = await supabaseServer
      .from("ministerios")
      .select("fotoMinisterio")
      .eq("id", id)
      .single();

    if (fetchError) throw fetchError;

    // Remover imagem do bucket (se existir)
    if (cell?.fotoMinisterio) {
        const url = cell.fotoMinisterio;

        const path = url.split("/object/public/ministerios/")[1];

        const { error: storageError } = await supabaseServer.storage
            .from("ministerios")
            .remove([path]);

        if (storageError) throw storageError;
    }

    // Deletar do banco
    const { error: deleteError } = await supabaseServer
      .from("ministerios")
      .delete()
      .eq("id", id);

    if (deleteError) throw deleteError;

    toast.dismiss();
    toast.success("Ministério deletado com sucesso.")
    return true;

  } catch (e) {
    toast.dismiss();
    toast.error("Erro ao deletar ministério.");
    console.error(e);
    return false;
  }
}