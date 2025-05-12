import Form from '@/app/ui/pays/edit-form';
import Breadcrumbs from '@/app/ui/pays/breadcrumbs';
import { fetchContacts, fetchPayById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [pay, contacts] = await Promise.all([
        fetchPayById(id),
        fetchContacts(),
    ]);

    if (!pay) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Pays', href: '/dashboard/pays' },
                    {
                        label: 'Edit Pay',
                        href: `/dashboard/pays/edit/${id}`,
                        active: true
                    },
                ]}
            />
            <Form pay={pay} contacts={contacts} />
        </main>
    );
}