'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { loginUser } from '@/service/auth/login';

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      toast.success(data.message);

      switch (data.data.user.role) {
        case 'CUSTOMER':
          router.push('/customer-dashboard');
          break;

        case 'PROVIDER':
          router.push('/admin-dashboard');
          break;

        case 'ADMIN':
          router.push('/provider-dashboard');
          break;

        default:
          router.push('/');
      }

      router.refresh();
    },

    onError: (error: any) => {
      toast.error(error?.response?.data?.message ?? 'Login failed');
    },
  });
}
