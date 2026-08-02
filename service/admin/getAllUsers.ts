import { cookies } from 'next/headers';

export const getAllUsers = async () => {
  const token = (await cookies()).get('accessToken')?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/admin/users`,
    {
      headers: {
        Authorization: token!,
      },
      cache: 'no-store',
    }
  );

  return res.json();
};
