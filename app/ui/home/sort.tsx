"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Sort() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function dropdown() {}
  return (
    <div>
      <button onClick={dropdown}></button>
    </div>
  );
}
