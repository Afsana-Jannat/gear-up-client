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

import { Rental } from '@/types/rental';

type Props = {
  rentals: Rental[];
};

export default function RecentRentals({ rentals }: Props) {
  return (
    <Card className="overflow-hidden rounded-3xl">
      <div className="flex flex-col gap-4 border-b p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold">Recent Rentals</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Your latest rental activity
          </p>
        </div>

        <Link
          href="/customer-dashboard/rentals"
          className="inline-flex items-center gap-2 font-medium text-primary transition hover:gap-3"
        >
          View All
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Desktop */}
      <div className="hidden overflow-x-auto lg:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Gear</TableHead>

              <TableHead>Rental Period</TableHead>

              <TableHead>Total</TableHead>

              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {rentals.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="py-12 text-center text-muted-foreground"
                >
                  No rentals found.
                </TableCell>
              </TableRow>
            ) : (
              rentals.map((rental) => (
                <TableRow key={rental.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          rental.gear.image ||
                          'https://placehold.co/80x80?text=Gear'
                        }
                        alt={rental.gear.name}
                        className="h-14 w-14 rounded-xl border object-cover"
                      />

                      <div>
                        <p className="font-semibold">{rental.gear.name}</p>

                        <p className="text-xs text-muted-foreground">
                          {rental.gear.brand}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="text-sm">
                      <p>{new Date(rental.startDate).toLocaleDateString()}</p>

                      <p className="text-muted-foreground">
                        {new Date(rental.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell className="font-semibold">
                    ৳{Number(rental.totalAmount).toLocaleString()}
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant={
                        rental.status === 'RETURNED'
                          ? 'default'
                          : rental.status === 'CANCELLED'
                            ? 'destructive'
                            : 'secondary'
                      }
                    >
                      {rental.status.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile */}
      <div className="space-y-4 p-5 lg:hidden">
        {rentals.length === 0 ? (
          <div className="py-10 text-center text-muted-foreground">
            No rentals found.
          </div>
        ) : (
          rentals.map((rental) => (
            <div
              key={rental.id}
              className="rounded-2xl border p-4 transition hover:shadow-md"
            >
              <div className="flex gap-4">
                <img
                  src={
                    rental.gear.image || 'https://placehold.co/80x80?text=Gear'
                  }
                  alt={rental.gear.name}
                  className="h-16 w-16 rounded-xl border object-cover"
                />

                <div className="flex-1">
                  <h4 className="font-bold">{rental.gear.name}</h4>

                  <p className="text-xs text-muted-foreground">
                    {rental.gear.brand}
                  </p>

                  <p className="mt-2 text-sm">
                    ৳{Number(rental.totalAmount).toLocaleString()}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {new Date(rental.startDate).toLocaleDateString()} -{' '}
                    {new Date(rental.endDate).toLocaleDateString()}
                  </p>

                  <Badge
                    className="mt-3"
                    variant={
                      rental.status === 'RETURNED'
                        ? 'default'
                        : rental.status === 'CANCELLED'
                          ? 'destructive'
                          : 'secondary'
                    }
                  >
                    {rental.status.replace('_', ' ')}
                  </Badge>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}
