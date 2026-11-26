"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { TPagination } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  data: TPagination;
};

function getPaginationRange(
  currentPage: number,
  totalPages: number,
): (number | "ellipsis")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Dekat awal: 1 2 3 4 5 ... 12
  if (currentPage <= 3) {
    return [1, 2, 3, 4, 5, "ellipsis", totalPages];
  }

  // Dekat akhir: 1 ... 8 9 10 11 12
  if (currentPage >= totalPages - 2) {
    return [
      1,
      "ellipsis",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  // Di tengah: 1 ... 5 6 7 ... 12
  return [
    1,
    "ellipsis",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis",
    totalPages,
  ];
}

export default function AppPagination({ data }: Props) {
  const sp = useSearchParams();
  const page = Number(sp.get("page") ?? 1);
  const router = useRouter();
  const pathname = usePathname();

  // Helper menjaga query params lain (misal ?search=...&limit=...) agar tidak hilang saat pindah halaman
  const createPageUrl = (targetPage: number) => {
    const params = new URLSearchParams(sp.toString());
    params.set("page", String(targetPage));
    return `${pathname}?${params.toString()}`;
  };

  const totalPages = data.totalPage;
  const pages = getPaginationRange(page, totalPages);

  if (totalPages <= 1) return null;

  return (
    <Pagination>
      <PaginationContent>
        {/* Tombol Previous */}
        <PaginationItem>
          <PaginationPrevious
            href={page > 1 ? createPageUrl(page - 1) : "#"}
            aria-disabled={page <= 1}
            tabIndex={page <= 1 ? -1 : undefined}
            className={page <= 1 ? "pointer-events-none opacity-50" : undefined}
          />
        </PaginationItem>

        {/* Nomor Halaman & Ellipsis */}
        {pages.map((item, idx) =>
          item === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${idx}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <PaginationLink
                href={createPageUrl(item)}
                isActive={item === page}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        {/* Tombol Next */}
        <PaginationItem>
          <PaginationNext
            href={page < totalPages ? createPageUrl(page + 1) : "#"}
            aria-disabled={page >= totalPages}
            tabIndex={page >= totalPages ? -1 : undefined}
            className={
              page >= totalPages ? "pointer-events-none opacity-50" : undefined
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
