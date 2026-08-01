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
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rentalOrderId,
        method: 'STRIPE',
      }),
    }
  );

  const data = await res.json();

  console.log('Payment Response:', data);

  return data;
};
