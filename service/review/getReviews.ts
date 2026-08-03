import { Review } from '@/types/review';

export const getReviews = async (): Promise<Review[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/reviews`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const result = await res.json();

  return result.data ?? [];
};
