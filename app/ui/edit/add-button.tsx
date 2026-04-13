import Link from "next/link";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function AddButton() {
  return (
    <Link
      href="/edit/add"
      className="flex items-center px-4 py-2 rounded-xl font-medium text-green-300 text-sm liquid-glass"
    >
      <PlusCircleIcon className="inline mr-2 w-5 h-5" />
      Add New Person
    </Link>
  );
}
