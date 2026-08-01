'use client';

import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
  currentPage: number;
  totalPage: number;
};

export default function Pagination({ currentPage, totalPage }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (totalPage <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('page', page.toString());

    router.push(`/gear?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
        className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPage }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`h-10 w-10 rounded-lg border text-sm font-semibold transition ${
              currentPage === page ? 'bg-primary text-white' : 'hover:bg-muted'
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        disabled={currentPage === totalPage}
        onClick={() => changePage(currentPage + 1)}
        className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}
