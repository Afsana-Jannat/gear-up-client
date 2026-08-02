'use server';

import { revalidatePath } from 'next/cache';

import { updateCategory } from '@/service/admin/updateCategory';

export async function updateCategoryAction(
  id: string,
  data: {
    name: string;
    description?: string;
    image?: string;
  }
) {
  const result = await updateCategory(id, data);

  if (result.success) {
    revalidatePath('/admin-dashboard/categories');
  }

  return result;
}
