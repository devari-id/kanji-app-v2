"use client";

import { Vocabulary } from "@/db/schema";
import { useRouter } from "nextjs-toploader/app";
import React from "react";

interface Props {
  item: Vocabulary;
}

export const GoiItem: React.FC<Props> = ({ item }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/${item.id}`)}
      className="text-4xl font-mincho p-4 hover:text-red-500 cursor-pointer"
    >
      {item.kanji}
    </div>
  );
};
