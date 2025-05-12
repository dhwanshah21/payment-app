'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePays } from '@/app/PaysContext';

import Search from '@/app/ui/search';
import StatusFilter from '@/app/ui/status-filter';
import Table from '@/app/ui/pays/table';
import Pagination from '@/app/ui/pays/pagination';
import { CreatePay } from '@/app/ui/pays/buttons';
import { PaysTableSkeleton } from '@/app/ui/skeletons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';

type ClientPageProps = {
    searchParams?: {
        query?: string;
        page?: string;
        status?: string;
    }
    totalPages: number;
}
export default function ClientPage({ searchParams, totalPages }: ClientPageProps) {
  const { pays, refreshPays } = usePays();
  const params = useSearchParams();

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const status = searchParams?.status || 'all';

  useEffect(() => {
    const shouldRefetch = params.get('refetch') === 'true';
    
    if (shouldRefetch) {
        const url = new URL(window.location.href);
        url.searchParams.delete('refetch');
        window.history.replaceState({}, '', url.toString());
    }
  }, [refreshPays]);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Pays</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search pays..." />
        <CreatePay />
      </div>
      <div className="mt-4 flex justify-center">
        <StatusFilter />
      </div>
      <Suspense key={query + currentPage + status} fallback={<PaysTableSkeleton />}>
        <Table query={query} currentPage={currentPage} status={status} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}