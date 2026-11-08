import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { useState } from "react";

export default function TotalVocabInput() {
  const [value, setValue] = useState(5);
  return (
    <Field>
      <InputGroup>
        <InputGroupInput
          value={value}
          type="number"
          id="input-group-url"
          placeholder="example.com"
        />
        <InputGroupAddon>
          <InputGroupText>Total Vocab</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
