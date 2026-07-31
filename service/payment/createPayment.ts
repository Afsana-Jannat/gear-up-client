'use server';

import { cookies } from 'next/headers';

export const createPayment = async (rentalOrderId: string) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get('accessToken')?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/payments/create`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify({
        rentalOrderId,
      }),
    }
  );

  return res.json();
};
