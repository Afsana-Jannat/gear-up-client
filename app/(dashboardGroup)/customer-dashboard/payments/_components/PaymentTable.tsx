'use client';

import { Payment } from '@/types/payment';

import PaymentRow from './PaymentRow';

type Props = {
  payments: Payment[];
};

export default function PaymentTable({ payments }: Props) {
  if (payments.length === 0) {
    return (
      <div
        className="
          rounded-3xl
          border
          py-20
          text-center
        "
      >
        <h3 className="text-2xl font-bold">No payment history</h3>

        <p className="mt-3 text-muted-foreground">
          Your completed and pending payments will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {payments.map((payment) => (
        <PaymentRow key={payment.id} payment={payment} />
      ))}
    </div>
  );
}
