import postgres from "postgres";
import { Person } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const ITEMS_PER_PAGE = 15;

const ALLOWED_SORTS: Record<string, { column: string; direction: string }> = {
  "name-asc": { column: "name", direction: "ASC" },
  "name-desc": { column: "name", direction: "DESC" },
  "score-asc": { column: "score", direction: "ASC" },
  "score-desc": { column: "score", direction: "DESC" },
};

export async function fetchFilteredScores(
  query: string,
  sort: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const { column, direction } =
    ALLOWED_SORTS[sort] ?? ALLOWED_SORTS["score-desc"];

  const data = await sql<Person[]>`
  SELECT * FROM people
  WHERE people.name ILIKE ${"%" + query + "%"}
     OR people.score::text ILIKE ${"%" + query + "%"}
  ORDER BY ${
    column === "score" ? sql`score::numeric` : sql.unsafe(`"${column}"`)
  } ${sql.unsafe(direction)}
  LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `;

  return data;
}

export async function fetchPeoplePages(query: string) {
  try {
    const data = await sql`SELECT COUNT(*)
    FROM people
    WHERE people.name ILIKE ${"%" + query + "%"}
     OR people.score::text ILIKE ${"%" + query + "%"} 
  `;

    const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of invoices.");
  }
}
