"use server";

import { cookies } from "next/headers";

export async function deleteCookies(cookieName: string) {
  cookies().delete(cookieName);
}
