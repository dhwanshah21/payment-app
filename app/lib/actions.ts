'use server'

import { z } from 'zod'
import { pays, user } from './placeholder-data';
import { randomUUID } from 'crypto';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


const FormSchema = z.object({
    id: z.string(),
    contactId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pay', 'pending']),
    note: z.string(),
    date: z.string(),
});

const CreatePay = FormSchema.omit({ id: true, date: true });

export async function createPay(formData: FormData) {
    const { contactId, amount, status, note } = CreatePay.parse({
        contactId: formData.get('contactId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
        note: formData.get('note'),
    });
    const amountInCents = amount * 100;
    const date = new Date().toISOString();

    const statusPayment = status === 'pay' ? "paid" : "pending" as 'paid' | 'pending';;

    const currentUserId = user.id;

    const senderId = statusPayment === 'paid' ? currentUserId : contactId;
    const receiverId = statusPayment === 'pending' ? currentUserId : contactId;


    const newPay = {
        id: randomUUID().toString(),
        contactId: contactId,
        amount: amountInCents,
        status: statusPayment,
        note: note,
        timestamp: date,
        senderId,
        receiverId,
    }

    console.log('✅ Payment created:', newPay);

    pays.unshift(newPay);

    revalidatePath('/dashboard/pays');
    revalidatePath('/dashboard');
    redirect('/dashboard/pays');
}