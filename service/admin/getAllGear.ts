import { cookies } from 'next/headers';

export const getAllGear = async () => {
  const token = (await cookies()).get('accessToken')?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/admin/gear`,
    {
      headers: {
        Authorization: token || '',
      },
      cache: 'no-store',
    }
  );

  return res.json();
};
