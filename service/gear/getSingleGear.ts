import { Gear } from '@/types/gear';

export const getSingleGear = async (
  id: string
): Promise<{
  success: boolean;
  data: Gear;
}> => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/gears/${id}`, {
    cache: 'no-store',
  });

  return res.json();
};
