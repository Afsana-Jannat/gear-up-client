'use client';

import {
  CalendarDays,
  CreditCard,
  ReceiptText,
  CircleCheckBig,
  Clock3,
  XCircle,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';

import { Payment } from '@/types/payment';

type Props = {
  payment: Payment;
};

export default function PaymentRow({ payment }: Props) {
  const completed = payment.status === 'COMPLETED';
  const pending = payment.status === 'PENDING';
  const failed = payment.status === 'FAILED';

  return (
    <div
      className="
        rounded-3xl
        border
        bg-background
        p-6
        shadow-sm
        transition-all
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-bold">
              {payment.rentalOrder.gear.name}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">Transaction ID</p>

            <p className="font-mono text-sm break-all">
              {payment.transactionId}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} />

              <span>{new Date(payment.createdAt).toLocaleDateString()}</span>
            </div>

            <div className="flex items-center gap-2">
              <CreditCard size={16} />

              <span>{payment.method}</span>
            </div>

            <div className="flex items-center gap-2">
              <ReceiptText size={16} />

              <span>{payment.rentalOrder.status}</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <div>
            <p className="text-sm text-muted-foreground">Paid Amount</p>

            <h2 className="text-3xl font-black text-primary">
              ৳{Number(payment.amount).toLocaleString()}
            </h2>
          </div>

          {completed && (
            <Badge className="gap-2 bg-green-600 hover:bg-green-600">
              <CircleCheckBig size={15} />
              Completed
            </Badge>
          )}

          {pending && (
            <Badge variant="secondary" className="gap-2">
              <Clock3 size={15} />
              Pending
            </Badge>
          )}

          {failed && (
            <Badge variant="destructive" className="gap-2">
              <XCircle size={15} />
              Failed
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
