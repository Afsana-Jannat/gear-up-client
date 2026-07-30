'use server';

import { cookies } from 'next/headers';

export const getNewAccessToken = async () => {
  const cookieStore = await cookies();

  const refreshToken = cookieStore.get('accessToken')?.value || null;

  if (!refreshToken) {
    return {
      success: false,
      message: 'Refresh token is not found!',
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/auth/refresh-token`,
    {
      method: 'POST',
      headers: {
        Cookie: `refreshToken=${refreshToken}`,
      },
      cache: 'no-cache',
    }
  );

  const result = await res.json();

  console.log(result);

  return result;
};
