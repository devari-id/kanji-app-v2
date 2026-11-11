import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelations(schema, (r) => ({
  wordExamples: {
    vocab: r.one.vocabularies({
      from: r.wordExamples.vocabId,
      to: r.vocabularies.id,
    }),
  },
}));
