'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Category } from '@/types/category';

import { gearSchema, GearSchema } from '@/lib/validations/gear.schema';

import { createGear } from '@/service/provider/createGear';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import CategorySelect from './CategorySelect';
import GearImagePreview from './GearImagePreview';

import { Gear } from '@/types/gear';
import { updateGear } from '@/service/provider/updateGear';

type Props = {
  categories: Category[];
  initialData?: Gear;
  gearId?: string;
  mode?: 'create' | 'edit';
};

export default function AddGearForm({
  categories,
  initialData,
  gearId,
  mode = 'create',
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<GearSchema>({
    resolver: zodResolver(gearSchema),
    defaultValues: {
      name: initialData?.name ?? '',
      brand: initialData?.brand ?? '',
      description: initialData?.description ?? '',
      image: initialData?.image ?? '',
      stock: initialData?.stock ?? 1,
      pricePerDay: Number(initialData?.pricePerDay) ?? 1,
      categoryId: initialData?.category.id ?? '',
    },
  });

  const image = watch('image');

  const onSubmit = async (data: GearSchema) => {
    try {
      setLoading(true);

      const result =
        mode === 'edit'
          ? await updateGear(gearId!, data)
          : await createGear(data);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(
        mode === 'edit'
          ? 'Gear updated successfully'
          : 'Gear added successfully'
      );
      router.refresh();

      router.push('/provider-dashboard/my-gears');
    } catch {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="rounded-3xl p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* LEFT */}

          <div className="space-y-6">
            {/* Name */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Gear Name
              </label>

              <Input
                placeholder="Mountain Explorer Tent"
                {...register('name')}
              />

              {errors.name && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Brand */}

            <div>
              <label className="mb-2 block text-sm font-medium">Brand</label>

              <Input placeholder="Coleman" {...register('brand')} />

              {errors.brand && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.brand.message}
                </p>
              )}
            </div>

            {/* Price */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Price Per Day (৳)
              </label>

              <Input
                type="number"
                placeholder="1500"
                {...register('pricePerDay', { valueAsNumber: true })}
              />

              {errors.pricePerDay && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.pricePerDay.message}
                </p>
              )}
            </div>
            {/* Stock */}

            <div>
              <label className="mb-2 block text-sm font-medium">Stock</label>

              <Input
                type="number"
                placeholder="5"
                {...register('stock', { valueAsNumber: true })}
              />

              {errors.stock && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.stock.message}
                </p>
              )}
            </div>

            {/* Category */}

            <div>
              <label className="mb-2 block text-sm font-medium">Category</label>

              <CategorySelect control={control} categories={categories} />

              {errors.categoryId && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.categoryId.message}
                </p>
              )}
            </div>

            {/* Image */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Image URL
              </label>

              <Input
                placeholder="https://example.com/image.jpg"
                {...register('image')}
              />

              {errors.image && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.image.message}
                </p>
              )}
            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-6">
            <GearImagePreview image={image} />

            {/* Description */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Description
              </label>

              <textarea
                rows={11}
                {...register('description')}
                className="
                  w-full
                  rounded-xl
                  border
                  bg-background
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:ring-2
                  focus:ring-primary/30
                "
                placeholder="Write a detailed description..."
              />

              {errors.description && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}

        <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>

          <Button type="submit" disabled={loading} className="min-w-[170px]">
            {loading
              ? mode === 'edit'
                ? 'Updating...'
                : 'Adding...'
              : mode === 'edit'
                ? 'Update Gear'
                : 'Add Gear'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
