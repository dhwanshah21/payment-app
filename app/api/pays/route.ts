import { NextResponse } from 'next/server';
import { pays } from '@/app/lib/placeholder-data'; // adjust import

export async function GET() {
  return NextResponse.json(pays);
}