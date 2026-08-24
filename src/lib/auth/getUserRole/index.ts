import { supabase } from "../../supabase/client";

export async function getUserRole() {

  // Faz requisição para obter o usuário autenticado
  const { data: userData } = await supabase.auth.getUser();

// Se não houver usuário autenticado, retorna null
  if (!userData.user) return null;

// Faz requisição para obter o perfil do usuário e extrai a role
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userData.user.id)
    .single();

// Retorna a role do usuário ou null se não for encontrada
  return profile?.role || null;
}