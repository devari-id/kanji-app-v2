import { cacheKeys } from "@/cache-key";
import { db } from "@/db";
import { cacheTag } from "next/cache";

const refineKanji = (kanji: string) => {
  const chars = kanji
    .trim()
    .replace(/[。、.,!?\s]/g, "")
    .split("");
  const uniqueChars = [...new Set(chars)];
  return uniqueChars;
};

const removeUndefinedQueryResult = <T>(
  results: readonly (T | undefined)[],
): T[] => {
  return results.filter((row): row is T => row !== undefined);
};

export const findGoiByKanji = async (kanji: string) => {
  "use cache";
  cacheTag(cacheKeys.goi.search(kanji));

  const uniqueChars = refineKanji(kanji);

  const results = await Promise.all(
    uniqueChars.map((char) =>
      db.query.goiTable.findMany({
        where: {
          kanji: {
            ilike: `%${char}%`,
          },
        },
      }),
    ),
  );
  const flatResults = removeUndefinedQueryResult(results.flat());
  const uniqueResults = Array.from(
    new Map(flatResults.map((item) => [item.id, item])).values(),
  );
  return uniqueResults;
};

export const findKanjisByKanji = async (kanji: string) => {
  "use cache";
  cacheTag(cacheKeys.kanji.search(kanji));

  const uniqueChars = refineKanji(kanji);
  const results = await Promise.all(
    uniqueChars.map((char) =>
      db.query.kanjiTable.findFirst({
        where: {
          kanji: { eq: char },
        },
      }),
    ),
  );
  return removeUndefinedQueryResult(results);
};
