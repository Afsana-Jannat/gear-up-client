'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { profileSchema, ProfileSchema } from '@/lib/validations/profile.schema';

import { updateProfile } from '@/service/user/updateProfile';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

type Props = {
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
    avatar: string;
  };
};

export default function AdminEditProfileForm({ user }: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name,
      phone: user.phone,
      address: user.address,
      avatar: user.avatar,
    },
  });

  const onSubmit = async (data: ProfileSchema) => {
    try {
      setLoading(true);

      const result = await updateProfile(data);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success('Profile updated successfully');

      router.push('/customer-dashboard/profile');
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="rounded-3xl p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Name */}

          <div>
            <label className="mb-2 block text-sm font-medium">Full Name</label>

            <Input {...register('name')} />

            {errors.name && (
              <p className="mt-1 text-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>

            <Input value={user.email} disabled />
          </div>

          {/* Phone */}

          <div>
            <label className="mb-2 block text-sm font-medium">Phone</label>

            <Input {...register('phone')} />

            {errors.phone && (
              <p className="mt-1 text-sm text-destructive">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Avatar */}

          <div>
            <label className="mb-2 block text-sm font-medium">Avatar URL</label>

            <Input {...register('avatar')} />

            {errors.avatar && (
              <p className="mt-1 text-sm text-destructive">
                {errors.avatar.message}
              </p>
            )}
          </div>
          {/* Address */}

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">Address</label>

            <textarea
              {...register('address')}
              rows={4}
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
            />

            {errors.address && (
              <p className="mt-1 text-sm text-destructive">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}

        <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>

          <Button type="submit" disabled={loading} className="min-w-[160px]">
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
