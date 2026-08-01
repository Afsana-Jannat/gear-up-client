import Link from 'next/link';
import LoginForm from '../_components/Loginform';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{
    redirect?: string;
  }>;
}) {
  const params = await searchParams;
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border bg-background p-8 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your GearUp account
          </p>
        </div>

        <LoginForm redirect={params.redirect} />

        <p className="mt-6 text-center text-sm">
          Create an account?
          <Link
            href="/register"
            className="ml-2 font-semibold text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
