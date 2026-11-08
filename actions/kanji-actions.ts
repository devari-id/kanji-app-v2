"use server";

import { db } from "@/db";
import { kanjis } from "@/db/schema";
import { eq } from "drizzle-orm";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

const saveNewBasicKanjiSchema = z.object({
  kanji: z.string().min(1),
  kunyomi: z.string(),
  onyomi: z.string(),
  meaning: z.string().min(1),
});

export async function deleteBasicKanji(kanjiId: string) {
  let isSuccess = false;
  try {
    await db.delete(kanjis).where(eq(kanjis.id, kanjiId));
    isSuccess = true;
  } catch (err) {
    console.log(err);
  }

  updateTag("basic-kanjis");

  return {
    isSuccess,
  };
}

export async function saveBasicKanji(_: unknown, formData: FormData) {
  const { success, data } = saveNewBasicKanjiSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  let isSuccess = false;
  let message = "";

  if (!success || !data) {
    return {
      isSuccess,
      message: "invalid input",
    };
  }

  try {
    await db
      .insert(kanjis)
      .values({
        kanji: data.kanji,
        meaning: data.meaning,
        kunyomi: data.kunyomi,
        onyomi: data.onyomi,
      })
      .onConflictDoUpdate({
        target: kanjis.kanji, // Kolom unik/primary key sebagai acuan konflik
        set: {
          meaning: data.meaning,
          kunyomi: data.kunyomi,
          onyomi: data.onyomi,
          kanji: data.kanji,
        },
      });
    isSuccess = true;
    message = "Added";
  } catch (err) {
    console.info(err);
    message = "Fail to store to db";
  }

  updateTag("basic-kanjis");

  return {
    isSuccess,
    message,
  };
}
