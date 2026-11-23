"use client";

import { Goi } from "@/db/schema";
import { useAction } from "next-safe-action/hooks";
import { SubmitEvent, useRef } from "react";
import toast from "react-hot-toast";
import { removeGoiAction, saveGoiAction, updateGoiAction } from "./actions";

type Props = {
  tango?: Goi;
};

export default function FormGoi({ tango }: Props) {
  const kanjiInputRef = useRef<HTMLInputElement>(null);
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
            type="text"
            name="kanji"
            defaultValue={tango?.kanji}
            placeholder="漢字"
            className="outline-none border-none h-full text-5xl px-4 bg-foreground/20 box-border w-full"
          />
        </div>
        <div className="flex flex-1 flex-col h-full gap-y-1">
          <input
            type="text"
            name="furigana"
            defaultValue={tango?.furigana}
            placeholder="ふりがな"
            className="outline-none border-none text-base h-full px-3 bg-foreground/20 w-full box-border"
          />
          <input
            type="text"
            name="meaning"
            defaultValue={tango?.meaning}
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
