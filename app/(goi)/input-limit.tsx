"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export default function InputLimit() {
  return (
    <InputGroup className="max-w-max">
      <InputGroupInput type="number" defaultValue={50} />
      <InputGroupAddon>
        <InputGroupText>Item per page</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
