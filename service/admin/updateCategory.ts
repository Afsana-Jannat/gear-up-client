import { cookies } from 'next/headers';

export const updateCategory = async (
  id: string,
  data: {
    name: string;
    description?: string;
    image?: string;
  }
) => {
  const token = (await cookies()).get('accessToken')?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/categories/${id}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: token || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      cache: 'no-store',
    }
  );

  return res.json();
};
