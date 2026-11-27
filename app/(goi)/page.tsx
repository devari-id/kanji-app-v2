import AppPagination from "@/components/app-pagination";
import { SearchParams } from "@/types";
import { Suspense } from "react";
import DialogForm from "./dialog-add-tango";
import { GoiItem } from "./goi-item";
import { getAllVocabs } from "./queries";
import InputLimit from "./input-limit";

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
    <div className="flex flex-col h-full flex-1">
      <div className="mb-4 flex items-center justify-between px-4">
        {/* <div className="border w-max">
          <InputLimit />
        </div> */}
        <div className="flex-1">
          <AppPagination data={pagination} />
        </div>
        {/* <div className="w-max flex-none border">Total: {pagination.total}</div> */}
      </div>
      <div className="flex flex-wrap gap-x-4 px-2 items-center flex-1">
        <div className="p-4">
          <DialogForm />
        </div>
        {data.map((e, i) => (
          <GoiItem item={e} key={e.id ?? i} />
        ))}
      </div>
    </div>
  );
}
