import { fetchFilteredScores } from "@/app/lib/data";
import Link from "next/link";

export default async function Leaderboard({
  query,
  sort,
  currentPage,
}: {
  query: string;
  sort: string;
  currentPage: number;
}) {
  const people = await fetchFilteredScores(query, sort, currentPage);

  return (
    <div className="mb-5 rounded-2xl overflow-hidden liquid-glass">
      <table className="mb-5 w-full border-collapse">
        <thead>
          <tr>
            <th className="px-10 py-5 text-3xl">Position</th>
            <th className="px-10 py-5 text-3xl">Name</th>
            <th className="px-10 py-5 text-3xl">Score</th>
          </tr>
        </thead>
        <tbody className="pb-5">
          {people.map((person) => (
            <tr key={person.name}>
              <td className="px-5 py-2 text-xl text-center">
                {person.position}
              </td>
              <td className="px-5 py-2 text-xl text-center">
                <Link
                  href={person.link}
                  className="after:bottom-0 after:left-1/2 hover:after:left-0 after:absolute relative after:bg-current after:w-0 hover:after:w-full after:h-0.5 after:transition-all after:duration-300"
                >
                  {person.name}
                </Link>
              </td>
              <td className="px-5 py-2 text-xl text-center">{person.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
