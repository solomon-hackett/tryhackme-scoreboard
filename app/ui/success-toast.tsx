"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function SuccessToast({ message }: { message: string }) {
  const [visible, setVisible] = useState(true);
  const [animating, setAnimating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const routerRef = useRef(router);
  const pathnameRef = useRef(pathname);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.delete("success");
    const newUrl = params.size
      ? `${pathnameRef.current}?${params}`
      : pathnameRef.current;
    routerRef.current.replace(newUrl, { scroll: false });

    const hide = setTimeout(() => setAnimating(true), 2700);
    const remove = setTimeout(() => setVisible(false), 3000);
    return () => {
      clearTimeout(hide);
      clearTimeout(remove);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`right-5 bottom-5 z-9999 fixed flex items-center gap-2 backdrop-blur-md px-4 py-2 rounded-xl text-xl liquid-glass
        transition-all duration-300 ease-in
        ${animating ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"}`}
      style={{
        animation: "toastIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both",
      }}
    >
      <CheckIcon className="w-6 h-6 shrink-0" />
      {message}
      <style>{`
        @keyframes toastIn {
          from { opacity: 0; transform: translateY(16px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
