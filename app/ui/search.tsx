"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search({ placeholder }: { placeholder: string }) {
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <div className="relative flex flex-1 shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block py-2.25 pl-10 border border-gray-200 rounded-md outline-2 w-full placeholder:text-gray-500 text-sm"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="top-1/2 left-3 absolute w-4.5 h-4.5 text-gray-500 peer-focus:text-gray-900 -translate-y-1/2" />
    </div>
  );
}
