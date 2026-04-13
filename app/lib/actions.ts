"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

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
  const name = formData.get("name") as string;
  const score = formData.get("score") as string;
  const link = formData.get("link") as string;
  try {
    await sql`
            INSERT INTO people (name, score, link)
            VALUES (${name}, ${score}, ${link})
        `;
  } catch (error) {
    console.error("Error adding person:", error);
    throw new Error("Failed to add person, please try again later.");
  }
  revalidatePath("/edit");
  redirect("/edit?success=Person added successfully!");
}

export async function updatePerson(formData: FormData) {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const score = formData.get("score") as string;
  const link = formData.get("link") as string;
  try {
    await sql`
            UPDATE people
            SET name = ${name}, score = ${score}, link = ${link}
            WHERE id = ${id}
        `;
  } catch (error) {
    console.error("Error updating person:", error);
    throw new Error("Failed to update person, please try again later.");
  }
  revalidatePath("/edit");
  redirect("/edit?success=Person edited successfully!");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
