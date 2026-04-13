import { fetchFilteredScores } from "@/app/lib/data";

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
              <td className="px-5 py-2 text-xl text-center">{person.name}</td>
              <td className="px-5 py-2 text-xl text-center">{person.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
