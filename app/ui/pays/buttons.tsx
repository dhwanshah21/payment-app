
import { deletePay } from '@/app/lib/actions';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreatePay() {
  return (
    <Link
      href="/dashboard/pays/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Pay</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdatePay({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/pays/edit/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeletePay({ id }: { id: string }) {
  const deletePayWithId = deletePay.bind(null, id);
  
  return (
    <form action={deletePayWithId}>
      <button 
        className="rounded-md border p-2 hover:bg-gray-100"
        type="submit"
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}