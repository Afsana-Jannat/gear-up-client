'use client';

import { Control, Controller } from 'react-hook-form';

import { Category } from '@/types/category';
import { GearSchema } from '@/lib/validations/gear.schema';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {
  control: Control<GearSchema>;
  categories: Category[];
};

export default function CategorySelect({ control, categories }: Props) {
  return (
    <Controller
      control={control}
      name="categoryId"
      render={({ field }) => (
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>

          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
}
