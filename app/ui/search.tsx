"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useRef, useState } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState(!!searchParams.get("query"));

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  function handleClear() {
    if (inputRef.current) inputRef.current.value = "";
    setHasValue(false);
    handleSearch("");
  }

  return (
    <div className="relative flex flex-1 rounded-xl shrink-0 liquid-glass">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        ref={inputRef}
        className="peer block py-2.25 pr-8 pl-10 focus:border focus:border-green-300 rounded-xl focus:outline-none w-full placeholder:text-green-300/40 text-sm"
        placeholder={placeholder}
        onChange={(e) => {
          setHasValue(!!e.target.value);
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="top-1/2 left-3 absolute w-4.5 h-4.5 text-green-300/40 peer-focus:text-green-300 -translate-y-1/2" />
      {hasValue && (
        <button
          onClick={handleClear}
          className="top-1/2 right-3 absolute text-green-300/40 hover:text-green-300 transition-colors -translate-y-1/2 duration-150"
          aria-label="Clear search"
        >
          <XMarkIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
