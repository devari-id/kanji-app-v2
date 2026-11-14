import { cacheKeys } from "@/cache-key";
import { db } from "@/db";
import { cacheTag } from "next/cache";

export const getBasicKanji = async () => {
  "use cache";
  cacheTag(cacheKeys.kanji.all);

  const result = await db.query.kanjis.findMany({
    orderBy: { createdAt: "asc" },
  });
  return result;
};

export const getBasicKanjiById = async (id: string) => {
  "use cache";
  cacheTag(cacheKeys.kanji.detail(id));

  const result = await db.query.kanjis.findFirst({
    where: {
      id,
    },
  });
  return result;
};
