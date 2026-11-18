"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { JapaneseExample } from "@/lib/gemini-service";
import { saveExampleAction } from "./actions";
import toast from "react-hot-toast";
import { useState } from "react";

type SaveExample = {
  english: string;
  indonesian: string;
  japanese: string;
  romaji: string;
};

export default function ExampleAccordion({
  examples,
  vocabId,
  isEnabledSavedbutton = false,
}: {
  examples: JapaneseExample[];
  vocabId: string;
  isEnabledSavedbutton?: boolean;
}) {
  const updatedExamples = examples.map((e, i) => ({
    ...e,
    value: `item-${i}`,
  }));

  return (
    <Accordion multiple className="w-full text-xl">
      {updatedExamples.map(
        ({ english, indonesian, japanese, romaji, value }, i) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-base select-text">
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
                    vocabId={vocabId}
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
  vocabId,
}: {
  data: SaveExample;
  vocabId: string;
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
      vocabId,
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
