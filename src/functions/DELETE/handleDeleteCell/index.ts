import { supabaseServer } from "@/lib/supabase/server";
import toast from "react-hot-toast";

export async function handleDeleteCell(id: string) {

  toast.loading("Deletando...");

  try {
    // Buscar a célula
    const { data: cell, error: fetchError } = await supabaseServer
      .from("celulas")
      .select("fotoCelula")
      .eq("id", id)
      .single();

    if (fetchError) throw fetchError;

    // Remover imagem do bucket (se existir)
    if (cell?.fotoCelula) {
        const url = cell.fotoCelula;

        const path = url.split("/object/public/celulas/")[1];

        const { error: storageError } = await supabaseServer.storage
            .from("celulas")
            .remove([path]);

        if (storageError) throw storageError;
    }

    // Deletar do banco
    const { error: deleteError } = await supabaseServer
      .from("celulas")
      .delete()
      .eq("id", id);

    if (deleteError) throw deleteError;

    toast.success("Célula deletada com sucesso.")
    return true;

  } catch (e) {
    toast.error("Erro ao deletar célula.");
    console.error(e);
    return false;
  }
}