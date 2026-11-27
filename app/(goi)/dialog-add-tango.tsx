"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { SubmitEvent, useId, useState } from "react";
import toast from "react-hot-toast";
import { saveGoiAction } from "./actions";

export default function DialogForm() {
  const [open, setOpen] = useState(false);

  const { execute, isPending } = useAction(saveGoiAction, {
    onSuccess: ({ data }) => {
      toast.success(data?.message ?? "Saved!");
      setOpen(false);
    },
    onError: ({ error: { thrownError, validationErrors } }) => {
      if (validationErrors) {
        toast.error("Invalid input");
      }
      if (thrownError) {
        toast.error(thrownError.message);
      }
    },
  });

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    execute(new FormData(e.currentTarget));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button size={"icon-lg"}>
            <Plus />
          </Button>
        }
      />
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add new 単語</DialogTitle>
          </DialogHeader>
          <FieldGroup className="my-4">
            <MyInput label="Kanji" name="kanji" placeholder="漢字" />
            <MyInput label="Furigana" name="furigana" placeholder="ふりがな" />
            <MyInput label="Meaning" name="meaning" placeholder="意味" />
          </FieldGroup>
          <DialogFooter>
            <DialogClose
              render={
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              }
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function MyInput({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  const id = useId();
  return (
    <Field>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name} placeholder={placeholder} />
    </Field>
  );
}
