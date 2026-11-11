"use client";

import { Vocabulary } from "@/db/schema";
import { JapaneseExample } from "@/lib/gemini-service";
import { useState } from "react";
import toast from "react-hot-toast";
import { generateExampleAction } from "./actions";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/utils";
import ExampleAccordion from "./example-accordion";

export default function GenerateExampleWithGeminiButton({
  word,
}: {
  word: Vocabulary;
}) {
  const [examples, setExamples] = useState<JapaneseExample[]>([]);
  const [loading, setLoading] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const generateExamples = async () => {
    try {
      setLoading(true);
      const { data, serverError } = await generateExampleAction({
        word: word.kanji,
      });
      if (serverError) {
        toast.error(serverError);
      }
      if (data) {
        console.log({ data });
        setDisabled(true);
        setExamples(data);
      }
    } catch (err) {
      console.log(err);
      toast.error("fail to generate example");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center flex-col gap-y-4 w-max mx-auto p-4">
      <button
        disabled={loading || isDisabled}
        onClick={generateExamples}
        className={cn(
          "bg-blue-700 hover:bg-blue-800 font-medium flex items-center disabled:bg-blue-800 rounded-xl px-4 py-2",
          loading ? "cursor-wait" : "",
        )}
      >
        <div className="flex flex-col">
          <span className="font-semibold">ゲミニAIで例文を作る</span>
          <span>Generate Example With Gemini</span>
        </div>
        {loading && <Spinner className="ml-2" />}
      </button>
      <ExampleAccordion
        isEnabledSavedbutton
        vocabId={word.id}
        examples={examples}
      />
    </div>
  );
}
