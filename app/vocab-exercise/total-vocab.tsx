"use client";

import { Dispatch, SetStateAction } from "react";

type Props = {
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
};

export default function TotalVocabInput({ setTotal, total }: Props) {
  return (
    <div className="flex justify-center">
      <div className="border border-foreground/20 w-max pr-4 flex items-center gap-x-4 rounded-xl overflow-hidden">
        <label className="font-medium h-full p-4">Total Vocabs : </label>
        <input
          value={total}
          max={10}
          onChange={(e) => setTotal(Number(e.target.value))}
          type="number"
          className="text-xl outline-none border-none w-30"
        />
      </div>
    </div>
  );
}
