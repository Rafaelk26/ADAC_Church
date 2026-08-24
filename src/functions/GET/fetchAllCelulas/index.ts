import { supabaseServer } from "@/lib/supabase/server";
import { Celula } from "@/types/types";

export async function fetchAllCelulas(): Promise<Celula[]> {
  const { data, error } = await supabaseServer
    .from("celulas")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}