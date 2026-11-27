import { Suspense } from "react";
import BasicKanjiItem from "./basic-kanji-item";
import DialogFormAddKanji from "./dialog-add-kanji";
import { getBasicKanji } from "./queries";

export default async function KanjiPage() {
  const kanjis = await getBasicKanji();
  return (
    <div className="my-4">
      <Suspense>
        <div className="grid grid-cols-10 my-8 gap-y-4">
          <div className="flex items-center justify-center">
            <DialogFormAddKanji />
          </div>
          {kanjis.map((kanji) => (
            <BasicKanjiItem kanji={kanji} key={kanji.id} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
