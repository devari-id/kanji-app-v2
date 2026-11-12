"use client";

import { Vocabulary } from "@/db/schema";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  item: Vocabulary;
}

export const GoiItem: React.FC<Props> = ({ item }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/?id=${item.id}`)}
      className="text-4xl font-mincho p-4"
    >
      {item.kanji}
    </div>
  );
};
