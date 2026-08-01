import { Category } from '@/types/category';
import { getAllGears } from '@/service/gear/getAllGears';
import { getCategories } from '@/service/category/getCategories';

import BrowseHeader from './_components/BrowsHeader';
import BrowseFilterBar from './_components/BrowseFilterBar';
import GearCard from '@/components/home/Gear/GearCard';

export default async function GearPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    brand?: string;
    categoryId?: string;

    minPrice?: string;
    maxPrice?: string;

    page?: string;
    limit?: string;
    sortBy?: string;
    sortOrder?: string;
  }>;
}) {
  const params = await searchParams;

  const [gears, categories] = await Promise.all([
    getAllGears(params),
    getCategories(),
  ]);

  const brands = [...new Set(gears.data.map((gear) => gear.brand))];

  return (
    <section className="container mx-auto w-7xl py-14">
      <BrowseHeader total={gears.data.length} />

      <BrowseFilterBar
        categories={categories}
        brands={brands}
        selectedCategory={params.categoryId}
        selectedBrand={params.brand}
        selectedSort={`${params.sortBy || 'createdAt'}-${params.sortOrder || 'desc'}`}
        minPrice={params.minPrice}
        maxPrice={params.maxPrice}
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {gears.data.map((gear) => (
          <GearCard key={gear.id} gear={gear} />
        ))}
      </div>
    </section>
  );
}
