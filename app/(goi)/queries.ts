import { cacheKeys } from "@/cache-key";
import { db } from "@/db";
import { goiTable } from "@/db/schema";
import { sql } from "drizzle-orm";
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

type GetAllVocabsParams = {
  page?: number;
  limit?: number;
};

export const getAllVocabs = async ({
  page = 1,
  limit = 100,
}: GetAllVocabsParams = {}) => {
  "use cache";
  cacheTag(cacheKeys.goi.all);

  const safeLimit = Math.max(1, Math.min(limit, 500));
  const safePage = Math.max(1, page);
  const offset = (safePage - 1) * safeLimit;

  const [total, data] = await Promise.all([
    db.$count(goiTable),
    db.query.goiTable.findMany({
      limit: safeLimit,
      offset,
      orderBy: { createdAt: "desc", reviewCount: "asc" },
    }),
  ]);

  const totalPage = total === 0 ? 0 : Math.ceil(total / safeLimit);

  return {
    data,
    pagination: {
      page: safePage,
      limit: safeLimit,
      total,
      totalPage,
      hasNextPage: safePage < totalPage,
      hasPrevPage: safePage > 1 && totalPage > 0,
    },
  };
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
