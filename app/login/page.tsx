import PageHeading from "@/app/ui/page-heading";
import { Suspense } from "react";
import LoginForm from "@/app/ui/login/login-form";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center px-5 pt-20 w-screen">
      <PageHeading heading="Login" />
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}
