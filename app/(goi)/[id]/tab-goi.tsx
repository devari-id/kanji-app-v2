"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Vocabulary } from "@/db/schema";
import { JapaneseExample } from "@/lib/gemini-service";
import { OctagonAlert } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment } from "react/jsx-runtime";
import ExampleAccordion from "../example-accordion";
import GenerateExampleWithGeminiButton from "../generate-example-button";
import FormExample from "./form-example";

type Props = {
  word: Vocabulary;
  examples: JapaneseExample[];
};

export default function TabGoi({ word, examples }: Props) {
  const tabs = [
    {
      value: "",
      label: "Examples",
      content:
        examples.length === 0 ? (
          <div className="p-4 text-xl text-muted-foreground font-medium flex items-center gap-x-2">
            <p className="">例文はまだありません</p>
            <OctagonAlert />
          </div>
        ) : (
          <ExampleAccordion examples={examples} vocabId={word.id} />
        ),
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
