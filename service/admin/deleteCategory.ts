import { cookies } from 'next/headers';

export const deleteCategory = async (id: string) => {
  const token = (await cookies()).get('accessToken')?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/categories/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: token || '',
      },
      cache: 'no-store',
    }
  );

  return res.json();
};
