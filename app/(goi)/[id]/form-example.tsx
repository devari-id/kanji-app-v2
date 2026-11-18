"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { useAction } from "next-safe-action/hooks";
import { SubmitEvent, useId, useRef } from "react";
import { saveExampleAction } from "./action";
import toast from "react-hot-toast";

type Props = {
  goiId: string;
};

export default function FormExample({ goiId }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const saveExampleActionBind = saveExampleAction.bind(null, goiId);
  const { execute, isPending } = useAction(saveExampleActionBind, {
    onSuccess(args) {
      toast.success(args.data.message);
      formRef.current?.reset();
    },
    onError: ({ error: { thrownError, serverError } }) => {
      if (thrownError) {
        toast.error(thrownError.message);
      }
      if (serverError) {
        toast.error(serverError);
      }
    },
  });

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    execute(new FormData(e.currentTarget));
  };
  return (
    <fieldset disabled={isPending}>
      <form ref={formRef} onSubmit={handleSubmit} className="p-4">
        <FieldGroup>
          <InputExample label="Indonesian" name="indonesian" />
          <InputExample label="Japanese" name="japanese" />
          <InputExample label="English" name="english" />
          <InputExample label="Romaji" name="romaji" />
          <Field orientation={"horizontal"}>
            <Button type="submit" className="font-medium" size={"lg"}>
              Save
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </fieldset>
  );
}

const InputExample = ({ label, name }: { label: string; name: string }) => {
  const id = useId();
  return (
    <Field>
      <InputGroup>
        <InputGroupInput id={id} name={name} />
        <InputGroupAddon>
          <InputGroupText>{label}</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
};
