import { redirect } from "next/navigation";
import { getUserFromCookie } from "@/lib/auth/auth";
import { EventosClient } from "@/components/admin/eventos/page";

export default async function Eventos() {

    const user = await getUserFromCookie();
  
    if (!user) {
      redirect("/auth/login");
    }
  
    if (user.role !== "admin") {
      redirect("/");
    }

  return <EventosClient />
}