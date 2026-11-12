import { SearchParams } from "@/types";
import { Suspense } from "react";
import ExampleAccordion from "./example-accordion";
import FormGoi from "./form-goi";
import GenerateExampleWithGeminiButton from "./generate-example-button";
import { GoiItem } from "./goi-item";
import {
  findVocabsByKanjiComponent,
  getAllVocabs,
  getWordById,
  getWordExamples,
} from "./queries";
import SearchGoiForm from "./search-goi-form";

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className="my-4 space-y-8">
      <SearchGoiForm />
      {/* Setiap runtime API (searchParams) dibaca aman di dalam Suspense */}
      <Suspense fallback={<p>Loading form...</p>}>
        <SuspenseForm sp={searchParams} />
      </Suspense>

      <Suspense fallback={<p>Loading examples...</p>}>
        <SuspenseExample sp={searchParams} />
      </Suspense>

      <Suspense fallback={<p>Loading button...</p>}>
        <SuspenseGenerateExampleButton sp={searchParams} />
      </Suspense>

      <Suspense>
        <SuspenseVocabs sp={searchParams} />
      </Suspense>
    </div>
  );
}

async function SuspenseVocabs({ sp }: { sp: SearchParams }) {
  const { query } = await sp;

  const isNoFilter = !query || typeof query !== "string";

  const vocabs = isNoFilter
    ? await getAllVocabs()
    : await findVocabsByKanjiComponent(query);

  return (
    <div className="flex flex-wrap gap-4 border-foreground/20">
      {vocabs.map((e, i) => (
        <GoiItem item={e} key={e.id ?? i} />
      ))}
    </div>
  );
}

async function SuspenseForm({ sp }: { sp: SearchParams }) {
  const { id } = await sp;
  const word = id ? await getWordById(id as string) : undefined;

  return <FormGoi key={typeof id === "string" ? id : undefined} word={word} />;
}

async function SuspenseExample({ sp }: { sp: SearchParams }) {
  const { id } = await sp;
  const word = id ? await getWordById(id as string) : undefined;
  const examples = id ? await getWordExamples(id as string) : undefined;

  if (!id) return null;
  if (!word) return <p>word not found</p>;
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

async function SuspenseGenerateExampleButton({ sp }: { sp: SearchParams }) {
  const { id } = await sp;
  const word = id ? await getWordById(id as string) : undefined;

  if (!id) return null;
  if (!word) return <p>word not found</p>;

  return (
    <GenerateExampleWithGeminiButton
      key={typeof id === "string" ? id : undefined}
      word={word}
    />
  );
}
