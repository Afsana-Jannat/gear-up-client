'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';

import { RentalOrder } from '@/types/rental';

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Props = {
  rentals: RentalOrder[];
};

export default function RentalTable({ rentals }: Props) {
  const [search, setSearch] = useState('');

  const filteredRentals = useMemo(() => {
    return rentals.filter(
      (rental) =>
        rental.customer.name.toLowerCase().includes(search.toLowerCase()) ||
        rental.gear.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [rentals, search]);

  return (
    <div className="space-y-6">
      <div className="relative max-w-md">
        <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />

        <Input
          placeholder="Search customer or gear..."
          className="pl-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-hidden rounded-3xl border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Gear</TableHead>
              <TableHead>Rental</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredRentals.map((rental) => (
              <TableRow key={rental.id}>
                <TableCell>
                  <div>
                    <p className="font-semibold">{rental.customer.name}</p>

                    <p className="text-xs text-muted-foreground">
                      {rental.customer.email}
                    </p>
                  </div>
                </TableCell>

                <TableCell>{rental.gear.name}</TableCell>

                <TableCell>
                  <div className="text-sm">
                    <p>{new Date(rental.startDate).toLocaleDateString()}</p>

                    <p className="text-muted-foreground">
                      {new Date(rental.endDate).toLocaleDateString()}
                    </p>
                  </div>
                </TableCell>

                <TableCell>৳{rental.totalAmount}</TableCell>

                <TableCell>
                  <Badge>{rental.status}</Badge>
                </TableCell>

                <TableCell>
                  <Badge
                    variant={
                      rental.payment?.status === 'COMPLETED'
                        ? 'default'
                        : 'secondary'
                    }
                  >
                    {rental.payment?.status ?? 'UNPAID'}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}

            {!filteredRentals.length && (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="py-10 text-center text-muted-foreground"
                >
                  No rentals found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
