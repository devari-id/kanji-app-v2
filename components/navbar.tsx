"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react/jsx-runtime";

const links = [
  {
    name: "Vocabularies",
    to: "/",
  },
  {
    name: "Exercise",
    to: "/vocab-exercise",
  },
  {
    name: "Basic Kanji",
    to: "/basic-kanji",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className=" p-4 rounded-xl border border-foreground/20">
      <ul className="flex items-center gap-x-8">
        {links.map((link, i) => (
          <Fragment key={i}>
            <li
              className={cn(
                pathname === link.to ? "font-medium text-rose-500" : "",
                "hover:underline hover:underline-offset-4",
              )}
            >
              <Link href={link.to}>{link.name}</Link>
            </li>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}
