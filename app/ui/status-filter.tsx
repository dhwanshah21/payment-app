'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from '@/app/ui/button';
import { PayStatus } from "../lib/definitions";

export default function StatusFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const status = searchParams.get('status') || 'all';

  function handleStatusChange(newStatus: string) {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1'); // Reset pagination when filter changes

    if (newStatus === 'all') {
      params.delete('status');
    } else {
      params.set('status', newStatus);
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="flex rounded-md shadow-sm">
          <Button
            onClick={() => handleStatusChange('all')}
            className={`px-3 py-2 h-8 text-xs rounded-l-md rounded-r-none ${status === 'all' ? 'bg-blue-600 text-white' : '!text-black bg-gray-100 hover:bg-gray-200'}`}
          >
            All
          </Button>
          <Button
            onClick={() => handleStatusChange(PayStatus.Pending)}
            className={`px-3 py-2 h-8 text-xs rounded-none ${status === PayStatus.Pending ? 'bg-blue-600 text-white' : '!text-black bg-gray-100 hover:bg-gray-200'}`}
          >
            Pending
          </Button>
          <Button
            onClick={() => handleStatusChange(PayStatus.Paid)}
            className={`px-3 py-2 h-8 text-xs rounded-r-md rounded-l-none ${status === PayStatus.Paid ? 'bg-blue-600 text-white' : '!text-black bg-gray-100 hover:bg-gray-200'}`}
          >
            Completed
          </Button>
        </div>
      </div>
    </>
  );
}