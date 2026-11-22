import "dotenv/config";

import { relations } from "@/db/relations";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// Pastikan DATABASE_URL terbaca dari environment variable
const clientSQL = neon(process.env.DATABASE_URL!);

// Inisialisasi db dengan schema agar bisa melakukan query relational jika diperlukan
const db = drizzle({ client: clientSQL, relations });

import { kanjiList } from "./kanji-n4";
import { kanjiTable } from "@/db/schema";
import { kanjiListN3 } from "./kanji-n3";
import { sql } from "drizzle-orm";

// const seedKanji = async () => {
//   const data = kanjiList.map((k) => ({
//     kanji: k.kanji,
//     onyomi: k.onyomi.join(", "),
//     kunyomi: k.kunyomi.join(", "),
//     meaning: k.meaning.join(", "),
//   }));

//   try {
//     await db
//       .insert(kanjiTable)
//       .values(data)
//       .onConflictDoNothing({ target: kanjiTable.kanji });
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };

// seedKanji()
//   .then(() => {
//     console.log("seeded");
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log("fail to seed");
//   });

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
