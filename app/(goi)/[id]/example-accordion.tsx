"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reibun } from "@/db/schema";
import { useState } from "react";
import toast from "react-hot-toast";
import { saveExampleAction } from "../actions";
import { markExampleToExercise } from "./action";

export default function ExampleAccordion({
  examples,
  goiId,
  isEnabledSavedbutton = false,
}: {
  examples: Reibun[];
  goiId: string;
  isEnabledSavedbutton?: boolean;
}) {
  const updatedExamples = examples.map((e, i) => ({
    ...e,
    value: `item-${i}`,
  }));

  const handleMarkExample = async ({
    english,
    id,
    indonesian,
    japanese,
  }: Pick<Reibun, "id" | "english" | "indonesian" | "japanese">) => {
    await markExampleToExercise({
      english,
      id,
      japanese,
      indonesian,
    });
  };

  return (
    <Accordion multiple className="w-full text-xl">
      {updatedExamples.map(
        ({ english, indonesian, japanese, romaji, value, id }, i) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger
              onClick={() =>
                handleMarkExample({
                  english,
                  id,
                  indonesian,
                  japanese,
                })
              }
              className="text-base select-text"
            >
              <span className="pr-4">{i + 1}.</span>
              {indonesian}
            </AccordionTrigger>
            <AccordionContent className="ml-4">
              <div className="text-3xl font-mincho">{japanese}</div>
              <div className="text-muted-foreground">{english}</div>
              <div className="text-muted-foreground">{romaji}</div>
              {isEnabledSavedbutton && (
                <div className="flex items-center gap-x-4 justify-end">
                  <SaveExampleButton
                    data={{ english, indonesian, japanese, romaji }}
                    goiId={goiId}
                  />
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ),
      )}
    </Accordion>
  );
}

function SaveExampleButton({
  data: { english, indonesian, japanese, romaji },
  goiId,
}: {
  data: Pick<Reibun, "english" | "indonesian" | "japanese" | "romaji">;
  goiId: string;
}) {
  const [loading, setLoading] = useState(false);

  const [isDisabed, setDisabled] = useState(false);

  const saveExample = async () => {
    setLoading(true);
    const { data, serverError } = await saveExampleAction({
      english,
      indonesian,
      japanese,
      romaji,
      goiId,
    });
    if (data) {
      toast.success(data.message);
      setDisabled(true);
    }
    if (serverError) {
      toast.error(serverError);
    }
    setLoading(false);
  };

  return (
    <Button
      disabled={isDisabed || loading}
      onClick={saveExample}
      className="font-bold"
    >
      Save
    </Button>
  );
}
