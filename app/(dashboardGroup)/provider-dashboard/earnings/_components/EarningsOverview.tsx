'use client';

import { Wallet, Package, CheckCircle2, Clock3 } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Props = {
  data: {
    summary: {
      totalEarnings: number;
      completedRentals: number;
      pendingPayments: number;
      totalGears: number;
    };

    recentPayments: any[];
  };
};

export default function EarningsOverview({ data }: Props) {
  const { summary, recentPayments } = data;

  const cards = [
    {
      title: 'Total Earnings',
      value: `৳${summary.totalEarnings.toLocaleString()}`,
      icon: Wallet,
    },
    {
      title: 'Total Gears',
      value: summary.totalGears,
      icon: Package,
    },
    {
      title: 'Completed Rentals',
      value: summary.completedRentals,
      icon: CheckCircle2,
    },
    {
      title: 'Pending Payments',
      value: summary.pendingPayments,
      icon: Clock3,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title} className="rounded-3xl border-0 shadow-sm">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-muted-foreground">{card.title}</p>

                <h3 className="mt-2 text-3xl font-black">{card.value}</h3>
              </div>

              <div className="rounded-2xl bg-primary/10 p-4">
                <card.icon className="h-7 w-7 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Payments */}

      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
        </CardHeader>

        <CardContent>
          {recentPayments.length === 0 ? (
            <div className="py-16 text-center text-muted-foreground">
              No payment history found.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Gear</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {recentPayments.map((item: any) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">
                      {item.customer.name}
                    </TableCell>

                    <TableCell>{item.gear.name}</TableCell>

                    <TableCell>
                      ৳
                      {item.payment
                        ? Number(item.payment.amount).toLocaleString()
                        : '0'}
                    </TableCell>

                    <TableCell>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          item.payment?.status === 'COMPLETED'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {item.payment?.status ?? 'PENDING'}
                      </span>
                    </TableCell>

                    <TableCell>
                      {new Date(item.createdAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
