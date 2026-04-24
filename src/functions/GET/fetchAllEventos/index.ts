import { supabaseServer } from "@/lib/supabase/server";

export async function fetchAllEventos() {
    const { data } = await supabaseServer
    .from("eventos")
    .select("*");

    console.log("DATA EVENTOS:", data);
}