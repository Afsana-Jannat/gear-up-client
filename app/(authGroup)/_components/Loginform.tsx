// 'use client';

// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { loginAction } from '../_actions/authActions';
// import { useActionState, useEffect } from 'react';
// import { toast } from 'sonner';
// // import { useRouter } from 'next/navigation';

// const Loginform = () => {
//   const [state, action, pending] = useActionState(loginAction, false);
//   // const router = useRouter();

//   useEffect(() => {
//     if (!state) return;

//     if (state.success) {
//       toast.success(state.message || 'Login successfully');
//       // router.push('/dashboard');
//     }
//     if (!state.success) {
//       toast.error(state.message || 'Login Failed');
//     }
//   }, [state]);

//   return (
//     <form action={action} className="space-y-4">
//       <Card className="p-5 space-y-4">
//         <Input
//           name="email"
//           type="email"
//           placeholder="Enter Your Email"
//           required
//         ></Input>
//         <Input
//           name="password"
//           type="password"
//           placeholder="Enter Your Password"
//           required
//         ></Input>
//         <Button type="submit">{pending ? 'Submitting...' : 'Login'}</Button>
//       </Card>
//     </form>
//   );
// };

// export default Loginform;

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

const initialState: AuthState = {
  success: false,
  message: '',
};

export default function LoginForm() {
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
