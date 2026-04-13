import BackButton from "@/app/ui/back-button";
import EditForm from "@/app/ui/edit/edit-form";
import PageHeading from "@/app/ui/page-heading";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  return (
    <main className="flex flex-col items-center px-5 pt-20 w-screen">
      <BackButton href="/edit" classNames="" />
      <PageHeading heading="Edit Person" />
      <EditForm id={id} />
    </main>
  );
}
