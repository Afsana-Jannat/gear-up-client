import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(5, 'Phone is required'),
  address: z.string().min(3, 'Address is required'),
  avatar: z.string().url('Invalid URL'),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
