import { supabaseServer } from "@/lib/supabase/server";

export async function fetchAllMinisters() {
    const { data } = await supabaseServer
    .from("ministerios")
    .select("*");

    return data;
}