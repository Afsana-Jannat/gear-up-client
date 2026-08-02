'use server';

import { cookies } from 'next/headers';

export const getSingleGear = async (id: string) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get('accessToken')?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/gears/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-store',
  });

  return res.json();
};
