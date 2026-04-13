import EditTable from "@/app/ui/edit/edit-table";
import PageHeading from "@/app/ui/page-heading";
import Search from "@/app/ui/search";
import Pagination from "@/app/ui/pagination";
import { fetchPeoplePages } from "@/app/lib/data";
import { Suspense } from "react";
import { LeaderboardSkeleton } from "@/app/ui/skeletons";
import AddButton from "@/app/ui/edit/add-button";
import SuccessToast from "@/app/ui/success-toast";

export const metadata = {
  title: "Edit Scores",
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    sort?: string;
    page?: string;
    success?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const success = searchParams?.success;
  const totalPages = await fetchPeoplePages(query);

  return (
    <main className="flex flex-col items-center px-5 pt-20 w-screen">
      {success && <SuccessToast message={success} />}
      <PageHeading heading="Edit Scores" />
      <div className="z-50 relative flex justify-between gap-5 mb-5">
        <Search placeholder="Search people..." />
        <AddButton />
      </div>
      <Suspense key={query + currentPage} fallback={<LeaderboardSkeleton />}>
        <EditTable query={query} currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </main>
  );
}
