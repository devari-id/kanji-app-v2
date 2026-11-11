"use client";

import { saveKanjiAction, updateKanjiAction } from "@/app/kanjis/actions";
import { KanjiItem } from "@/db/schema";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { ChangeEvent, SubmitEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import RemoveKanjiButton from "./remove-kanji-button";

export default function FormAddKanji({ kanji }: { kanji?: KanjiItem }) {
  const router = useRouter();

  const inputKanjiRef = useRef<HTMLInputElement>(null);

  const [formState, setFormState] = useState({
    kanji: kanji?.kanji ?? "",
    kunyomi: kanji?.kunyomi ?? "",
    onyomi: kanji?.onyomi ?? "",
    meaning: kanji?.meaning ?? "",
    note: kanji?.note ?? "",
  });

  const resetFormState = () => {
    setFormState({
      kanji: "",
      kunyomi: "",
      meaning: "",
      note: "",
      onyomi: "",
    });
  };

  const { execute: executeSave, isPending: isPendingSave } = useAction(
    saveKanjiAction,
    {
      onSuccess: ({ data: { message } }) => {
        toast.success(message);
        resetFormState();
      },
      onError: ({ error: { thrownError, validationErrors } }) => {
        if (thrownError) {
          toast.error(thrownError.message);
        }
        if (validationErrors) {
          console.log(validationErrors);
          toast.error("invalid input");
        }
      },
      onSettled: () => {
        setTimeout(() => {
          inputKanjiRef.current?.focus();
        }, 250);
      },
    },
  );

  const updateKanjiActionWithBind = updateKanjiAction.bind(
    null,
    kanji?.id ?? "",
  );
  const { execute: executeUpdate, isPending: isPendingUpdate } = useAction(
    updateKanjiActionWithBind,
    {
      onSuccess: ({ data: { message } }) => {
        toast.success(message);
        resetFormState();
        router.replace("/kanjis");
      },
      onError: ({ error: { thrownError, validationErrors } }) => {
        if (thrownError) {
          toast.error(thrownError.message);
        }
        if (validationErrors) {
          console.log(validationErrors);
          toast.error("kanji id is missing");
        }
      },
      onSettled: () => {
        setTimeout(() => {
          inputKanjiRef.current?.focus();
        }, 250);
      },
    },
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (kanji) {
      executeUpdate(new FormData(e.currentTarget));
    } else {
      executeSave(new FormData(e.currentTarget));
    }
  };

  return (
    <fieldset disabled={isPendingSave || isPendingUpdate}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full h-24 gap-1 rounded-xl overflow-hidden"
      >
        <div className="h-full gap-x-1 flex items-center flex-2">
          <input
            ref={inputKanjiRef}
            type="text"
            name="kanji"
            value={formState.kanji}
            onChange={handleChange}
            placeholder="漢字"
            className="outline-none border-none h-full text-4xl px-4 bg-foreground/20 box-border flex-1"
          />
          <textarea
            placeholder="note"
            name="note"
            value={formState.note}
            onChange={(e) => {
              setFormState({
                ...formState,
                note: e.target.value,
              });
            }}
            className="outline-none border-none h-full p-4 bg-foreground/20 box-border flex-1 resize-none"
          />
        </div>

        <div className="flex flex-col h-full gap-y-1">
          <input
            type="text"
            name="kunyomi"
            value={formState.kunyomi}
            onChange={handleChange}
            placeholder="訓読み"
            className="outline-none border-none text-base h-full px-3 bg-foreground/20 w-full box-border"
          />
          <input
            type="text"
            name="onyomi"
            value={formState.onyomi}
            onChange={handleChange}
            placeholder="音読み"
            className="outline-none border-none text-base h-full px-3 bg-foreground/20 w-full box-border"
          />
        </div>

        <div className="flex flex-col h-full gap-y-1">
          <input
            type="text"
            name="meaning"
            value={formState.meaning}
            onChange={handleChange}
            placeholder="意味"
            className="outline-none border-none text-base flex-1 px-3 bg-foreground/20 w-full box-border"
          />
          <div className="shrink-0 flex-1">
            <div className="flex items-center h-full gap-x-1">
              <button
                type="submit"
                className="bg-rose-500 font-medium hover:bg-rose-700 transition-all ease-linear duration-200 text-background hover:text-white h-full w-full"
              >
                保存
              </button>
              {kanji && <RemoveKanjiButton kanji={kanji} />}
            </div>
          </div>
        </div>
      </form>
    </fieldset>
  );
}
