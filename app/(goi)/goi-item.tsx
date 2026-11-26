"use client";

import { Goi } from "@/db/schema";
import { useRouter } from "nextjs-toploader/app";
import React from "react";

interface Props {
  item: Goi;
}

export const GoiItem: React.FC<Props> = ({ item }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/${item.id}`)}
      className="text-4xl p-4 font-mincho hover:text-red-500 cursor-pointer"
    >
      {item.kanji}
    </div>
  );
};
