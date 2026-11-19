import { SearchParams } from "@/types";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { findGoiByKanji, findKanjisByKanji } from "./queries";

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
  const kanjis = await findKanjisByKanji(query);
  return (
    <div className="flex items-stretch justify-center gap-2">
      {kanjis.map((k) => (
        <div
          key={k.id}
          className="flex flex-col items-center border justify-center p-2 rounded-xl"
        >
          <div className="text-4xl font-mincho p-4">{k.kanji}</div>
          <div className="max-w-40 text-center">{k.kunyomi}</div>
          <div className="max-w-40 text-center">{k.onyomi}</div>
          <div className="max-w-40 text-center">{k.meaning}</div>
        </div>
      ))}
    </div>
  );
}

async function SusGoi({ sp }: { sp: SearchParams }) {
  const { query } = await sp;
  if (!query || typeof query !== "string") {
    redirect("/");
  }
  const goi = await findGoiByKanji(query);
  return <div>{JSON.stringify(goi)}</div>;
}
