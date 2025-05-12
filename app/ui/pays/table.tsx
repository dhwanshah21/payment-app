import Image from 'next/image';
import { UpdatePay, DeletePay } from '@/app/ui/pays/buttons';
import { fetchFilteredPays } from '@/app/lib/data';
import { PayStatus, type PaysTable } from '@/app/lib/definitions';
import clsx from 'clsx';
import { formatCurrency } from '@/app/lib/utils';

export default async function PaysTable({
  query,
  currentPage,
  status = 'all'
}: {
  query: string;
  currentPage: number;
  status?: string;
}) {
  const pays: PaysTable[] = await fetchFilteredPays(query, currentPage, status);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {pays?.map((pay) => (
              <div
                key={pay.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={pay.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${pay.name}'s profile picture`}
                      />
                      <p>{pay.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{pay.email}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <UpdatePay id={pay.id} />
                    <DeletePay id={pay.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Contact
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Payment Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date & Time
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {pays?.map((pay) => (
                <tr
                  key={pay.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={pay.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${pay.name}'s profile picture`}
                      />
                      <p>{pay.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {pay.email}
                  </td>
                  <td
                    className={clsx(
                      'whitespace-nowrap px-3 py-3 font-medium',
                      {
                        'text-green-600': pay.status === PayStatus.Pending || pay.direction === 'Incoming',
                        'text-red-600': pay.status === PayStatus.Paid && pay.direction === 'Outgoing',
                      }
                    )}
                  >
                    {formatCurrency(pay.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {pay.note === '' ? '-' : pay.note}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {pay.status === PayStatus.Pending ? (
                      <>
                        Requested
                      </>
                    ) : (
                      pay.direction === 'Outgoing' ? (
                        <>
                          Paid
                        </>
                      ) : (
                        <>
                          Received
                        </>
                      ))}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-gray-500">
                    {new Intl.DateTimeFormat('en-US', {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    }).format(new Date(pay.date))}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {pay.status === PayStatus.Pending && (
                        <>
                          <UpdatePay id={pay.id} />
                          <DeletePay id={pay.id} />
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
