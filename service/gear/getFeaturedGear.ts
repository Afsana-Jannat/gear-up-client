import { Gear } from '@/types/gear';

export const getFeaturedGear = async (): Promise<Gear[]> => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/gears`, {
    next: {
      revalidate: 60,
    },
  });

  const result = await res.json();

  if (!result.success) {
    return [];
  }

  return result.data.slice(0, 8);
};
