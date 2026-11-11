"use server";

import { db } from "@/db";
import { vocabularies } from "@/db/schema";
import { actionClient } from "@/lib/safe-action";
import { eq } from "drizzle-orm";
import { updateTag } from "next/cache";
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
  .action(
    async ({
      parsedInput: { furigana, kanji, meaning },
    }): Promise<{ isSuccess: boolean; message: string }> => {
      let isSuccess = false;
      let message = "";
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
        isSuccess = true;
        message = "Added";
      } catch (error) {
        console.error(error);
        throw new Error("fail to store to db");
      }

      updateTag("vocabs");
      updateTag("vocab-exercise");

      return {
        isSuccess,
        message,
      };
    },
  );
