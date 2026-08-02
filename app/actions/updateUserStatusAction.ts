'use server';

import { revalidatePath } from 'next/cache';

import { updateUserStatus } from '@/service/admin/updateUserStatus';

export async function updateUserStatusAction(
  id: string,
  status: 'ACTIVE' | 'SUSPENDED'
) {
  const result = await updateUserStatus(id, status);

  if (result.success) {
    revalidatePath('/admin-dashboard/users');
  }

  return result;
}
