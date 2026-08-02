import { cookies } from 'next/headers';

export const updateUserStatus = async (
  id: string,
  status: 'ACTIVE' | 'SUSPENDED'
) => {
  const token = (await cookies()).get('accessToken')?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/admin/users/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        status,
      }),
    }
  );

  return res.json();
};
