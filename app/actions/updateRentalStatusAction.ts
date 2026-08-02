'use server';

import { revalidatePath } from 'next/cache';

import { updateRentalStatus } from '@/service/provider/updateRentalStatus';

export async function updateRentalStatusAction(
  rentalId: string,
  status: string
) {
  const result = await updateRentalStatus(rentalId, status);

  if (result.success) {
    revalidatePath('/provider-dashboard/rental-requests');
  }

  return result;
}
