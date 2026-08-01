'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const rentals = [
  {
    id: '1',
    gear: 'Mountain Bike',
    start: '12 Jul',
    end: '16 Jul',
    amount: '৳2,500',
    status: 'ACTIVE',
  },
  {
    id: '2',
    gear: 'Camping Tent',
    start: '04 Jul',
    end: '08 Jul',
    amount: '৳1,800',
    status: 'COMPLETED',
  },
  {
    id: '3',
    gear: 'DSLR Camera',
    start: '22 Jun',
    end: '25 Jun',
    amount: '৳3,400',
    status: 'COMPLETED',
  },
];

export default function RecentRentals() {
  return (
    <Card className="rounded-3xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Recent Rentals</h3>

          <p className="text-sm text-muted-foreground">
            Your latest rental activity
          </p>
        </div>

        <Link
          href="/customer-dashboard/rentals"
          className="flex items-center gap-2 text-sm font-semibold text-primary"
        >
          View All
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Gear</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rentals.map((rental) => (
            <TableRow key={rental.id}>
              <TableCell className="font-medium">{rental.gear}</TableCell>

              <TableCell>
                {rental.start} - {rental.end}
              </TableCell>

              <TableCell>{rental.amount}</TableCell>

              <TableCell>
                <Badge
                  variant={rental.status === 'ACTIVE' ? 'default' : 'secondary'}
                >
                  {rental.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
