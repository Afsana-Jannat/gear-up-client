'use server';

import { updateProviderRentalStatus } from '@/service/provider/updateRentalStatus';
import { revalidatePath } from 'next/cache';

export async function updateRentalStatusAction(
  rentalId: string,
  status: string
) {
  const result = await updateProviderRentalStatus(rentalId, status);

  if (result.success) {
    revalidatePath('/provider-dashboard/rental-requests');
    revalidatePath('/customer-dashboard/rentals');
  }

  return result;
}
