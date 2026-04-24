import { supabaseServer } from "@/lib/supabase/server";

export async function fetchAllTrabalhadores() {
    const { data } = await supabaseServer
    .from("trabalhadores")
    .select("*");

    console.log("DATA TRABALHADORES:", data);
}