import { RentalRequest } from '@/types/rental-request';
import { cookies } from 'next/headers';

export async function getRentalRequests(): Promise<RentalRequest[]> {
  const token = (await cookies()).get('accessToken')?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/provider/orders`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  );

  const result = await res.json();

  return result.data ?? [];
}
