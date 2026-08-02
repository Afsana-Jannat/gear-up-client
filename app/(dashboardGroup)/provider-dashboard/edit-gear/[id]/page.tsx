import { notFound } from 'next/navigation';

import { getCategories } from '@/service/category/getCategories';
import { getSingleGear } from '@/service/provider/getSingleGear';

import AddGearForm from '../../add-gear/_components/AddGearForm';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditGearPage({ params }: Props) {
  const { id } = await params;

  const [gearResponse, categories] = await Promise.all([
    getSingleGear(id),
    getCategories(),
  ]);

  if (!gearResponse?.success) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-black md:text-4xl">Edit Gear</h1>

        <p className="mt-2 text-muted-foreground">
          Update your gear information.
        </p>
      </section>

      <AddGearForm
        categories={categories}
        initialData={gearResponse.data}
        gearId={id}
        mode="edit"
      />
    </div>
  );
}
