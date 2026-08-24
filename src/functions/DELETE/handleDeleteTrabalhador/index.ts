import { supabaseServer } from "@/lib/supabase/server"
import toast from "react-hot-toast";

type DeleteWorkResponse = {
  success: boolean;
  data?: any;
};

export async function handleDeleteTrabalhador(id?: string): Promise<DeleteWorkResponse> {
  try {
    if (!id) {
      return { success: false };
    }

    const { data: work, error: fetchError } = await supabaseServer
      .from("trabalhadores")
      .delete()
      .eq("id", id);

    if (fetchError) throw fetchError;

    toast.dismiss();
    toast.success("Removido da lista de trabalhadores.");

    return { success: true, data: work };
  } catch (err) {
    toast.dismiss();
    toast.error("Erro ao marcar como lido.");
    console.error(err);

    return { success: false };
  }
}