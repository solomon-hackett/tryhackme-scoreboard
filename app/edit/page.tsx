import AddForm from "@/app/ui/edit/add-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Person",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center px-5 pt-20 w-screen">
      <AddForm />
    </main>
  );
}
