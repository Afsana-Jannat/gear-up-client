import { Gear } from '@/types/gear';

type Params = {
  page?: string;
  limit?: string;
  search?: string;
  brand?: string;
  categoryId?: string;

  minPrice?: string;
  maxPrice?: string;

  sortBy?: string;
  sortOrder?: string;
};

export const getAllGears = async (
  params?: Params
): Promise<{
  success: boolean;
  data: Gear[];
}> => {
  const searchParams = new URLSearchParams();

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
  }

  // const res = await fetch(
  //   `${process.env.BACKEND_API_URL}/api/gears?${searchParams.toString()}`,
  //   {
  //     cache: 'no-store',
  //   }
  // );

  const url = `${process.env.BACKEND_API_URL}/api/gears?${searchParams.toString()}`;

  console.log('FETCH URL:', url);

  const res = await fetch(url, {
    cache: 'no-store',
  });

  const data = await res.json();

  console.log('API RESPONSE:', data);

  return data;

  return res.json();
};
