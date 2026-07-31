'use client';

import { useActionState, useEffect, startTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import {
  registerSchema,
  RegisterSchema,
} from '@/lib/validations/register.schema';

import { registerAction } from '../_actions/authActions';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const initialState = {
  success: false,
  message: '',
};

export default function RegisterForm() {
  const router = useRouter();

  const [state, formAction, pending] = useActionState(
    registerAction,
    initialState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: 'CUSTOMER',
    },
  });

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);

      setTimeout(() => {
        router.push('/login');
      }, 1000);
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  const onSubmit = (data: RegisterSchema) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="space-y-5 p-6">
        {/* Name */}
        <div>
          <Input placeholder="Full Name" {...register('name')} />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <Input type="email" placeholder="Email" {...register('email')} />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <Input
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-destructive">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Input placeholder="Phone (Optional)" {...register('phone')} />
        </div>

        {/* Address */}
        <div>
          <Input placeholder="Address (Optional)" {...register('address')} />
        </div>

        {/* Avatar */}
        <div>
          <Input placeholder="Avatar URL (Optional)" {...register('avatar')} />
        </div>

        {/* Role */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Select Role</p>

          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" value="CUSTOMER" {...register('role')} />
              Customer
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" value="PROVIDER" {...register('role')} />
              Provider
            </label>
          </div>

          {errors.role && (
            <p className="text-sm text-destructive">{errors.role.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? 'Creating Account...' : 'Create Account'}
        </Button>
      </Card>
    </form>
  );
}
