import { redirect } from "next/navigation";
import { getUserFromCookie } from "@/lib/auth/auth";
import { AdminHomeClient } from "@/components/admin/home/page";

export default async function AdminHome(){

    const user = await getUserFromCookie();

    if (!user) {
        redirect("/auth/login");
    }

    if (user.role !== "admin") {
        redirect("/");
    }

    return <AdminHomeClient />
}