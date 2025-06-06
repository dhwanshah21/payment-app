import Pagination from '@/app/ui/pays/pagination';
import { fetchPaysPages } from "@/app/lib/data";
import Search from '@/app/ui/search';
import Table from '@/app/ui/pays/table';
import { CreatePay } from '@/app/ui/pays/buttons';
import { lusitana } from '@/app/ui/fonts';
import { PaysTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import StatusFilter from '@/app/ui/status-filter';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
        status?: string;
    }
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const status = searchParams?.status || 'all';

    const totalPages = await fetchPaysPages(query, status);

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