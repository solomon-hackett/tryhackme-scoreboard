import BackButton from "@/app/ui/back-button";
import AddForm from "@/app/ui/edit/add-form";
import PageHeading from "@/app/ui/page-heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Person",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center px-5 pt-20 w-screen">
      <BackButton href="/edit" classNames="" />
      <PageHeading heading="Add a New Person" />
      <AddForm />
    </main>
  );
}
