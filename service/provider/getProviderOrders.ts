import { cookies } from 'next/headers';

export const getProviderOrders = async () => {
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

  return res.json();
};
