import { getMyRentals } from '@/service/rental/getMyRentals';
import RentalTable from './_components/RentalTable';

export default async function RentalsPage() {
  const rentals = await getMyRentals();

  return (
    <section className="container py-10 w-7xl mx-auto">
      <RentalTable rentals={rentals.data ?? []} />
    </section>
  );
}
