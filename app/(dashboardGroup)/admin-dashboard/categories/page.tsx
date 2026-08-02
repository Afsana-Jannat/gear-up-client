import { getAllCategories } from '@/service/admin/getAllCategories';
import CategoryTable from './_components/CategoryTable';

export default async function AdminCategoryPage() {
  const categories = await getAllCategories();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-black">Category Management</h2>

        <p className="text-muted-foreground">Manage all gear categories.</p>
      </div>

      <CategoryTable categories={categories.data} />
    </div>
  );
}
