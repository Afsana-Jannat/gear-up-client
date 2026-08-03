import { cookies } from 'next/headers';

export const updateProviderRentalStatus = async (
  id: string,
  status: string
) => {
  const token = (await cookies()).get('accessToken')?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/provider/orders/${id}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    }
  );

  return res.json();
};
