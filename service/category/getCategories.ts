import { Category } from '@/types/category';

export async function getCategories(): Promise<Category[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  if (!baseUrl) {
    console.error('NEXT_PUBLIC_BACKEND_API_URL is missing.');
    return [];
  }

  try {
    // const response = await fetch(`${baseUrl}/api/categories`, {
    //   method: 'GET',
    //   next: {
    //     revalidate: 3600,
    //   },
    // });

    const response = await fetch(`${baseUrl}/api/categories`, {
      next: {
        revalidate: 0,
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch categories (${response.status})`);
      return [];
    }

    const result = await response.json();

    return Array.isArray(result.data) ? result.data : [];
  } catch (error) {
    console.error('Category fetch error:', error);
    return [];
  }
}
