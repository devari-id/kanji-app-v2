"use server";

import { cacheKeys } from "@/cache-key";
import { db } from "@/db";
import { kanjis } from "@/db/schema";
import { actionClient } from "@/lib/safe-action";
import { messages } from "@/toast-messages";
import { eq } from "drizzle-orm";
import { updateTag } from "next/cache";
import z from "zod";
import { zfd } from "zod-form-data";

const saveKanjiSchema = zfd.formData({
  kanji: zfd.text(z.string().trim().min(1)),
  kunyomi: zfd.text(z.string().optional()).optional(),
  onyomi: zfd.text(z.string().optional()).optional(),
  note: zfd.text(z.string().optional()).optional(),
  meaning: zfd.text(z.string().trim().min(1)),
});

export const removeKanjiAction = actionClient
  .inputSchema(
    z.object({
      kanjiId: z.string().trim().min(1),
    }),
  )
  .action(async ({ parsedInput: { kanjiId } }) => {
    try {
      await db.delete(kanjis).where(eq(kanjis.id, kanjiId));
    } catch (err) {
      console.log(err);
      throw new Error(messages.remove.fail);
    }
    updateTag(cacheKeys.kanji.all);
    return {
      message: messages.remove.success,
    };
  });

export const saveKanjiAction = actionClient
  .inputSchema(saveKanjiSchema)
  .action(
    async ({ parsedInput: { kanji, kunyomi, meaning, onyomi, note } }) => {
      try {
        await db
          .insert(kanjis)
          .values({
            kanji,
            meaning,
            kunyomi,
            onyomi,
            note,
          })
          .onConflictDoNothing({
            target: kanjis.kanji,
          });
      } catch (err) {
        console.error(err);
        throw new Error(messages.saved.fail);
      }
      updateTag(cacheKeys.kanji.all);

      return {
        message: messages.saved.success,
      };
    },
  );

export const updateKanjiAction = actionClient
  .inputSchema(saveKanjiSchema)
  .bindArgsSchemas([z.uuid()])
  .action(
    async ({
      parsedInput: { kanji, kunyomi, meaning, onyomi, note },
      bindArgsParsedInputs: [kanjiId],
    }) => {
      try {
        await db
          .update(kanjis)
          .set({
            kanji,
            kunyomi,
            meaning,
            onyomi,
            note,
          })
          .where(eq(kanjis.id, kanjiId));
      } catch (err) {
        console.log(err);
        throw new Error(messages.update.fail);
      }
      updateTag(cacheKeys.kanji.all);
      updateTag(cacheKeys.kanji.detail(kanjiId));
      return {
        message: messages.update.success,
      };
    },
  );
