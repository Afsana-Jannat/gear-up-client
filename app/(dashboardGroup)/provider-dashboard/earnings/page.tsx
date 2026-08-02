import { getProviderEarnings } from '@/service/provider/getProviderEarnings';
import EarningsOverview from './_components/EarningsOverview';

export default async function EarningsPage() {
  const result = await getProviderEarnings();

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-black md:text-4xl">Earnings</h1>

        <p className="mt-2 text-muted-foreground">
          Track your earnings and payment history.
        </p>
      </section>

      <EarningsOverview data={result.data} />
    </div>
  );
}
