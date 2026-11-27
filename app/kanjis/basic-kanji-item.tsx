"use client";

import { KanjiItem } from "@/db/schema";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function BasicKanjiItem({ kanji }: { kanji: KanjiItem }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/search?query=${kanji.kanji}`)}
      className={cn(
        "text-4xl cursor-pointer flex font-mincho items-center justify-center",
      )}
    >
      {kanji.kanji}
    </div>
  );
}
