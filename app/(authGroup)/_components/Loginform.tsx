'use client';

import { startTransition, useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { loginSchema, LoginSchema } from '@/lib/validations/login.schema';
import { loginAction, AuthState } from '../_actions/authActions';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

type Props = {
  redirect?: string;
};

const initialState: AuthState = {
  success: false,
  message: '',
};

export default function LoginForm({ redirect }: Props) {
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (!state?.message) return;

    if (!state.success) {
      toast.error(state.message);
    }
  }, [state]);

  const onSubmit = (data: LoginSchema) => {
    const formData = new FormData();

    formData.append('email', data.email);
    formData.append('password', data.password);

    if (redirect) {
      formData.append('redirect', redirect);
    }

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="space-y-5 p-6">
        <div>
          <Input
            type="email"
            autoComplete="email"
            placeholder="Email address"
            {...register('email')}
          />

          {errors.email && (
            <p className="mt-1 text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Input
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            {...register('password')}
          />

          {errors.password && (
            <p className="mt-1 text-sm text-destructive">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Logging in...
            </>
          ) : (
            'Login'
          )}
        </Button>
      </Card>
    </form>
  );
}
