import { getAllRentals } from '@/service/admin/getAllRentals';

import RentalTable from './_components/RentalTable';

export default async function AdminRentalsPage() {
  const result = await getAllRentals();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black">All Rentals</h2>

        <p className="mt-2 text-muted-foreground">
          Monitor every rental order across the platform.
        </p>
      </div>

      <RentalTable rentals={result.data ?? []} />
    </div>
  );
}
