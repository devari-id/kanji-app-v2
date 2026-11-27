"use client";

import { Goi } from "@/db/schema";
import { useState } from "react";
import { GoiItem } from "./goi-item";
import { Button } from "@/components/ui/button";

function shuffleArray<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

type Props = {
  goi: Goi[];
};

export default function GoiList({ goi }: Props) {
  const [goiState, setGoiState] = useState(goi);

  const shuffleGoi = () => {
    setGoiState((goi) => [...shuffleArray(goi)]);
  };

  return (
    <>
      {goiState.map((goi) => (
        <GoiItem key={goi.id} item={goi} />
      ))}
      <Button onClick={shuffleGoi} size={"lg"}>
        Shuffle
      </Button>
    </>
  );
}
