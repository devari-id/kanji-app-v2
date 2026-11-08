"use client";

import { RefObject, useState } from "react";

type Props = {
  ref: RefObject<HTMLInputElement | null>;
};

export default function AutoResizeInput({ ref }: Props) {
  const [value, setValue] = useState("");
  return (
    <input
      name="kanji"
      autoFocus
      ref={ref}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="outline-none text-4xl bg-transparent field-sizing-content min-w-[2ch] max-w-sm"
    />
  );
}
