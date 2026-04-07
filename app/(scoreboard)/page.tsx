import { Metadata } from "next"
import PageHeading from "../ui/page-heading";

export const metadata: Metadata = {
  title: "Scores"
};

export default function Page() {
  return <main><PageHeading heading="THM Leaderboard"/></main>;
}
