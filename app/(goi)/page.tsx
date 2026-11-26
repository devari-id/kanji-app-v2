import { SearchParams } from "@/types";
import { Suspense } from "react";
import DialogForm from "./dialog-add-tango";
import { GoiItem } from "./goi-item";
import { findVocabsByKanjiComponent, getAllVocabs } from "./queries";

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className="my-8">
      <Suspense>
        <SusGoi sp={searchParams} />
      </Suspense>
    </div>
  );
}

async function SusGoi({ sp }: { sp: SearchParams }) {
  const { query } = await sp;
  const isNoFilter = !query || typeof query !== "string";
  const vocabs = isNoFilter
    ? await getAllVocabs()
    : await findVocabsByKanjiComponent(query);
  return (
    <div className="flex flex-wrap gap-8 px-2 items-center">
      <div className="">
        <DialogForm />
      </div>
      {vocabs.map((e, i) => (
        <GoiItem item={e} key={e.id ?? i} />
      ))}
    </div>
  );
}
