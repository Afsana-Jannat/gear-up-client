'use server';

import { cookies } from 'next/headers';

export const createRental = async (
  gearId: string,
  startDate: string,
  endDate: string
) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get('accessToken')?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/rentals`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      gearId,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
    }),
  });

  const data = await res.json();

  console.log('Rental API Response:', data);

  return data;
};
