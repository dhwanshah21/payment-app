// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Contact = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export enum PayStatus {
  Pending = 'pending',
  Paid = 'paid',
}

export type Pay = {
  id: string;
  senderId: string;
  receiverId: string;
  amount: number;
  status: 'pending' | 'paid';
  note?: string;
  timestamp: string;
};

export type Activity = {
  month: string;
  activity: number;
};

export type LatestPay = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: number;
  note?: string
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestPayRaw = Omit<LatestPay, 'amount'> & {
  amount: number;
};

export type PaysTable = LatestPay & {
  contact_id: string;
  date: string;
  status: 'pending' | 'paid';
  direction: string;
};

export type ContactsTableType = {
  id: string; 
  name: string;
  email: string;
  image_url: string;
  total_pays: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedContactsTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_pays: number;
  total_pending: string;
  total_paid: string;
};

export type ContactField = {
  id: string;
  name: string;
};

export type PayForm = {
  id: string;
  contact_id: string;
  amount: number; // Amount is number from the form. Store in backend in number?
  note?: string;
  status: 'pending' | 'paid';
};
