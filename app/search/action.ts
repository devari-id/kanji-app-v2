"use server";

import { cacheKeys } from "@/cache-key";
import { db } from "@/db";
import { kanjiTable } from "@/db/schema";
import { actionClient } from "@/lib/safe-action";
import { messages } from "@/toast-messages";
import { eq } from "drizzle-orm";
import { updateTag } from "next/cache";
import z from "zod";

const saveKanjiSchema = z.object({
  id: z.string().trim().min(1),
  kanji: z.string().trim().min(1),
  kunyomi: z.string().optional().optional().nullable(),
  onyomi: z.string().optional().optional().nullable(),
  note: z.string().optional().optional().nullable(),
  meaning: z.string().trim().min(1),
});

export const removeKanjiAction = actionClient
  .inputSchema(
    z.object({
      kanjiId: z.string().trim().min(1),
    }),
  )
  .action(async ({ parsedInput: { kanjiId } }) => {
    try {
      await db.delete(kanjiTable).where(eq(kanjiTable.id, kanjiId));
    } catch (err) {
      console.log(err);
      throw new Error(messages.remove.fail);
    }
    updateTag(cacheKeys.kanji.all);
    return {
      message: messages.remove.success,
    };
  });

export const updateKanjiAction = actionClient
  .inputSchema(saveKanjiSchema)
  .action(
    async ({ parsedInput: { id, kanji, kunyomi, meaning, onyomi, note } }) => {
      console.log({
        id,
        kanji,
        kunyomi,
        meaning,
        onyomi,
        note,
      });

      try {
        await db
          .update(kanjiTable)
          .set({
            kanji,
            kunyomi,
            meaning,
            onyomi,
            note,
            updatedAt: new Date(),
          })
          .where(eq(kanjiTable.id, id));
      } catch (err) {
        console.log(err);
        throw new Error(messages.update.fail);
      }

      updateTag(cacheKeys.kanji.all);
      updateTag(cacheKeys.kanji.detail(id));
      updateTag(cacheKeys.kanji.search(kanji));

      return {
        message: messages.update.success,
      };
    },
  );
