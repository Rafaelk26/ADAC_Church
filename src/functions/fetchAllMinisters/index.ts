import { supabaseServer } from "@/lib/supabase/server";

export async function fetchAllMinisters() {
    const { data } = await supabaseServer
    .from("ministerios")
    .select("*");

    console.log("DATA MINISTÉRIOS:", data);
}