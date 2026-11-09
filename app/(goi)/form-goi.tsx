"use client";

import { ChangeEvent, SubmitEvent, useRef, useState } from "react";
import { saveGoiAction } from "./action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { Vocabulary } from "@/db/schema";

type Props = {
  word?: Vocabulary;
};

export default function FormGoi({ word }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  const kanjiInputRef = useRef<HTMLInputElement>(null);

  const [formState, setFormState] = useState({
    kanji: word ? word.kanji : "",
    furigana: word ? (word.furigana ?? "") : "",
    meaning: word ? (word.meaning ?? "") : "",
  });

  const router = useRouter();

  const { execute, isPending } = useAction(saveGoiAction, {
    onSuccess: ({ data: { message } }) => {
      formRef.current?.reset();

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
      // given a short delay until DOM finish re-render
      setTimeout(() => {
        kanjiInputRef.current?.focus();
      }, 150);
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
    execute(new FormData(e.currentTarget));
  };

  return (
    <fieldset disabled={isPending}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full h-30 gap-1 rounded-xl overflow-hidden"
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
        <div className="flex items-center h-full gap-x-1">
          <button
            type="submit"
            className="bg-rose-500 font-medium hover:bg-rose-700 transition-all ease-linear duration-200 text-background hover:text-white h-full w-15"
          >
            保存
          </button>
          {/*{kanji && (
                <button
                  type="button"
                  onClick={removeKanji}
                  className="bg-amber-500 font-medium hover:bg-amber-700 transition-all ease-linear duration-200 text-background hover:text-white h-full w-full"
                >
                  削除
                </button>
              )}*/}
        </div>
      </form>
    </fieldset>
  );
}
