import { cookies } from 'next/headers';

export const createCategory = async (payload: {
  name: string;
  description?: string;
  image?: string;
}) => {
  const token = (await cookies()).get('accessToken')?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
    method: 'POST',
    headers: {
      Authorization: token || '',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return res.json();
};
