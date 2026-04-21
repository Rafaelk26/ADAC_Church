import { supabaseServer } from "@/lib/supabase/server";

export async function fetchAllCelulas() {
    const { data } = await supabaseServer
    .from("celulas")
    .select("*");

    console.log("DATA CÉLULAS:", data);
}