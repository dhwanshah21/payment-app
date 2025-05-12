import ClientPage from './clientPage';
import { fetchPaysPages } from '@/app/lib/data';

type SearchParams = {
    searchParams?: {
        query?: string;
        status?: string;
    }
}
export default async function Page({ searchParams } : SearchParams) {
  const query = searchParams?.query || '';
  const status = searchParams?.status || 'all';

  // You can't use usePays() here – but you can pass query values
  const totalPages = await fetchPaysPages(query, status);

  return (
    <ClientPage
      searchParams={searchParams}
      totalPages={totalPages}
    />
  );
}