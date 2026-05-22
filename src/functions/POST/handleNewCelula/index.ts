import { supabaseServer } from "@/lib/supabase/server";
import { celulaSchema, CelulaFormData } from "@/components/admin/celulas/page";
import toast from "react-hot-toast";

export async function handleNewCelula(data: CelulaFormData) {

  toast.loading("Cadastrando...");

  try {
    // ✅ validação
    const parsed = celulaSchema.parse(data);

    let imageUrl: string | null = null;

    // ✅ upload da imagem (se existir)
    if (parsed.fotoCelula) {
      const file = parsed.fotoCelula;
      const fileName = `celulas/${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabaseServer.storage
        .from("celulas")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: publicUrl } = supabaseServer.storage
        .from("celulas")
        .getPublicUrl(fileName);

      imageUrl = publicUrl.publicUrl;
    }

    // ✅ insert no banco
    const { data: newCelula, error } = await supabaseServer
      .from("celulas")
      .insert({
        nomeCelula: parsed.nomeCelula,
        liderCelula: parsed.liderCelula,
        liderWhatsapp: parsed.liderWhatsapp,
        bairroCelula: parsed.bairroCelula,
        diaCelula: parsed.diaCelula,
        horaCelula: parsed.horaCelula,
        generoCelula: parsed.generoCelula,
        faixaCelula: parsed.faixaCelula,
        fotoCelula: imageUrl,
      })
      .select()
      .single();

    if (error) throw error;
    
    toast.dismiss();
    toast.success("Célula cadastrada!");
    return { success: true, data: newCelula };
  } catch (error) {
    toast.dismiss();
    toast.error("Erro ao criar célula!");
    console.error("Erro ao criar célula:", error);
    return { success: false };
  }
}