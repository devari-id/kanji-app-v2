import FormAddVocab from "@/components/forms/form-add-vocab";
import { db } from "@/db";
import { cacheTag } from "next/cache";

const getAllVocabs = async () => {
  "use cache";
  cacheTag("vocabs");

  const data = await db.query.vocabularies.findMany({
    orderBy: { createdAt: "desc", reviewCount: "asc" },
  });

  return data;
};

export default async function HomePage() {
  const vocabs = await getAllVocabs();
  return (
    <div className="my-4 flex flex-wrap gap-4 border-foreground/20">
      <FormAddVocab />
      {vocabs.map((e, i) => (
        <div key={i}>
          <div className="text-4xl p-4 hover:text-rose-500">{e.kanji}</div>
        </div>
      ))}
    </div>
  );
}
