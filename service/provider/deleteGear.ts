import { cookies } from 'next/headers';

export const deleteGear = async (id: string) => {
  const token = (await cookies()).get('accessToken')?.value;
  console.log('DELETE TOKEN:', token);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/gears/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.json();
};
