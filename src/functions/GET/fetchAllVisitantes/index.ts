import { supabaseServer } from "@/lib/supabase/server";

export async function fetchAllVisitantes() {
    const { data } = await supabaseServer
    .from("visitantes")
    .select("*");

    console.log("DATA VISITANTES:", data);
}