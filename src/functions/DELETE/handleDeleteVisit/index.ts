import { supabaseServer } from "@/lib/supabase/server"
import toast from "react-hot-toast";

type DeleteVisitResponse = {
  success: boolean;
  data?: any;
};

export async function handleDeleteVisit(id?: string): Promise<DeleteVisitResponse> {
  try {
    if (!id) {
      return { success: false };
    }

    const { data: visit, error: fetchError } = await supabaseServer
      .from("visitantes")
      .delete()
      .eq("id", id);

    if (fetchError) throw fetchError;

    toast.dismiss();
    toast.success("Removido da lista de visitantes.");

    return { success: true, data: visit };
  } catch (err) {
    toast.dismiss();
    toast.error("Erro ao marcar como lido.");
    console.error(err);

    return { success: false };
  }
}