import { Metadata } from "next";
import PageHeading from "@/app/ui/page-heading";
import Leaderboard from "@/app/ui/home/leaderboard";
import { LeaderboardSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import Pagination from "@/app/ui/pagination";
import Search from "../ui/search";

export const metadata: Metadata = {
  title: "Scores",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center px-5 pt-20 w-screen">
      <PageHeading heading="THM Leaderboard" />
      <div>
        <Search />
        <
      </div>
      <Suspense fallback={<LeaderboardSkeleton />}>
        <Leaderboard />
      </Suspense>
      <Pagination />
    </main>
  );
}
