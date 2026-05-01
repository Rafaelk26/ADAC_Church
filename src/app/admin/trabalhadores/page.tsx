import { redirect } from "next/navigation";
import { getUserFromCookie } from "@/lib/auth/auth";
import TrabalhadoresClient from "@/components/admin/trabalhadores/page";

export default async function Trabalhadores(){

    const user = await getUserFromCookie();

    if (!user) {
        redirect("/auth/login");
    }

    if (user.role !== "admin") {
        redirect("/");
    }

    return <TrabalhadoresClient />
}