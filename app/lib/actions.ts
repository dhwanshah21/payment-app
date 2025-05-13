'use server'

import { z } from 'zod'
import { user } from './placeholder-data';
import { randomUUID } from 'crypto';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { PayStatus } from './definitions';
import { getPays, savePays } from './pay-store';


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

    const statusPayment = status === 'pay' ? "paid" : "pending" as PayStatus.Paid | PayStatus.Pending;

    const currentUserId = user.id;

    const senderId = statusPayment === PayStatus.Paid ? currentUserId : contactId;
    const receiverId = statusPayment === PayStatus.Pending ? currentUserId : contactId;

    const newPay = {
        id: randomUUID().toString(),
        contactId: contactId,
        amount: amountInCents,
        status: statusPayment as PayStatus.Paid | PayStatus.Pending,
        note: note,
        timestamp: date,
        senderId,
        receiverId,
    }

    console.log('Payment created:', newPay.id);

    let pays = await getPays();
    pays.unshift(newPay);
    await savePays(pays);

    revalidatePath('/dashboard/pays');
    revalidatePath('/dashboard');
    redirect('/dashboard/pays');
}


const UpdatePay = FormSchema.omit({ date: true });

export async function updatePay( id: string, formData: FormData) {
    let pays = await getPays();
    const existingPay = pays.find(pay => pay.id === id);
    
    if (!existingPay) {
        throw new Error('Payment not found');
    }
    
    // Only allow editing of pending payments
    if (existingPay.status !== 'pending') {
        console.error('Cannot edit a payment that is already paid');
        redirect('/dashboard/pays');
    }
    
    const { contactId, amount, status, note } = UpdatePay.parse({
        id: id,
        contactId: formData.get('contactId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
        note: formData.get('note'),
    });

    // Convert amount to cents
    const amountInCents = amount * 100;
    
    const payIndex = pays.findIndex(pay => pay.id === id);
    
    // Determine sender and receiver based on status
    const currentUserId = user.id;

    const statusPayment = status === 'pay' ? "paid" : "pending" as PayStatus.Paid | PayStatus.Pending;

    const senderId = statusPayment === PayStatus.Paid ? currentUserId : contactId;
    const receiverId = statusPayment === PayStatus.Pending ? currentUserId : contactId;

    // Update the pay
    pays[payIndex] = {
        ...pays[payIndex],
        senderId,
        receiverId,
        amount: amountInCents,
        status: status as PayStatus.Pending | PayStatus.Paid,
        note: note,
    };

    await savePays(pays);

    console.log('Payment updated:', pays[payIndex].id);

    revalidatePath('/dashboard/pays');
    revalidatePath('/dashboard');
    redirect('/dashboard/pays');
}

export async function deletePay(id: string) {
    // Find the pay to delete
    let pays = await getPays();
    const payIndex = pays.findIndex(pay => pay.id === id);
    
    if (payIndex === -1) {
      throw new Error('Payment not found');
    }
    
    // Only allow deletion of pending payments
    if (pays[payIndex].status !== 'pending') {
      console.error('Cannot delete a payment that is already paid');
      redirect('/dashboard/pays');
    }
    
    // Remove the pay from the array
    pays.splice(payIndex, 1);

    await savePays(pays);
    
    console.log('Payment deleted:', id);
    
    revalidatePath('/dashboard/pays');
    revalidatePath('/dashboard');
    redirect('/dashboard/pays');
  }