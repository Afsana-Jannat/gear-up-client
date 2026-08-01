import { getCategories } from '@/service/category/getCategories';

import CategoriesHeader from './_components/CategoriesHeader';
import CategoryGridCard from './_components/CategoryGridCard';

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <section className="container mx-auto py-14">
      <CategoriesHeader total={categories.length} />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryGridCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
