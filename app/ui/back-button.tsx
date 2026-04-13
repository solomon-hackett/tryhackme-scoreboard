import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function BackButton({
  href,
  classNames,
}: {
  href: string;
  classNames: string;
}) {
  return (
    <Link
      href={href}
      className={`${classNames ?? ""} liquid-glass rounded-xl px-2 py-1 text-xl self-start mt-10 flex items-center gap-1`}
    >
      <ArrowLeftIcon className="w-5 h-5" /> Back
    </Link>
  );
}
