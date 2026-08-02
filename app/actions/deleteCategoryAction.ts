'use server';

import { revalidatePath } from 'next/cache';

import { deleteCategory } from '@/service/admin/deleteCategory';

export async function deleteCategoryAction(id: string) {
  const result = await deleteCategory(id);

  if (result.success) {
    revalidatePath('/admin-dashboard/categories');
  }

  return result;
}
