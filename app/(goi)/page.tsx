import AppPagination from "@/components/app-pagination";
import { SearchParams } from "@/types";
import { Suspense } from "react";
import DialogForm from "./dialog-add-tango";
import { GoiItem } from "./goi-item";
import { getAllVocabs } from "./queries";

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <Suspense>
      <SusGoi sp={searchParams} />
    </Suspense>
  );
}

async function SusGoi({ sp }: { sp: SearchParams }) {
  const { page } = await sp;
  const normalizedPage = Number(typeof page === "string" ? page : 1);
  const { data, pagination } = await getAllVocabs({ page: normalizedPage });

  return (
    <div className="flex flex-col h-full my-8 flex-1">
      <div className="flex flex-wrap gap-x-8 px-2 items-center flex-1 mb-8">
        <div className="p-4">
          <DialogForm />
        </div>
        {data.map((e, i) => (
          <GoiItem item={e} key={e.id ?? i} />
        ))}
      </div>
      <AppPagination data={pagination} />
    </div>
  );
}
