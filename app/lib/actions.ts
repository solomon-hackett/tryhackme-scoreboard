"use server";

import { revalidatePath } from "next/cache";
import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function deletePerson(id: string) {
  try {
    await sql`
            DELETE FROM people
            WHERE id = ${id}
        `;
    revalidatePath("/edit");
  } catch (error) {
    console.error("Error deleting person:", error);
    throw new Error("Failed to delete person");
  }
}

export async function addPerson(formData: FormData) {
  console.log("Form Data:", Object.fromEntries(formData.entries()));
  return;
}
export async function updatePerson(formData: FormData) {}
