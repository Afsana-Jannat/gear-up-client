import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),

  email: z.string().email('Invalid email'),

  password: z.string().min(6, 'Password must be at least 6 characters'),

  phone: z.string().optional(),

  address: z.string().optional(),

  avatar: z.string().optional(),

  role: z.enum(['CUSTOMER', 'PROVIDER']),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
