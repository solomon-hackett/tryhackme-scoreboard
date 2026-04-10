import { fetchScores } from "@/app/lib/data";

export default async function Leaderboard() {
  const people = await fetchScores();

  return (
    <div className="rounded-2xl overflow-hidden liquid-glass">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="px-10 py-5 text-3xl">Position</th>
            <th className="px-10 py-5 text-3xl">Name</th>
            <th className="px-10 py-5 text-3xl">Score</th>
          </tr>
        </thead>
        <tbody className="pb-5">
          {people.map((person, index) => (
            <tr key={person.name}>
              <td className="px-5 py-2 text-xl text-center">{index + 1}</td>
              <td className="px-5 py-2 text-xl text-center">{person.name}</td>
              <td className="px-5 py-2 text-xl text-center">{person.score}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="pb-5" />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
