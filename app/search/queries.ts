import { cacheKeys } from "@/cache-key";
import { db } from "@/db";
import { cacheTag } from "next/cache";

const refineKanji = (kanji: string) => {
  // Bersihkan tanda baca/spasi dan pisahkan per karakter
  const chars = kanji
    .trim()
    .replace(/[。、.,!?\s]/g, "")
    .split("");

  // Deduplikasi jika ada karakter yang sama agar tidak query 2x
  const uniqueChars = [...new Set(chars)];
  return uniqueChars;
};

const removeUndefinedQueryResult = (results: any[]) => {
  return results.filter(
    (row): row is NonNullable<typeof row> => row !== undefined,
  );
};

export const findGoiByKanji = async (kanji: string) => {
  const uniqueChars = refineKanji(kanji);

  const results = await Promise.all(
    uniqueChars.map((char) =>
      db.query.vocabularies.findMany({
        where: {
          kanji: {
            ilike: `%${char}%`,
          },
        },
      }),
    ),
  );

  // 1. Ratakan array of arrays menjadi satu array datar
  // 2. Buang elemen undefined/null bila ada
  // 3. Deduplikasi berdasarkan item.id
  const flatResults = removeUndefinedQueryResult(results.flat());

  const uniqueResults = Array.from(
    new Map(flatResults.map((item) => [item.id, item])).values(),
  );

  return uniqueResults;
};
export const findKanjisByKanji = async (kanji: string) => {
  "use cache";
  cacheTag(cacheKeys.search(kanji));
  const uniqueChars = refineKanji(kanji);
  const results = await Promise.all(
    uniqueChars.map((char) =>
      db.query.kanjis.findFirst({
        where: {
          kanji: { eq: char },
        },
      }),
    ),
  );
  return removeUndefinedQueryResult(results);
};
