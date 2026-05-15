import { supabaseServer } from "@/lib/supabase/server";
import { Visitante } from "@/types/types";
import toast from "react-hot-toast";

export async function handleNewVisit(form: Visitante){
    try{
        const { data, error } = await supabaseServer
        .from("visitantes")
        .insert({
            nomeVisitante: form.nomeVisitante,
            whatsappVisitante: form.whatsappVisitante
        })

        if(error) throw error;

        toast.success("Dados enviados.");
        return { data: true };
    }
    catch(err){
        console.error("Erro ao enviar dados.", err)
        toast.error("Erro ao enviar dados.")
    }
}