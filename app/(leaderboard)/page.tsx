import { Metadata } from "next";
import PageHeading from "@/app/ui/page-heading";
import Leaderboard from "@/app/ui/home/leaderboard";
import { LeaderboardSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";
import { fetchPeoplePages } from "@/app/lib/data";
import Sort from "@/app/ui/home/sort";

export const metadata: Metadata = {
  title: "Scores",
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    sort?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const sort = searchParams?.sort || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchPeoplePages(query);

  return (
    <main className="flex flex-col items-center px-5 pt-20 w-screen">
      <PageHeading heading="THM Leaderboard" />
      <div className="relative flex gap-5 mb-5">
        <Search placeholder="Search People..." />
        <Sort />
      </div>
      <Suspense
        key={query + sort + currentPage}
        fallback={<LeaderboardSkeleton />}
      >
        <Leaderboard query={query} sort={sort} currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </main>
  );
}
