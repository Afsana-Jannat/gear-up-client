import { cookies } from 'next/headers';

export const updateRentalStatus = async (rentalId: string, status: string) => {
  const token = (await cookies()).get('accessToken')?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/provider/orders/${rentalId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token!,
      },
      body: JSON.stringify({
        status,
      }),
    }
  );

  return res.json();
};
