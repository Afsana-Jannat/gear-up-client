import { getProviderOrders } from '@/service/provider/getProviderOrders';
import RentalRequestTable from './_components/RequestTable';

export default async function RentalRequestsPage() {
  const result = await getProviderOrders();

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-black">Rental Requests</h1>

        <p className="mt-2 text-muted-foreground">
          Manage incoming rental requests.
        </p>
      </section>

      <RentalRequestTable rentals={result.data} />
    </div>
  );
}
