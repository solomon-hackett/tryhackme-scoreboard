"use client";

import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";
import {
  ExclamationCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/edit";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
  return (
    <form
      action={formAction}
      className="flex flex-col justify-center gap-5 px-10 py-5 rounded-2xl liquid-glass"
    >
      <label htmlFor="username" className="px-2 py-1 text-3xl text-center">
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        className="px-2 py-1 focus:border focus:border-green-300 border-none rounded-xl outline-none text-xl liquid-glass"
        required
      />
      <label htmlFor="password" className="px-2 py-1 text-3xl text-center">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="px-2 py-1 focus:border focus:border-green-300 border-none rounded-xl outline-none text-xl liquid-glass"
        required
      />
      <input type="hidden" name="redirectTo" value={callbackUrl} />
      <button
        className="flex justify-center items-center gap-2 px-2 py-1 rounded-xl text-2xl cursor-pointer liquid-glass"
        aria-disabled={isPending}
      >
        Log in <ArrowRightIcon className="w-5 h-5" />
      </button>
      {errorMessage && (
        <div className="flex justify-center items-center gap-2 mt-2 px-3 py-2 rounded-xl liquid-glass">
          <ExclamationCircleIcon className="w-7 h-7 text-red-500" />
          <p className="text-red-500 text-lg">{errorMessage}</p>
        </div>
      )}
    </form>
  );
}
