import postgres from "postgres";
import { Person } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchScores() {
  try {
    const data = await sql<
      Person[]
    >`SELECT * FROM people ORDER BY CAST(people.score AS int) DESC`;
    return data;
  } catch (err) {
    console.error("Database error", err);
    throw new Error("Failed to fetch people.");
  }
}

export async function fetchFilteredScores(query: string, currentPage: number) {
  return;
}
