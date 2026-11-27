"use server";

import { cacheKeys } from "@/cache-key";
import { db } from "@/db";
import { kanjiTable } from "@/db/schema";
import { actionClient } from "@/lib/safe-action";
import { messages } from "@/toast-messages";
import { updateTag } from "next/cache";
import z from "zod";
import { zfd } from "zod-form-data";

const saveKanjiSchema = zfd.formData({
  kanji: zfd.text(z.string().trim().min(1)),
  kunyomi: zfd.text(z.string().optional()).optional(),
  onyomi: zfd.text(z.string().optional()).optional(),
  notes: zfd.text(z.string().optional()).optional(),
  meaning: zfd.text(z.string().trim().min(1)),
});

export const saveKanjiAction = actionClient
  .inputSchema(saveKanjiSchema)
  .action(
    async ({ parsedInput: { kanji, kunyomi, meaning, onyomi, notes } }) => {
      try {
        await db
          .insert(kanjiTable)
          .values({
            kanji,
            meaning,
            kunyomi,
            onyomi,
            note: notes,
          })
          .onConflictDoNothing({
            target: kanjiTable.kanji,
          });
      } catch (err) {
        console.error(err);
        throw new Error(messages.saved.fail);
      }

      updateTag(cacheKeys.kanji.all);
      updateTag("search-kanji");

      return {
        message: messages.saved.success,
      };
    },
  );
