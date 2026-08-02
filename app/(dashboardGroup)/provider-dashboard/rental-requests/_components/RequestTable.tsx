'use client';

import { useTransition } from 'react';
import { toast } from 'sonner';

import { RentalRequest } from '@/types/rental-request';

import { updateRentalStatusAction } from '@/app/actions/updateRentalStatusAction';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Badge } from '@/components/ui/badge';

type Props = {
  rentals: RentalRequest[];
};

export default function RentalRequestTable({ rentals }: Props) {
  const [pending, startTransition] = useTransition();

  const handleStatusChange = (
    rentalId: string,
    status: RentalRequest['status']
  ) => {
    startTransition(async () => {
      const result = await updateRentalStatusAction(rentalId, status);

      if (!result.success) {
        toast.error(result.message);

        return;
      }

      toast.success('Rental status updated');
    });
  };

  return (
    <div className="overflow-hidden rounded-3xl border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Gear</TableHead>

            <TableHead>Customer</TableHead>

            <TableHead>Rental Period</TableHead>

            <TableHead>Total</TableHead>

            <TableHead>Payment</TableHead>

            <TableHead>Status</TableHead>

            <TableHead className="w-[220px]">Update</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rentals.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="py-16 text-center text-muted-foreground"
              >
                No rental requests found.
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
                      className="h-14 w-14 rounded-xl object-cover"
                    />

                    <div>
                      <p className="font-semibold">{rental.gear.name}</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <div>
                    <p className="font-medium">{rental.customer.name}</p>

                    <p className="text-xs text-muted-foreground">
                      {rental.customer.email}
                    </p>
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

                <TableCell>৳{rental.totalAmount}</TableCell>

                <TableCell>
                  <Badge
                    variant={
                      rental.payment?.status === 'COMPLETED'
                        ? 'default'
                        : 'secondary'
                    }
                  >
                    {rental.payment?.status ?? 'Pending'}
                  </Badge>
                </TableCell>

                <TableCell>
                  <Badge>{rental.status}</Badge>
                </TableCell>

                <TableCell>
                  <Select
                    defaultValue={rental.status}
                    onValueChange={(value) =>
                      handleStatusChange(
                        rental.id,
                        value as RentalRequest['status']
                      )
                    }
                    disabled={pending}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="PLACED">PLACED</SelectItem>

                      <SelectItem value="CONFIRMED">CONFIRMED</SelectItem>

                      <SelectItem value="PAID">PAID</SelectItem>

                      <SelectItem value="PICKED_UP">PICKED UP</SelectItem>

                      <SelectItem value="RETURNED">RETURNED</SelectItem>

                      <SelectItem value="CANCELLED">CANCELLED</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
