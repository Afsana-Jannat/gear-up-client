'use client';

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Gear } from '@/types/gear';

import GearRow from './GearRow';

type Props = {
  gears: Gear[];
};

export default function GearTable({ gears }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border bg-background shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Gear</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price / Day</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {gears.map((gear) => (
              <GearRow key={gear.id} gear={gear} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
