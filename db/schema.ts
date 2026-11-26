import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const goiTable = pgTable("goi_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  kanji: text("kanji").notNull().unique(),
  meaning: text("meaning").notNull(),
  furigana: text("furigana").notNull(),
  reviewCount: integer("review_count").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Goi = typeof goiTable.$inferSelect;
export type NewGoi = typeof goiTable.$inferInsert;

export const kanjiTable = pgTable("kanji_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  kanji: text("kanji").notNull().unique(),
  kunyomi: text("kunyomi"),
  note: text("note"),
  onyomi: text("onyomi"),
  meaning: text("meaning").notNull(),
  level: text("level").notNull().default("N4"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
export type KanjiItem = typeof kanjiTable.$inferSelect;

export const reibunTable = pgTable("reibun_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  japanese: text("japanese").notNull(),
  english: text("english").notNull(),
  romaji: text("romaji").notNull(),
  indonesian: text("indonesia").notNull(),
  goiId: uuid("goi_id")
    .notNull()
    .references(() => goiTable.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
export type Reibun = typeof reibunTable.$inferSelect;
