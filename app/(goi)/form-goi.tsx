"use client";

import { ChangeEvent, SubmitEvent, useRef, useState } from "react";
import { removeGoiAction, saveGoiAction, updateGoiAction } from "./actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { Vocabulary } from "@/db/schema";

type Props = {
  word?: Vocabulary;
};

export default function FormGoi({ word }: Props) {
  const kanjiInputRef = useRef<HTMLInputElement>(null);

  const [formState, setFormState] = useState({
    kanji: word ? word.kanji : "",
    furigana: word ? (word.furigana ?? "") : "",
    meaning: word ? (word.meaning ?? "") : "",
  });

  const router = useRouter();

  const { execute, isPending } = useAction(saveGoiAction, {
    onSuccess: ({ data: { message } }) => {
      setFormState({
        furigana: "",
        kanji: "",
        meaning: "",
      });
      if (word) {
        router.replace("/");
      }
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
    onSettled: () => {
      setTimeout(() => {
        kanjiInputRef.current?.focus();
      }, 150);
    },
  });

  const updateGoiActionWithBind = updateGoiAction.bind(null, word?.id ?? "");
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
    if (word) {
      executeUpdateAction(new FormData(e.currentTarget));
    } else {
      execute(new FormData(e.currentTarget));
    }
  };

  const { execute: executeRemoveWord, isPending: isPendingRemoveWord } =
    useAction(removeGoiAction, {
      onSuccess: ({ data: { message } }) => {
        router.replace("/");
        toast.success(message);
      },
    });

  return (
    <fieldset disabled={isPending || isPendingUpdate}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full h-24 gap-1 rounded-xl overflow-hidden"
      >
        <div className="h-full flex-1">
          <input
            ref={kanjiInputRef}
            autoComplete="off"
            type="text"
            name="kanji"
            value={formState.kanji}
            onChange={handleChange}
            placeholder="漢字"
            className="outline-none border-none h-full text-5xl px-4 bg-foreground/20 box-border w-full"
          />
        </div>
        <div className="flex flex-1 flex-col h-full gap-y-1">
          <input
            autoComplete="off"
            type="text"
            name="furigana"
            value={formState.furigana}
            onChange={handleChange}
            placeholder="ふりがな"
            className="outline-none border-none text-base h-full px-3 bg-foreground/20 w-full box-border"
          />
          <input
            autoComplete="off"
            type="text"
            name="meaning"
            value={formState.meaning}
            onChange={handleChange}
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
          {word && (
            <button
              disabled={isPendingRemoveWord}
              type="button"
              onClick={() => executeRemoveWord({ id: word.id })}
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
