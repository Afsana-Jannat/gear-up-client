import { getRentalRequests } from '@/service/provider/getRentalRequest';
import RentalRequestTable from './_components/RequestTable';

export default async function RentalRequestsPage() {
  const rentals = await getRentalRequests();

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-black">Rental Requests</h1>

        <p className="text-muted-foreground mt-2">
          Manage incoming rental requests.
        </p>
      </section>

      <RentalRequestTable rentals={rentals} />
    </div>
  );
}
