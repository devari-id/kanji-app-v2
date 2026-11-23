import { cacheKeys } from "@/cache-key";
import { db } from "@/db";
import { cacheTag } from "next/cache";

export const getWordExamples = async (id: string) => {
  "use cache";
  cacheTag(cacheKeys.goi.example(id));

  const data = await db.query.reibunTable.findMany({
    where: {
      goiId: id,
    },
  });
  return data;
};
