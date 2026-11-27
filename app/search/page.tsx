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
    <div className="my-4 space-y-4">
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
    <div className="px-2 border mx-4 rounded">
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
    <div className="flex flex-wrap gap-4 border-foreground/20">
      {goi.map((e, i) => (
        <GoiItem item={e} key={e.id ?? i} />
      ))}
    </div>
  );
}
