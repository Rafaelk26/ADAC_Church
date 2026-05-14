import { supabaseServer } from "@/lib/supabase/server";
import toast from "react-hot-toast";

export async function handleDeleteEvento(id: string) {

  toast.loading("Deletando...");

  try {
    // Buscar o evento
    const { data: cell, error: fetchError } = await supabaseServer
      .from("eventos")
      .select("fotoEvento")
      .eq("id", id)
      .single();

    if (fetchError) throw fetchError;

    // Remover imagem do bucket (se existir)
    if (cell?.fotoEvento) {
        const url = cell.fotoEvento;

        const path = url.split("/object/public/eventos/")[1];

        const { error: storageError } = await supabaseServer.storage
            .from("eventos")
            .remove([path]);

        if (storageError) throw storageError;
    }

    // Deletar do banco
    const { error: deleteError } = await supabaseServer
      .from("eventos")
      .delete()
      .eq("id", id);

    if (deleteError) throw deleteError;

    toast.dismiss();
    toast.success("Evento deletado com sucesso.")
    return true;

  } catch (e) {
    toast.dismiss();
    toast.error("Erro ao deletar ministério.");
    console.error(e);
    return false;
  }
}