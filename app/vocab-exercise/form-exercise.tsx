"use client";

import { SubmitEvent, useEffect, useId, useRef, useState } from "react";
import TotalVocabInput from "./total-vocab";
import useMeasure from "react-use-measure";
import { Vocabulary } from "@/db/schema";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  vocabs: Vocabulary[];
};

export default function FormExercise({ vocabs }: Props) {
  const [total, setTotal] = useState(5);

  const pathname = usePathname();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formRef.current?.reset();
  }, [pathname]);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const answers: { yomikata: string; imi: string }[] = [];
    const keyAnswers: { yomikata: string | null; imi: string | null }[] = [];

    for (let i = 0; i < total; i++) {
      const yomikata = formData.get(`yomikata_${i}`);
      const imi = formData.get(`imi_${i}`);

      keyAnswers.push({
        imi: vocabs[i]?.meaning,
        yomikata: vocabs[i]?.furigana,
      });

      if (yomikata && imi) {
        answers.push({ imi: imi.toString(), yomikata: yomikata.toString() });
      }
    }

    console.log({ answers });
    console.log({ keyAnswers });
  };

  return (
    <div className="flex flex-col gap-y-8 my-8">
      <div className="flex items-center justify-center gap-x-2">
        <TotalVocabInput setTotal={setTotal} total={total} />
        <button
          type="submit"
          className="px-4 py-2 bg-rose-500 hover:bg-rose-700 duration-200 ease-linear transition-all rounded-xl font-medium"
        >
          Submit
        </button>
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-4"
      >
        {Array(total)
          .fill("")
          .map((_, i) => (
            <ExerciseInput index={i} word={vocabs[i]} key={i} />
          ))}
      </form>
    </div>
  );
}

function ExerciseInput({ word, index }: { word: Vocabulary; index: number }) {
  const id = useId();
  const [ref, { height }] = useMeasure();

  return (
    <div
      ref={ref}
      className="flex h-20 gap-x-2 border items-center rounded-xl overflow-hidden"
    >
      <div className="bg-foreground flex items-center shrink-0 text-background h-full w-max px-4">
        <label className="text-4xl font-mincho" htmlFor={id}>
          {word.kanji}
        </label>
      </div>
      <input
        name={`yomikata_${index}`}
        placeholder="読み方は？"
        id={id}
        type="text"
        className="outline-none border-none w-full p-2 text-xl"
      />
      <div style={{ height }} className="w-px bg-border" />
      <textarea
        name={`imi_${index}`}
        placeholder="意味は？"
        className="outline-none border-none w-full p-2 resize-none"
      />
    </div>
  );
}
