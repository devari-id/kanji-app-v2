"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import Form from "next/form";

export default function SearchGoiForm() {
  return (
    <Form action="search">
      <InputGroup className="max-w-xs">
        <InputGroupInput
          autoComplete="off"
          name="query"
          placeholder="Search..."
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
}
