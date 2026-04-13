import { fetchPersonById } from "@/app/lib/data";
import { updatePerson } from "@/app/lib/actions";

export default async function EditForm({ id }: { id: string }) {
  const person = await fetchPersonById(id);
  return (
    <form
      action={updatePerson}
      className="flex flex-col gap-5 px-10 py-5 rounded-2xl liquid-glass"
    >
      <input
        type="hidden"
        name="id"
        value={id}
        className="px-2 py-1 focus:border focus:border-green-300 border-none rounded-xl outline-none text-xl liquid-glass"
        required
      />
      <label htmlFor="name" className="px-2 py-1 text-3xl text-center">
        Name
      </label>
      <input
        type="text"
        name="name"
        defaultValue={person.name}
        className="px-2 py-1 focus:border focus:border-green-300 border-none rounded-xl outline-none text-xl liquid-glass"
        required
      />
      <label htmlFor="score" className="px-2 py-1 text-3xl text-center">
        Score
      </label>
      <input
        type="number"
        name="score"
        defaultValue={person.score}
        className="px-2 py-1 focus:border focus:border-green-300 border-none rounded-xl outline-none text-xl liquid-glass"
        required
      />
      <label htmlFor="link" className="px-2 py-1 text-3xl text-center">
        Link
      </label>
      <input
        type="url"
        name="link"
        defaultValue={person.link}
        className="px-2 py-1 focus:border focus:border-green-300 border-none rounded-xl outline-none text-xl liquid-glass"
        required
      />
      <button
        type="submit"
        className="px-2 py-1 rounded-xl text-2xl cursor-pointer liquid-glass"
      >
        Update
      </button>
    </form>
  );
}
