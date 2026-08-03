'use client';

import { CheckCircle2, Clock3, CreditCard, RotateCcw } from 'lucide-react';

import { Payment } from '@/types/payment';

type Props = {
  payments: Payment[];
};

export default function PaymentSummary({ payments }: Props) {
  const totalAmount = payments.reduce(
    (sum, payment) => sum + Number(payment.amount),
    0
  );

  const completed = payments.filter(
    (payment) => payment.status === 'COMPLETED'
  ).length;

  const pending = payments.filter(
    (payment) => payment.status === 'PENDING'
  ).length;

  const refunded = payments.filter(
    (payment) => payment.status === 'REFUNDED'
  ).length;

  const cards = [
    {
      title: 'Total Paid',
      value: `৳${totalAmount.toLocaleString()}`,
      icon: CreditCard,
    },
    {
      title: 'Completed',
      value: completed,
      icon: CheckCircle2,
    },
    {
      title: 'Pending',
      value: pending,
      icon: Clock3,
    },
    {
      title: 'Refunded',
      value: refunded,
      icon: RotateCcw,
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              group
              rounded-3xl
              border
              bg-background
              p-6
              shadow-sm
              transition-all
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{card.title}</p>

                <h2 className="mt-3 text-3xl font-black">{card.value}</h2>
              </div>

              <div
                className="
                  rounded-2xl
                  bg-primary/10
                  p-4
                  transition-transform
                  group-hover:scale-110
                "
              >
                <Icon size={28} className="text-primary" />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
