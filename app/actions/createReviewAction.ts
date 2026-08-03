'use server';

import { revalidatePath } from 'next/cache';

import { createReview } from '@/service/review/createReview';

export async function createReviewAction(data: {
  rentalOrderId: string;
  gearId: string;
  rating: number;
  comment?: string;
}) {
  const result = await createReview(data);

  if (result.success) {
    revalidatePath('/customer-dashboard/rentals');
  }

  return result;
}
