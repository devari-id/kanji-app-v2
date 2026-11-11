import { SearchParams } from "@/types";
import { Suspense } from "react";
import ExampleAccordion from "./example-accordion";
import FormGoi from "./form-goi";
import GenerateExampleWithGeminiButton from "./generate-example-button";
import { GoiItem } from "./goi-item";
import { getAllVocabs, getWordById, getWordExamples } from "./queries";

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const vocabs = await getAllVocabs();
  return (
    <div className="my-4 space-y-8">
      <Suspense fallback={<p>loading...</p>}>
        <SuspenseForm sp={searchParams} />
        <SuspenseExample sp={searchParams} />
        <SuspenseGenerateButton sp={searchParams} />
      </Suspense>
      <div className="flex flex-wrap gap-4 border-foreground/20">
        {vocabs.map((e, i) => (
          <GoiItem item={e} key={i} />
        ))}
      </div>
    </div>
  );
}

async function SuspenseExample({ sp }: { sp: SearchParams }) {
  const { id } = await sp;
  const word = id ? await getWordById(id as string) : undefined;
  const examples = id ? await getWordExamples(id as string) : undefined;

  if (!id) {
    return null;
  }
  if (!word) {
    return <p>word not found</p>;
  }
  if (!examples) return null;

  return (
    <div className="flex justify-center">
      <ExampleAccordion
        key={typeof id === "string" ? id : undefined}
        examples={examples}
        vocabId={id as string}
      />
    </div>
  );
}

async function SuspenseGenerateButton({ sp }: { sp: SearchParams }) {
  const { id } = await sp;
  const word = id ? await getWordById(id as string) : undefined;

  if (!id) {
    return null;
  }

  if (!word) {
    return <p>word not found</p>;
  }

  return (
    <GenerateExampleWithGeminiButton
      key={typeof id === "string" ? id : undefined}
      word={word}
    />
  );
}

async function SuspenseForm({ sp }: { sp: SearchParams }) {
  const { id } = await sp;
  const word = id ? await getWordById(id as string) : undefined;

  return <FormGoi key={typeof id === "string" ? id : undefined} word={word} />;
}
