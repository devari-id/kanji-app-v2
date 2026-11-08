"use server";

import { db } from "@/db";
import { vocabularies } from "@/db/schema";
import { updateTag } from "next/cache";

export async function saveNewWord(_: unknown, formData: FormData) {
  const kanji = formData.get("kanji");

  if (typeof kanji !== "string" || kanji === "") {
    return {
      isSuccess: false,
      message: "Incomplete input",
    };
  }

  let isSuccess = false;

  try {
    await db
      .insert(vocabularies)
      .values({ kanji })
      .onConflictDoNothing({ target: vocabularies.kanji });
    isSuccess = true;
  } catch (err) {
    console.info(err);
  }

  updateTag("vocabs");

  return {
    isSuccess,
    message: "Added",
  };
}
