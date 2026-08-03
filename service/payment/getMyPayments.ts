import { cookies } from 'next/headers';

import { Payment } from '@/types/payment';

export const getMyPayments = async (): Promise<Payment[]> => {
  const token = (await cookies()).get('accessToken')?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/payments`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  );

  const result = await res.json();

  return result.data ?? [];
};
