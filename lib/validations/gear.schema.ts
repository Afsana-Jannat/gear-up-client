import { z } from 'zod';

export const gearSchema = z.object({
  name: z.string().min(2, 'Gear name is required'),

  brand: z.string().min(2, 'Brand is required'),

  description: z.string().min(10, 'Description is too short'),

  pricePerDay: z.coerce.number().min(1, 'Price must be greater than 0'),

  stock: z.coerce.number().min(0, 'Stock cannot be negative'),

  image: z.string().url('Please enter a valid image URL'),

  categoryId: z.string().min(1, 'Category is required'),
});

export type GearSchema = z.infer<typeof gearSchema>;
