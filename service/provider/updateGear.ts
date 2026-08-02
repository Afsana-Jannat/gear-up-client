'use server';

import { cookies } from 'next/headers';

import { GearSchema } from '@/lib/validations/gear.schema';

export const updateGear = async (id: string, payload: GearSchema) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get('accessToken')?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/gears/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return res.json();
};
