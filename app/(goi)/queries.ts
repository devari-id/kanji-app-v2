import { cacheKeys } from "@/cache-key";
import { db } from "@/db";
import { cacheTag } from "next/cache";

export const getAllVocabs = async () => {
  "use cache";
  cacheTag(cacheKeys.goi.all);

  const data = await db.query.vocabularies.findMany({
    orderBy: { createdAt: "desc", reviewCount: "asc" },
  });
  return data;
};

export const getWordById = async (id: string) => {
  "use cache";
  cacheTag(cacheKeys.goi.detail(id));

  const data = await db.query.vocabularies.findFirst({
    where: {
      id,
    },
  });
  return data;
};

export const getWordExamples = async (id: string) => {
  "use cache";
  cacheTag(cacheKeys.goi.example(id));

  const data = await db.query.wordExamples.findMany({
    where: {
      vocabId: id,
    },
  });
  return data;
};
