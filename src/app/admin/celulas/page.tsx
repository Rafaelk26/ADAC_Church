import { redirect } from "next/navigation";
import { getUserFromCookie } from "@/lib/auth/auth";
import CelulasClient from "@/components/admin/celulas/page";

export default async function Celulas(){

    const user = await getUserFromCookie();

    if (!user) {
        redirect("/auth/login");
    }

    if (user.role !== "admin") {
        redirect("/");
    }

    return <CelulasClient />
}