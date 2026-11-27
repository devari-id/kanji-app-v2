"use client";

import SearchGoiForm from "@/app/(goi)/search-goi-form";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react/jsx-runtime";
import ThemeToggle from "./theme-toggle";

const links = [
  {
    name: "語彙",
    to: "/",
  },
  {
    name: "練習",
    to: "/goi-exercise",
  },
  {
    name: "漢字",
    to: "/kanjis",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center mx-4 py-2 gap-4">
      <ul className="flex items-center gap-x-8 flex-1">
        {links.map((link, i) => (
          <Fragment key={i}>
            <li className={cn("relative")}>
              <Link className={cn("text-2xl font-mincho ")} href={link.to}>
                {link.name}
              </Link>
              {pathname === link.to && (
                <hr className="border-foreground border-2 absolute inset-x-0" />
              )}
            </li>
          </Fragment>
        ))}
      </ul>
      <SearchGoiForm />
      <ThemeToggle />
    </nav>
  );
}
