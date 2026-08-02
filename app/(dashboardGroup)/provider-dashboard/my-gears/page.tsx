import { getMyGears } from '@/service/provider/getMyGears';

import GearTable from './_components/GearTable';
import EmptyState from './_components/EmptyState';

export default async function MyGearsPage() {
  const response = await getMyGears();

  const gears = response.data || [];

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-black md:text-4xl">My Gears</h1>

        <p className="mt-2 text-muted-foreground">
          Manage all gears you've listed for rent.
        </p>
      </section>

      {gears.length === 0 ? <EmptyState /> : <GearTable gears={gears} />}
    </div>
  );
}
