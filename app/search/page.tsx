import { SearchParams } from "@/types";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { findGoiByKanji, findKanjisByKanji } from "./queries";
import { GoiItem } from "../(goi)/goi-item";
import TableKanji from "./table-kanji";

export default function SearchKanjiPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className="pace-y-4 my-4">
      <Suspense>
        <SusKanji sp={searchParams} />
      </Suspense>
      <Suspense>
        <SusGoi sp={searchParams} />
      </Suspense>
    </div>
  );
}

async function SusKanji({ sp }: { sp: SearchParams }) {
  const { query } = await sp;
  if (!query || typeof query !== "string") {
    redirect("/");
  }

  const kanjis = findKanjisByKanji(query);

  return (
    <div className="space-y-4">
      <div className="mb-4 flex justify-center">
        <h1 className="font-medium">
          Search result :
          <span className="pl-2 underline underline-offset-4">{query}</span>
        </h1>
      </div>
      <TableKanji promiseKanjis={kanjis} key={query} />
    </div>
  );
}

async function SusGoi({ sp }: { sp: SearchParams }) {
  const { query } = await sp;
  if (!query || typeof query !== "string") {
    redirect("/");
  }
  const goi = await findGoiByKanji(query);
  return (
    <div className="flex flex-wrap gap-4 border-foreground/20 my-8">
      {goi.map((e, i) => (
        <GoiItem item={e} key={e.id ?? i} />
      ))}
    </div>
  );
}
