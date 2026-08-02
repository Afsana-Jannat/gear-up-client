'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';

import { Category } from '@/types/category';

import { Input } from '@/components/ui/input';
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@/components/ui/table';

import AddCategoryDialog from './AddCategoryDialog';
import EditCategoryDialog from './EditCategoryDialog';
import DeleteCategoryButton from './DeleteCategoryButton';

type Props = {
  categories: Category[];
};

export default function CategoryTable({ categories }: Props) {
  const [search, setSearch] = useState('');

  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      category.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [categories, search]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />

          <Input
            placeholder="Search category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <AddCategoryDialog />
      </div>

      <div className="overflow-hidden rounded-3xl border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredCategories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <img
                    src={category.image || 'https://placehold.co/60x60/png'}
                    alt={category.name}
                    className="h-14 w-14 rounded-xl object-cover"
                  />
                </TableCell>

                <TableCell className="font-semibold">{category.name}</TableCell>

                <TableCell className="max-w-xs truncate text-muted-foreground">
                  {category.description || 'No description'}
                </TableCell>

                <TableCell>
                  <div className="flex justify-end gap-2">
                    <EditCategoryDialog category={category} />

                    <DeleteCategoryButton
                      id={category.id}
                      name={category.name}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}

            {!filteredCategories.length && (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="py-10 text-center text-muted-foreground"
                >
                  No category found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
