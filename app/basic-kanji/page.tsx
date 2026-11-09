import FormAddKanji from "./form-add-kanji";
import { db } from "@/db";
import { cacheTag } from "next/cache";
import BasicKanjiItem from "./basic-kanji-item";
import { Suspense } from "react";
import { SearchParams } from "@/types";

const getBasicKanji = async () => {
  "use cache";
  cacheTag("basic-kanjis");

  const result = await db.query.kanjis.findMany({
    orderBy: { createdAt: "asc" },
  });
  return result;
};

const getBasicKanjiById = async (id: string) => {
  "use cache";
  cacheTag("basic-kanjis", id);

  const result = await db.query.kanjis.findFirst({
    where: {
      id,
    },
  });
  return result;
};

export default async function KanjiPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const kanjis = await getBasicKanji();

  return (
    <div className="my-4">
      <div className="w-full">
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
