import { redirect } from "next/navigation";
import { getUserFromCookie } from "@/lib/auth/auth";
import { MinisteriosClient } from "@/components/admin/ministerios/page";

export default async function Ministerios() {

  const user = await getUserFromCookie();

  if (!user) {
    redirect("/auth/login");
  }

  if (user.role !== "admin") {
    redirect("/");
  }

  return <MinisteriosClient />;
}