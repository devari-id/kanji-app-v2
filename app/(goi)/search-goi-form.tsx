"use client";
import { Search } from "lucide-react";
import Form from "next/form";

export default function SearchGoiForm() {
  return (
    <div className="max-w-lg border overflow-hidden mx-auto rounded-xl">
      <Form action="" className="flex items-center relative p-2 bg-input">
        <button
          className="bg-rose-500 flex items-center justify-center aspect-square size-12 rounded-xl"
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
