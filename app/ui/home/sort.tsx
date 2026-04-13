"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const SORT_FIELDS = [
  { label: "Name", value: "name" },
  { label: "Score", value: "score" },
];

export default function Sort() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = searchParams.get("sort") ?? "";
  const [currentField, currentDir = "desc"] = current.split("-");
  const selected = SORT_FIELDS.find((f) => f.value === currentField);

  function handleSelect(fieldValue: string) {
    const params = new URLSearchParams(searchParams);

    if (fieldValue === currentField) {
      const newDir = currentDir === "desc" ? "asc" : "desc";
      params.set("sort", `${fieldValue}-${newDir}`);
    } else {
      params.set("sort", `${fieldValue}-desc`);
    }

    replace(`${pathname}?${params.toString()}`);
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function dirIcon(fieldValue: string) {
    if (fieldValue !== currentField) return null;
    return currentDir === "asc" ? " ↑" : " ↓";
  }

  const buttonLabel = selected
    ? `${selected.label}${dirIcon(selected.value)}`
    : "Sort by";

  return (
    <div ref={ref} className="z-1 relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 backdrop-blur-md px-4 py-2 rounded-xl text-white whitespace-nowrap liquid-glass"
      >
        <span>{buttonLabel}</span>
        <span
          aria-hidden="true"
          className="ml-auto transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▼
        </span>
      </button>

      <div
        className="top-full left-0 absolute backdrop-blur-md mt-2 rounded-xl min-w-full overflow-hidden liquid-glass"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      >
        <div
          className="mx-3"
          style={{ height: "1px", background: "rgba(255,255,255,0.2)" }}
        />
        <ul
          role="listbox"
          aria-label="Sort options"
          className="m-0 p-0 list-none"
        >
          {SORT_FIELDS.map((field) => {
            const isActive = field.value === currentField;
            return (
              <li
                key={field.value}
                role="option"
                aria-selected={isActive}
                onClick={() => handleSelect(field.value)}
                className={`px-4 py-2 cursor-pointer bg-transparent transition-colors duration-150 hover:bg-white/10 flex items-center justify-between gap-4 ${
                  isActive ? "text-green-300 font-bold" : "text-white"
                }`}
              >
                <span>{field.label}</span>
                <span className="opacity-70 text-xs">
                  {isActive ? (currentDir === "desc" ? "↓" : "↑") : ""}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
