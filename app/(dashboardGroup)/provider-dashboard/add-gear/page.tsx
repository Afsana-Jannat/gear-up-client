import { getCategories } from '@/service/category/getCategories';

import AddGearForm from './_components/AddGearForm';

export default async function AddGearPage() {
  const categories = await getCategories();

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-black md:text-4xl">Add New Gear</h1>

        <p className="mt-2 text-muted-foreground">
          List a new sports or outdoor gear for rent.
        </p>
      </section>

      <AddGearForm categories={categories} />
    </div>
  );
}
