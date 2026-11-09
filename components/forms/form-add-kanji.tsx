"use client";

import { deleteBasicKanji, saveBasicKanji } from "@/actions/kanji-actions";
import { ChangeEvent, useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { initialState } from "./init-state";
import { KanjiItem } from "@/db/schema";
import { useRouter } from "next/navigation";

export default function FormAddKanji({ kanji }: { kanji?: KanjiItem }) {
  const router = useRouter();

  const [state, action, pending] = useActionState(saveBasicKanji, initialState);

  const [formState, setFormState] = useState({
    kanji: kanji?.kanji ?? "",
    kunyomi: kanji?.kunyomi ?? "",
    onyomi: kanji?.onyomi ?? "",
    meaning: kanji?.meaning ?? "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (state.isSuccess) {
      toast.success(state.message);
      router.push("/basic-kanji");
    }
    if (!state.isSuccess && state.message !== "") {
      toast.error(state.message);
    }
    // eslint-disable-next-line
  }, [state]);

  const removeKanji = async () => {
    if (!kanji) {
      toast.error("cannot delete kanji");
      return;
    }
    const { isSuccess } = await deleteBasicKanji(kanji.id);
    if (isSuccess) {
      toast.success("deleted");
      router.replace("/basic-kanji");
    } else {
      toast.error("fail to delete");
    }
  };

  return (
    <fieldset disabled={pending}>
      <form
        action={action}
        className="flex w-full h-30 gap-1 rounded-xl overflow-hidden"
      >
        <div className="h-full flex-2">
          <input
            type="text"
            name="kanji"
            value={formState.kanji}
            onChange={handleChange}
            placeholder="kanji"
            className="outline-none border-none h-full text-4xl px-4 bg-foreground/20 box-border w-full"
          />
        </div>

        <div className="flex flex-col h-full gap-y-1">
          <input
            type="text"
            name="kunyomi"
            value={formState.kunyomi}
            onChange={handleChange}
            placeholder="kunyomi"
            className="outline-none border-none text-base h-full px-3 bg-foreground/20 w-full box-border"
          />
          <input
            type="text"
            name="onyomi"
            value={formState.onyomi}
            onChange={handleChange}
            placeholder="onyomi"
            className="outline-none border-none text-base h-full px-3 bg-foreground/20 w-full box-border"
          />
        </div>

        <div className="flex flex-col h-full gap-y-1">
          <input
            type="text"
            name="meaning"
            value={formState.meaning}
            onChange={handleChange}
            placeholder="meaning"
            className="outline-none border-none text-base flex-1 px-3 bg-foreground/20 w-full box-border"
          />
          <div className="shrink-0 flex-1">
            <div className="flex items-center h-full gap-x-1">
              <button
                type="submit"
                className="bg-rose-500 font-medium hover:bg-rose-700 transition-all ease-linear duration-200 text-background hover:text-white h-full w-full"
              >
                Save
              </button>
              {kanji && (
                <button
                  type="button"
                  onClick={removeKanji}
                  className="bg-amber-500 font-medium hover:bg-amber-700 transition-all ease-linear duration-200 text-background hover:text-white h-full w-full"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </fieldset>
  );
}
