'use server';

import { cookies } from 'next/headers';

export const getMyRentals = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get('accessToken')?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/rentals/my-orders`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  );

  return res.json();
};
