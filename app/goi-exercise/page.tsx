import { db } from "@/db";
import FormExercise from "./form-exercise";
import { sql } from "drizzle-orm";
import { cacheTag } from "next/cache";

async function getKanjiForExercise() {
  "use cache";
  cacheTag("vocab-exercise");

  const data = await db.query.goiTable.findMany({
    orderBy: (goiTable, { asc }) => [
      sql`RANDOM()`, // Gunakan sql`RAND()` jika Anda memakai MySQL
      asc(goiTable.reviewCount),
    ],
    limit: 10,
  });
  return data;
}

export default async function VocabExercise() {
  const vocabs = await getKanjiForExercise();
  return (
    <div className="">
      <FormExercise vocabs={vocabs} />
    </div>
  );
}
