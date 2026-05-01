import { redirect } from "next/navigation";
import { getUserFromCookie } from "@/lib/auth/auth";
import VisitantesClient from "@/components/admin/visitantes/page";

export default async function Visitantes(){

    const user = await getUserFromCookie();

    if (!user) {
        redirect("/auth/login");
    }

    if (user.role !== "admin") {
        redirect("/");
    }

    return <VisitantesClient />
}