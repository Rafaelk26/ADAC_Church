import toast from "react-hot-toast";
import { supabaseServer } from "@/lib/supabase/server";
import { celulaUpdateSchema, CelulaFormData } from "@/components/admin/celulas/page";

export async function handleUpdateCelula(id: string, data: CelulaFormData) {

  toast.loading("Atualizando...");

  try {
    const parsed = celulaUpdateSchema?.parse(data);

    let imageUrl: string | null = parsed.fotoCelulaUrl || null;

    // 📸 nova imagem
    if (parsed.fotoCelula instanceof File) {

      // 🔥 deletar antiga
      if (parsed.fotoCelulaUrl) {
        const oldPath = parsed.fotoCelulaUrl?.split("/celulas/")[1];

        if (oldPath) {
          await supabaseServer.storage
            .from("celulas")
            .remove([oldPath]);
        }
      }

      // 🔥 upload nova
      const fileName = `celulas/${Date.now()}-${parsed.fotoCelula.name}`;

      const { error: uploadError } = await supabaseServer.storage
        .from("celulas")
        .upload(fileName, parsed.fotoCelula);

      if (uploadError) throw uploadError;

      const { data: publicUrl } = supabaseServer.storage
        .from("celulas")
        .getPublicUrl(fileName);

      imageUrl = publicUrl.publicUrl;
    }

    // ⚠️ remove undefined antes de enviar
    const updateData = {
      nomeCelula: parsed.nomeCelula,
      liderCelula: parsed.liderCelula,
      bairroCelula: parsed.bairroCelula,
      diaCelula: parsed.diaCelula,
      horaCelula: parsed.horaCelula,
      generoCelula: parsed.generoCelula,
      faixaCelula: parsed.faixaCelula,
      fotoCelula: imageUrl,
    };

    const cleanedData = Object.fromEntries(
      Object.entries(updateData).filter(([_, v]) => v !== undefined)
    );

    const { data: updatedCelula, error } = await supabaseServer
      .from("celulas")
      .update(cleanedData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    toast.dismiss();
    toast.success("Célula atualizada!");

    return { success: true, data: updatedCelula };

  } catch (error) {
    toast.dismiss();
    toast.error("Erro ao atualizar célula!");
    console.error("Erro no update:", error);
    return { success: false };
  }
}