import { CreditCard } from 'lucide-react';

import { getMyPayments } from '@/service/payment/getMyPayments';

import PaymentTable from './_components/PaymentTable';
import PaymentSummary from './_components/PaymentSummary';

export default async function PaymentHistoryPage() {
  const payments = await getMyPayments();

  return (
    <div className="space-y-10">
      {/* Header */}

      <section>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary/10 p-3">
            <CreditCard className="text-primary" size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-black">Payment History</h1>

            <p className="mt-1 text-muted-foreground">
              View all your rental payments and transaction history.
            </p>
          </div>
        </div>
      </section>

      <PaymentSummary payments={payments} />

      <PaymentTable payments={payments} />
    </div>
  );
}
