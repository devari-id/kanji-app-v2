"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Vocabulary } from "@/db/schema";
import { Fragment } from "react/jsx-runtime";
import GenerateExampleWithGeminiButton from "../generate-example-button";
import ExampleAccordion from "../example-accordion";
import { JapaneseExample } from "@/lib/gemini-service";
import FormExample from "./form-example";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  word: Vocabulary;
  examples: JapaneseExample[];
};

export default function TabGoi({ word, examples }: Props) {
  const tabs = [
    {
      value: "",
      label: "Examples",
      content: <ExampleAccordion examples={examples} vocabId={word.id} />,
    },
    {
      value: "create-example-manually",
      label: "Create Example Manually",
      content: <FormExample goiId={word.id} key={word.id} />,
    },
    {
      value: "create-example-automatically",
      label: "Generate Example With AI",
      content: <GenerateExampleWithGeminiButton word={word} key={word.id} />,
    },
  ];

  const pathname = usePathname();
  const router = useRouter();
  const sp = useSearchParams();
  const defaultValue = sp.get("tab") ?? "";

  return (
    <Tabs value={defaultValue} className="w-full">
      <TabsList className="w-full flex items-center justify-center">
        {tabs.map((tab, i) => (
          <Fragment key={i}>
            <TabsTrigger
              onClick={() => router.push(`${pathname}?tab=${tab.value}`)}
              value={tab.value}
            >
              {tab.label}
            </TabsTrigger>
          </Fragment>
        ))}
      </TabsList>
      {tabs.map((tab, i) => (
        <TabsContent key={i} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
