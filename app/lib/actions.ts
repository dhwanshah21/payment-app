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

    const statusPayment = status === 'pay' ? "paid" : "pending" as 'paid' | 'pending';

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

    console.log('Payment created:', newPay);

    pays.unshift(newPay);

    revalidatePath('/dashboard/pays');
    revalidatePath('/dashboard');
    redirect('/dashboard/pays');
}


const UpdatePay = FormSchema.omit({ date: true });

export async function updatePay( id: string, formData: FormData) {
   
    // Find the pay to update first
    pays.forEach(pay => console.log("Pay id is", pay.id, " : ", pay.senderId, " : ", pay.receiverId));

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
    console.log("Amount is", amount);

    // Convert amount to cents
    const amountInCents = amount * 100;
    
    const payIndex = pays.findIndex(pay => pay.id === id);
    
    // Determine sender and receiver based on status
    const currentUserId = user.id;

    const statusPayment = status === 'pay' ? "paid" : "pending" as 'paid' | 'pending';

    const senderId = statusPayment === 'paid' ? currentUserId : contactId;
    const receiverId = statusPayment === 'pending' ? currentUserId : contactId;

    // Update the pay
    pays[payIndex] = {
        ...pays[payIndex],
        senderId,
        receiverId,
        amount: amountInCents,
        status: status as 'pending' | 'paid',
        note: note,
    };

    console.log('Payment updated:', pays[payIndex]);

    revalidatePath('/dashboard/pays');
    revalidatePath('/dashboard');
    redirect('/dashboard/pays');
}

export async function deletePay(id: string) {
    console.log("Delete entry:", id);
    // Find the pay to delete
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
    
    console.log('Payment deleted:', id);
    
    revalidatePath('/dashboard/pays');
    revalidatePath('/dashboard');
    redirect('/dashboard/pays');
  }