import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const vocabularies = pgTable("vocabularies", {
  id: uuid("id").primaryKey().defaultRandom(),
  kanji: text("kanji").notNull().unique(),
  meaning: text("meaning"),
  furigana: text("furigana"),
  reviewCount: integer("review_count").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Vocabulary = typeof vocabularies.$inferSelect;
export type NewVocabulary = typeof vocabularies.$inferInsert;

export const kanjis = pgTable("kanjis", {
  id: uuid("id").primaryKey().defaultRandom(),
  kanji: text("kanji").notNull().unique(),
  kunyomi: text("kunyomi"),
  onyomi: text("onyomi"),
  meaning: text("meaning").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
export type KanjiItem = typeof kanjis.$inferSelect;
