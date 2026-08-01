import { Gear } from '@/types/gear';

type Params = {
  page?: string;
  limit?: string;
  search?: string;
  brand?: string;
  categoryId?: string;
  sortBy?: string;
  sortOrder?: string;
  minPrice?: string;
  maxPrice?: string;
};

export const getAllGears = async (
  params?: Params
): Promise<{
  success: boolean;
  data: Gear[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
}> => {
  const searchParams = new URLSearchParams();

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        searchParams.append(key, value);
      }
    });
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/gears?${searchParams.toString()}`,
    {
      cache: 'no-store',
    }
  );

  return res.json();
};
