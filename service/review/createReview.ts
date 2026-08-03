import { cookies } from 'next/headers';

export const createReview = async (data: {
  rentalOrderId: string;
  gearId: string;
  rating: number;
  comment?: string;
}) => {
  const token = (await cookies()).get('accessToken')?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/reviews`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token || '',
      },
      body: JSON.stringify(data),
    }
  );

  return res.json();
};
