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
    <Accordion multiple className="max-w-max text-xl">
      {updatedExamples.map(
        ({ english, indonesian, japanese, romaji, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-xl">
              {indonesian}
            </AccordionTrigger>
            <AccordionContent className="text-xl">
              <div className="text-2xl font-mincho">{japanese}</div>
              <div>{english}</div>
              <div>{romaji}</div>
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
