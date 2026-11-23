import "dotenv/config";

import { relations } from "@/db/relations";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const clientSQL = neon(process.env.DATABASE_URL!);

const db = drizzle({ client: clientSQL, relations });

import { kanjiList } from "./kanji-n4";
import { goiTable, kanjiTable, reibunTable } from "@/db/schema";
import { kanjiListN3 } from "./kanji-n3";
import { sql } from "drizzle-orm";
import { kanjiListN3Part1 } from "./kanjiListN3Part1";
import { eq } from "drizzle-orm";
import { kanjiListN3Part2 } from "./kanjiListN3Part2";
import { kanjiListN3Part3 } from "./kanjiListN3Part3";
import { kanjiListN3Part4 } from "./kanjiListN3Part4";

const seedKanji = async () => {
  const data = kanjiList.map((k) => ({
    kanji: k.kanji,
    onyomi: k.onyomi.join(", "),
    kunyomi: k.kunyomi.join(", "),
    meaning: k.meaning.join(", "),
  }));

  try {
    await db
      .insert(kanjiTable)
      .values(data)
      .onConflictDoNothing({ target: kanjiTable.kanji });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

seedKanji()
  .then(() => {
    console.log("seeded");
  })
  .catch((err) => {
    console.log(err);
    console.log("fail to seed");
  });

const seedKanjiN3 = async () => {
  try {
    await db
      .insert(kanjiTable)
      .values(
        kanjiListN3.map((k) => ({
          kanji: k.kanji,
          onyomi: k.onyomi,
          kunyomi: k.kunyomi,
          meaning: k.meaning,
          level: "N3",
        })),
      )
      .onConflictDoUpdate({
        target: kanjiTable.kanji,
        set: {
          kunyomi: sql`excluded.kunyomi`, // Timpa kunyomi lama dengan kunyomi baru
          onyomi: sql`excluded.onyomi`, // Timpa onyomi lama dengan onyomi baru
        },
      });
  } catch (err) {
    throw err;
  }
};

seedKanjiN3()
  .then(() => {
    console.log("seeded");
  })
  .catch((err) => {
    console.log(err);
    console.log("fail to seed");
  });

const runSeedKanjiN3 = async () => {
  for (const data of [...kanjiListN3Part1, ...kanjiListN3Part2, ...kanjiListN3Part3, ...kanjiListN3Part4]) {
    for (const example of data.examples) {
      let [goi] = await db
        .insert(goiTable)
        .values({
          furigana: example.reading,
          kanji: example.word,
          meaning: example.meaning,
        })
        .onConflictDoNothing({ target: goiTable.kanji })
        .returning();

      // Jika kosong karena conflict, ambil record yang sudah ada
      if (!goi) {
        [goi] = await db
          .select()
          .from(goiTable)
          .where(eq(goiTable.kanji, example.word));
      }

      if (!goi) continue;

      await db.insert(reibunTable).values({
        goiId: goi.id,
        english: example.sentence.english,
        indonesian: example.sentence.meaning,
        japanese: example.sentence.japanese,
        romaji: example.sentence.reading,
      });
    }
  }
};
runSeedKanjiN3()
  .then(() => {
    console.log("seeded");
  })
  .catch((err) => {
    console.log(err);
    console.log("fail to seed");
  });
