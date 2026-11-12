"use server";

import { cacheKeys } from "@/cache-key";
import { db } from "@/db";
import { vocabularies, wordExamples } from "@/db/schema";
import { generateJapaneseExamples } from "@/lib/gemini-service";
import { actionClient } from "@/lib/safe-action";
import { messages } from "@/toast-messages";
import { ApiError } from "@google/genai";
import { eq } from "drizzle-orm";
import { revalidateTag, updateTag } from "next/cache";
import z from "zod";
import { zfd } from "zod-form-data";

const saveGoiSchema = zfd.formData({
  kanji: zfd.text(z.string().min(1)),
  meaning: zfd.text(z.string().min(1)),
  furigana: zfd.text(z.string().min(1)),
});

export const removeGoiAction = actionClient
  .inputSchema(
    z.object({
      id: z.string().min(1),
    }),
  )
  .action(async ({ parsedInput: { id } }) => {
    try {
      await db.delete(vocabularies).where(eq(vocabularies.id, id));
    } catch (err) {
      console.log(err);
      throw new Error("fail to delete");
    }

    updateTag("vocabs");
    updateTag("vocab-exercise");

    return {
      message: "Deleted",
    };
  });

export const saveGoiAction = actionClient
  .inputSchema(saveGoiSchema)
  .action(async ({ parsedInput: { furigana, kanji, meaning } }) => {
    try {
      await db
        .insert(vocabularies)
        .values({
          furigana,
          kanji,
          meaning,
        })
        .onConflictDoUpdate({
          target: vocabularies.kanji,
          set: {
            furigana,
            kanji,
            meaning,
          },
        });
    } catch (error) {
      console.error(error);
      throw new Error("fail to store to db");
    }

    updateTag(cacheKeys.goi.all);

    return {
      message: messages.saved.success,
    };
  });

export const updateGoiAction = actionClient
  .inputSchema(saveGoiSchema)
  .bindArgsSchemas([z.uuid()])
  .action(
    async ({
      bindArgsParsedInputs: [wordId],
      parsedInput: { furigana, kanji, meaning },
    }) => {
      try {
        await db
          .update(vocabularies)
          .set({
            furigana,
            kanji,
            meaning,
          })
          .where(eq(vocabularies.id, wordId));
      } catch (err) {
        console.log(err);
        throw new Error(messages.update.fail);
      }
      updateTag(cacheKeys.goi.all);
      updateTag(cacheKeys.goi.detail(wordId));
      return {
        message: messages.update.success,
      };
    },
  );

export const generateExampleAction = actionClient
  .inputSchema(
    z.object({
      word: z.string().trim().min(1),
    }),
  )
  .action(async ({ parsedInput: { word } }) => {
    try {
      const result = await generateJapaneseExamples(word);
      return result;
    } catch (err) {
      console.log(err);
      if (err instanceof ApiError) {
        if (err.status === 429) {
          throw new Error("Quota exceeds");
        }
      }
      throw new Error("something went wrong. please try again.");
    }
  });

export const saveExampleAction = actionClient
  .inputSchema(
    z.object({
      japanese: z.string().trim().min(1),
      english: z.string().trim().min(1),
      indonesian: z.string().trim().min(1),
      romaji: z.string().trim().min(1),
      vocabId: z.string().trim().min(1),
    }),
  )
  .action(
    async ({
      parsedInput: { english, indonesian, japanese, romaji, vocabId },
    }) => {
      try {
        await db.insert(wordExamples).values({
          english,
          indonesian,
          japanese,
          vocabId,
          romaji,
        });
      } catch (err) {
        console.log(err);
        throw new Error(messages.saved.fail);
      }

      revalidateTag(cacheKeys.goi.example(vocabId), "max");

      return {
        message: messages.saved.success,
      };
    },
  );
