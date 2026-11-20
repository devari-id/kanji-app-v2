"use client";
import { cn } from "@/utils";
import { Search } from "lucide-react";
import Form from "next/form";
import { usePathname } from "next/navigation";

export default function SearchGoiForm() {
  const pathname = usePathname();

  const actionPath = "search";

  return (
    <div className="max-w-lg border overflow-hidden mx-auto rounded-xl">
      <Form action="search" className="flex items-center relative bg-input p-1">
        <button
          className={cn(
            "flex items-center justify-center aspect-square size-12 rounded-xl",
            pathname === `/${actionPath}` ? "bg-rose-500" : "bg-input",
          )}
          type="submit"
        >
          <Search />
        </button>
        <input
          placeholder="検索"
          name="query"
          className="h-full w-full font-mincho border-none outline-none text-xl py-2 px-4"
        />
      </Form>
    </div>
  );
}
