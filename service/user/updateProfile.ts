'use server';

import { cookies } from 'next/headers';

export const updateProfile = async (payload: {
  name: string;
  phone: string;
  address: string;
  avatar: string;
}) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get('accessToken')?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/me`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  console.log('UPDATE PROFILE RESPONSE:', result);

  return result;
};
