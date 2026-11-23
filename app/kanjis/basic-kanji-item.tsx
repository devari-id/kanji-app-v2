"use client";

import { KanjiItem } from "@/db/schema";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function BasicKanjiItem({ kanji }: { kanji: KanjiItem }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const isActive = sp.get("id") === kanji.id;
  return (
    <div
      onClick={() =>
        router.push(`${pathname}?id=${kanji.id}`, { scroll: false })
      }
      className={cn(
        "text-4xl cursor-pointer flex font-mincho items-center justify-center group relative",
        isActive ? "text-rose-500" : "hover:text-rose-400",
      )}
    >
      {kanji.kanji}
    </div>
  );
}
