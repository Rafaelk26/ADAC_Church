import { supabaseServer } from "@/lib/supabase/server";

export async function fetchAllEventos() {
    const { data } = await supabaseServer
    .from("eventos")
    .select("*");
    
    return data;
}