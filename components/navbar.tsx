"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react/jsx-runtime";

const links = [
  {
    name: "単語",
    to: "/",
  },
  {
    name: "練習",
    to: "/goi-exercise",
  },
  {
    name: "基本漢字",
    to: "/kanjis",
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
              )}
            >
              <Link
                className={cn(
                  "text-3xl font-mincho ",
                  pathname === link.to ? "underline underline-offset-8" : "",
                )}
                href={link.to}
              >
                {link.name}
              </Link>
            </li>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}
