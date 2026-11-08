"use client";

import { useActionState, useEffect, useRef } from "react";
import AutoResizeInput from "../auto-resize-input";
import { saveNewWord } from "@/actions/vocabs-actions";
import toast from "react-hot-toast";
import { initialState } from "./init-state";

export default function FormAddVocab() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [state, action, pending] = useActionState(saveNewWord, initialState);

  useEffect(() => {
    if (state.isSuccess) {
      toast.success(state.message);
      if (inputRef.current) {
        inputRef.current.value = "";
        inputRef.current.focus();
      }
    }
    if (!state.isSuccess && state.message !== "") {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <fieldset disabled={pending}>
      <form action={action}>
        <div
          onClick={() => inputRef.current?.focus()}
          className="border-2 transition-colors duration-200 flex items-center px-4 py-4 ease-linear relative text-4xl min-w-40 max-w-max rounded-xl border-rose-500"
        >
          <AutoResizeInput ref={inputRef} />
          <div className="absolute -bottom-3 right-0 text-xs">
            <button
              type="submit"
              className="transition-colors duration-200 ease-linear bg-foreground hover:bg-rose-500 hover:text-white text-background relative rounded-xl px-2 py-1"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </fieldset>
  );
}
