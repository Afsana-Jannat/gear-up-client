'use client';

import Link from 'next/link';
import { Pencil, Trash2 } from 'lucide-react';

import { Gear } from '@/types/gear';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import DeleteGearButton from './DeleteGearButton';

type Props = {
  gear: Gear;
};

export default function GearRow({ gear }: Props) {
  return (
    <TableRow>
      {/* Gear */}
      <TableCell>
        <div className="flex items-center gap-4">
          <img
            src={gear.image || '/gear-placeholder.png'}
            alt={gear.name}
            className="h-14 w-14 rounded-xl border object-cover"
          />

          <div>
            <h3 className="font-semibold">{gear.name}</h3>

            <p className="text-sm text-muted-foreground">{gear.brand}</p>
          </div>
        </div>
      </TableCell>

      {/* Category */}
      <TableCell>
        <Badge variant="secondary">{gear.category.name}</Badge>
      </TableCell>

      {/* Price */}
      <TableCell>৳{gear.pricePerDay}</TableCell>

      {/* Stock */}
      <TableCell>{gear.stock}</TableCell>

      {/* Status */}
      <TableCell>
        <Badge
          variant={
            gear.availability === 'AVAILABLE' ? 'default' : 'destructive'
          }
        >
          {gear.availability}
        </Badge>
      </TableCell>

      {/* Actions */}
      <TableCell>
        <div className="flex justify-end gap-2">
          <Button asChild variant="outline" size="icon">
            <Link href={`/provider-dashboard/edit-gear/${gear.id}`}>
              <Pencil className="h-4 w-4" />
            </Link>
          </Button>

          <DeleteGearButton id={gear.id} />
        </div>
      </TableCell>
    </TableRow>
  );
}
