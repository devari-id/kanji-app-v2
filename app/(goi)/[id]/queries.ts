import { cacheKeys } from "@/cache-key";
import { db } from "@/db";
import { cacheTag } from "next/cache";

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
