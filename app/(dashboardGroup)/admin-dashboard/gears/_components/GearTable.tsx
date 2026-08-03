'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';

import { Gear } from '@/types/gear';

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
  gears: Gear[];
};

export default function GearTable({ gears }: Props) {
  const [search, setSearch] = useState('');

  const filteredGears = useMemo(() => {
    return gears.filter(
      (gear) =>
        gear.name.toLowerCase().includes(search.toLowerCase()) ||
        gear.brand.toLowerCase().includes(search.toLowerCase()) ||
        gear.category.name.toLowerCase().includes(search.toLowerCase()) ||
        gear.provider.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [gears, search]);

  return (
    <div className="space-y-6">
      <div className="relative max-w-md">
        <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />

        <Input
          placeholder="Search gear..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="overflow-hidden rounded-3xl border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Gear</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Price/Day</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredGears.map((gear) => (
              <TableRow key={gear.id}>
                <TableCell>
                  <img
                    src={gear.image || 'https://placehold.co/60x60'}
                    alt={gear.name}
                    className="h-14 w-14 rounded-xl object-cover"
                  />
                </TableCell>

                <TableCell>
                  <div>
                    <p className="font-semibold">{gear.name}</p>

                    <p className="text-sm text-muted-foreground">
                      {gear.brand}
                    </p>
                  </div>
                </TableCell>

                <TableCell>{gear.category.name}</TableCell>

                <TableCell>
                  <div>
                    <p>{gear.provider.name}</p>

                    <p className="text-xs text-muted-foreground">
                      {gear.provider.email}
                    </p>
                  </div>
                </TableCell>

                <TableCell>৳{gear.pricePerDay}</TableCell>

                <TableCell>{gear.stock}</TableCell>

                <TableCell>
                  <Badge
                    variant={
                      gear.availability === 'AVAILABLE'
                        ? 'default'
                        : 'secondary'
                    }
                  >
                    {gear.availability}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}

            {filteredGears.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="py-10 text-center text-muted-foreground"
                >
                  No gear found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
