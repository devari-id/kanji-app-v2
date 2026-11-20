import { SearchParams } from "@/types";
import { Suspense } from "react";
import FormGoi from "./form-goi";
import { GoiItem } from "./goi-item";
import {
  findVocabsByKanjiComponent,
  getAllVocabs,
  getWordById,
} from "./queries";

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className="space-y-4 my-4">
      <div className="sticky top-0 z-10 w-full space-y-4 bg-background py-4">
        <Suspense fallback={<p>loading...</p>}>
          <SuspenseForm sp={searchParams} />
        </Suspense>
      </div>
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
    <div className="flex flex-wrap gap-4 border-foreground/20 my-8">
      {vocabs.map((e, i) => (
        <GoiItem item={e} key={e.id ?? i} />
      ))}
    </div>
  );
}

async function SuspenseForm({ sp }: { sp: SearchParams }) {
  const { id } = await sp;
  const word = id ? await getWordById(id as string) : undefined;
  return <FormGoi />;
}
