'use server';

import { revalidatePath } from 'next/cache';

import { deleteGear } from '@/service/provider/deleteGear';

export async function deleteGearAction(id: string) {
  const result = await deleteGear(id);

  if (result.success) {
    revalidatePath('/provider-dashboard/my-gears');
  }

  return result;
}
