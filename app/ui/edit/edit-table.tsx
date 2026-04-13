import { fetchFilteredScoresForEdit } from "@/app/lib/data";
import Link from "next/dist/client/link";
import DeleteButton from "./delete-button";
import { PencilIcon } from "@heroicons/react/24/outline";

export default async function EditTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const people = await fetchFilteredScoresForEdit(query, currentPage);

  return (
    <div className="mb-5 rounded-2xl overflow-hidden liquid-glass">
      <table className="mb-5 w-full border-collapse">
        <thead>
          <tr>
            <th className="px-10 py-5 text-3xl">Name</th>
            <th className="px-10 py-5 text-3xl">Score</th>
            <th className="px-10 py-5 text-3xl">Actions</th>
          </tr>
        </thead>
        <tbody className="pb-5">
          {people.map((person) => (
            <tr key={person.name}>
              <td className="px-5 py-2 text-xl text-center">{person.name}</td>
              <td className="px-5 py-2 text-xl text-center">{person.score}</td>
              <td className="flex justify-center items-center gap-5 px-5 py-2 text-xl text-center">
                <Link
                  href={`/edit/${person.id}`}
                  className="px-1 py-1 rounded-md liquid-glass"
                >
                  <PencilIcon className="w-7 h-7" />
                </Link>
                <DeleteButton id={person.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
