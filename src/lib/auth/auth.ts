import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getUserFromCookie() {

  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded as { id: string; role: string };
  } catch {
    return null;
  }
}