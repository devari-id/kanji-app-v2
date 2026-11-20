"use client";

import { ChangeEvent, SubmitEvent, useRef, useState } from "react";
import { removeGoiAction, saveGoiAction, updateGoiAction } from "./actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { Goi } from "@/db/schema";

type Props = {
  tango?: Goi;
};

export default function FormGoi({ tango }: Props) {
  const kanjiInputRef = useRef<HTMLInputElement>(null);

  const [formState, setFormState] = useState({
    kanji: tango ? tango.kanji : "",
    furigana: tango ? (tango.furigana ?? "") : "",
    meaning: tango ? (tango.meaning ?? "") : "",
  });

  const router = useRouter();

  const formRef = useRef<HTMLFormElement>(null);
  const { execute, isPending } = useAction(saveGoiAction, {
    onSuccess: ({ data: { message } }) => {
      kanjiInputRef.current?.focus();
      formRef.current?.reset();
      toast.success(message);
    },
    onError: ({ error: { thrownError, validationErrors } }) => {
      if (validationErrors) {
        toast.error("Invalid input");
      }
      if (thrownError) {
        toast.error(thrownError.message!);
      }
    },
  });

  const updateGoiActionWithBind = updateGoiAction.bind(null, tango?.id ?? "");
  const { execute: executeUpdateAction, isPending: isPendingUpdate } =
    useAction(updateGoiActionWithBind, {
      onSuccess: ({ data: { message } }) => {
        toast.success(message);
      },
      onError: ({ error: { thrownError, serverError, validationErrors } }) => {
        if (thrownError) {
          toast.error(thrownError.message);
        }
        if (serverError) {
          toast.error("Something went wrong. Please try again");
        }
        if (validationErrors) {
          toast.error("Invalid input");
        }
      },
    });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tango) {
      executeUpdateAction(new FormData(e.currentTarget));
    } else {
      execute(new FormData(e.currentTarget));
    }
  };

  const { execute: executeRemovetango, isPending: isPendingRemovetango } =
    useAction(removeGoiAction, {
      onSuccess: ({ data: { message } }) => {
        router.replace("/");
        toast.success(message);
      },
    });

  return (
    <fieldset disabled={isPending || isPendingUpdate}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex w-full h-24 gap-1 rounded-xl overflow-hidden"
      >
        <div className="h-full flex-1">
          <input
            ref={kanjiInputRef}
            autoComplete="off"
            type="text"
            name="kanji"
            defaultValue={tango?.kanji}
            // value={formState.kanji}
            // onChange={handleChange}
            placeholder="漢字"
            className="outline-none border-none h-full text-5xl px-4 bg-foreground/20 box-border w-full"
          />
        </div>
        <div className="flex flex-1 flex-col h-full gap-y-1">
          <input
            autoComplete="off"
            type="text"
            name="furigana"
            defaultValue={tango?.furigana}
            // value={formState.furigana}
            // onChange={handleChange}
            placeholder="ふりがな"
            className="outline-none border-none text-base h-full px-3 bg-foreground/20 w-full box-border"
          />
          <input
            autoComplete="off"
            type="text"
            name="meaning"
            defaultValue={tango?.meaning}
            // value={formState.meaning}
            // onChange={handleChange}
            placeholder="意味"
            className="outline-none border-none text-base h-full px-3 bg-foreground/20 w-full box-border"
          />
        </div>
        <div className="flex flex-col items-center h-full gap-x-1">
          <button
            type="submit"
            className="bg-rose-500 font-medium hover:bg-rose-700 transition-all ease-linear duration-200 text-background hover:text-white h-full w-15"
          >
            保存
          </button>
          {tango && (
            <button
              disabled={isPendingRemovetango}
              type="button"
              onClick={() => executeRemovetango({ id: tango.id })}
              className="bg-amber-500 font-medium hover:bg-amber-700 transition-all ease-linear duration-200 text-background hover:text-white h-full w-full"
            >
              削除
            </button>
          )}
        </div>
      </form>
    </fieldset>
  );
}
