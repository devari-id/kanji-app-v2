import { Suspense } from "react";
import FormGoi from "../form-goi";
import { getWordById } from "../queries";
import { redirect } from "next/navigation";
import TabGoi from "./tab-goi";
import { JapaneseExample } from "@/lib/gemini-service";
import { getWordExamples } from "./queries";

export default async function GoiDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="sticky space-y-4 top-0 z-10 w-full bg-background py-4">
      <Suspense>
        <SusFormEdit params={params} />
      </Suspense>
      <Suspense>
        <SusTabGoiExample params={params} />
      </Suspense>
    </div>
  );
}


async function SusFormEdit({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const goi = await getWordById(id);

  if (!goi) {
    redirect("/");
  } else {
    return <FormGoi key={id} tango={goi} />;
  }
}

async function SusTabGoiExample({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const goi = await getWordById(id);
  if (!goi) {
    redirect("/");
  }

  const storedExamples = await getWordExamples(id);
  const mappedExamples: JapaneseExample[] = storedExamples.map((v) => ({
    english: v.english,
    indonesian: v.indonesian,
    japanese: v.japanese,
    romaji: v.romaji,
  }));

  return <TabGoi tango={goi} key={goi.id} examples={mappedExamples} />;
}
