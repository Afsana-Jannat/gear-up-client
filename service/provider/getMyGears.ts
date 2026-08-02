import { cookies } from 'next/headers';

export const getMyGears = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get('accessToken')?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/provider/gears`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  return res.json();
};
