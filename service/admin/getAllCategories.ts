import { Category } from '@/types/category';

export const getAllCategories = async (): Promise<{
  success: boolean;
  data: Category[];
}> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/categories`,
    {
      cache: 'no-store',
    }
  );

  return res.json();
};
