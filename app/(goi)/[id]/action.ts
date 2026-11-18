"use server";

import { cacheKeys } from "@/cache-key";
import { db } from "@/db";
import { wordExamples } from "@/db/schema";
import { actionClient } from "@/lib/safe-action";
import { messages } from "@/toast-messages";
import { updateTag } from "next/cache";
import z from "zod";
import { zfd } from "zod-form-data";

export const saveExampleAction = actionClient
  .inputSchema(
    zfd.formData({
      indonesian: zfd.text(z.string()),
      english: zfd.text(z.string()),
      japanese: zfd.text(z.string()),
      romaji: zfd.text(z.string()),
    }),
  )
  .bindArgsSchemas([z.string()])
  .action(
    async ({
      parsedInput: { english, indonesian, japanese, romaji },
      bindArgsParsedInputs: [vocabId],
    }) => {
      try {
        await db.insert(wordExamples).values({
          english,
          indonesian,
          japanese,
          romaji,
          vocabId,
        });
      } catch (err) {
        console.log(err);
        throw new Error(messages.saved.fail);
      }
      updateTag(cacheKeys.goi.example(vocabId));
      return {
        message: messages.saved.success,
      };
    },
  );
