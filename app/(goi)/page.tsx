import { db } from "@/db";
import { cacheTag } from "next/cache";
import FormGoi from "./form-goi";
import { GoiItem } from "./goi-item";
import { SearchParams } from "@/types";
import { Suspense } from "react";

const getAllVocabs = async () => {
  "use cache";
  cacheTag("vocabs");

  const data = await db.query.vocabularies.findMany({
    orderBy: { createdAt: "desc", reviewCount: "asc" },
  });

  return data;
};

const getWordById = async (id: string) => {
  "use cache";
  cacheTag("vocabs", id);

  const data = await db.query.vocabularies.findFirst({
    where: {
      id,
    },
  });
  return data;
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const vocabs = await getAllVocabs();

  return (
    <div className="my-4 space-y-8">
      <Suspense fallback={<p>loading...</p>}>
        <SuspenseForm sp={searchParams} />
      </Suspense>
      <div className="flex flex-wrap gap-4 border-foreground/20">
        {vocabs.map((e, i) => (
          <GoiItem item={e} key={i} />
        ))}
      </div>
    </div>
  );
}

async function SuspenseForm({ sp }: { sp: SearchParams }) {
  const { id } = await sp;
  const word = id ? await getWordById(id as string) : undefined;

  return <FormGoi key={typeof id === "string" ? id : undefined} word={word} />;
}
