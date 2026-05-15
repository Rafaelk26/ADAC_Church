import { supabaseServer } from "@/lib/supabase/server";
import { Trabalhador } from "@/types/types";
import toast from "react-hot-toast";

export async function handleNewWorker(form: Trabalhador){
   
    toast.loading("Cadastrando...");

    try{
        const { data, error } = await supabaseServer
        .from("trabalhadores")
        .insert({
            nomeTrabalhador: form.nomeTrabalhador,
            whatsappTrabalhador: form.whatsappTrabalhador,
            ministerioTrabalhador: form.ministerioTrabalhador
        })

        if(error) throw error;

        toast.dismiss();
        toast.success("Dados enviados.");
        return { data: true };
    }
    catch(err){
        toast.dismiss();
        toast.error("Erro ao enviar dados.")
        console.error("Erro ao enviar dados.", err)
    }
}