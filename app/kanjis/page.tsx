import { SearchParams } from "@/types";
import { Suspense } from "react";
import BasicKanjiItem from "./basic-kanji-item";
import FormAddKanji from "./form-add-kanji";
import { getBasicKanji, getBasicKanjiById } from "./queries";

export default async function KanjiPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const kanjis = await getBasicKanji();

  return (
    <div className="my-4">
      <div className="sticky top-0 z-10 w-full bg-background py-4">
        <Suspense fallback={<p>loading...</p>}>
          <SuspenseForm sp={searchParams} />
        </Suspense>
      </div>
      <div className="grid grid-cols-10 my-8 gap-y-4">
        {kanjis.map((kanji) => (
          <BasicKanjiItem kanji={kanji} key={kanji.id} />
        ))}
      </div>
    </div>
  );
}

async function SuspenseForm({ sp }: { sp: SearchParams }) {
  const { id } = await sp;
  const kanji = id ? await getBasicKanjiById(id as string) : undefined;
  return (
    <FormAddKanji key={typeof id === "string" ? id : undefined} kanji={kanji} />
  );
}
