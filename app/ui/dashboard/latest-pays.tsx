import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestPay, Pay } from '@/app/lib/definitions';
import { fetchLatestPays } from "@/app/lib/data";
import { user } from '@/app/lib/placeholder-data';
import { formatCurrency } from '@/app/lib/utils';
export default async function LatestPays() {
  const latestPays: LatestPay[] = await fetchLatestPays(user.id);

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Pays
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">

        <div className="bg-white px-6">
          {latestPays.map((pay, i) => {
            return (
              <div
                key={pay.id}
                className={clsx(
                  'grid grid-cols-12 items-center py-4 gap-4',
                  { 'border-t': i !== 0 }
                )}
              >
                <div className="col-span-6 flex items-center">
                  <Image
                    src={pay.image_url}
                    alt={`${pay.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {pay.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {pay.email}
                    </p>
                  </div>
                </div>
                <div className="col-span-3 hidden sm:flex items-center text-sm text-gray-500">
                  {pay.note}
                </div>
                <p className={clsx(
                  `${lusitana.className} col-span-3 text-right truncate text-sm font-medium md:text-base`,
                  {
                    'text-green-600': pay.direction === 'Incoming',
                    'text-red-600': pay.direction === 'Outgoing',
                  }
                )}>
                  {formatCurrency(pay.amount)}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
