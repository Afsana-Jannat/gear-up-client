'use server';

import { createCategory } from '@/service/admin/createCategory';
import { revalidatePath } from 'next/cache';

export async function createCategoryAction(data: {
  name: string;
  description?: string;
  image?: string;
}) {
  const result = await createCategory(data);

  if (result.success) {
    revalidatePath('/admin-dashboard/categories');
  }

  return result;
}
