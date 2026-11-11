"use client";

import { KanjiItem } from "@/db/schema";
import { usePathname, useRouter } from "next/navigation";

export default function BasicKanjiItem({ kanji }: { kanji: KanjiItem }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      onClick={() => router.push(`${pathname}?id=${kanji.id}`)}
      className="text-4xl cursor-pointer flex hover:text-rose-400 items-center justify-center group relative"
    >
      {kanji.kanji}
    </div>
  );
}
