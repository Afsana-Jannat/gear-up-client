import { getAllGear } from '@/service/admin/getAllGear';

import GearTable from './_components/GearTable';

export default async function AdminGearPage() {
  const result = await getAllGear();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black">All Gear</h2>

        <p className="mt-2 text-muted-foreground">
          View every gear listed on the platform.
        </p>
      </div>

      <GearTable gears={result.data ?? []} />
    </div>
  );
}
