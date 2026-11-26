import { cacheKeys } from "@/cache-key";
import { db } from "@/db";
import { cacheTag } from "next/cache";

export const findVocabsByKanjiComponent = async (kanji: string) => {
  "use cache";
  cacheTag(cacheKeys.goi.search(kanji));

  const result = await db.query.goiTable.findMany({
    where: {
      kanji: { ilike: `%${kanji}%` },
    },
  });
  return result;
};

export const getAllVocabs = async () => {
  "use cache";
  cacheTag(cacheKeys.goi.all);

  const data = await db.query.goiTable.findMany({
    limit: 50,
    orderBy: { createdAt: "desc", reviewCount: "asc" },
  });
  return data;
};

export const getWordById = async (id: string) => {
  "use cache";
  cacheTag(cacheKeys.goi.detail(id));

  const data = await db.query.goiTable.findFirst({
    where: {
      id,
    },
  });
  return data;
};
