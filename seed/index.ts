import "dotenv/config";

import { relations } from "@/db/relations";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// Pastikan DATABASE_URL terbaca dari environment variable
const sql = neon(process.env.DATABASE_URL!);

// Inisialisasi db dengan schema agar bisa melakukan query relational jika diperlukan
export const db = drizzle({ client: sql, relations });

import { kanjiList } from "./kanji-n4";
import { kanjis } from "@/db/schema";

const seedKanji = async () => {
  const data = kanjiList.map((k) => ({
    kanji: k.kanji,
    onyomi: k.onyomi.join(", "),
    kunyomi: k.kunyomi.join(", "),
    meaning: k.meaning.join(", "),
  }));

  try {
    await db
      .insert(kanjis)
      .values(data)
      .onConflictDoNothing({ target: kanjis.kanji });
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
