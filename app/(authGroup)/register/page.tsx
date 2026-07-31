import Link from 'next/link';
import RegisterForm from '../_components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg rounded-xl border p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Create Your Account</h1>

          <p className="mt-2 text-muted-foreground">
            Join GearUp and start renting sports gear.
          </p>
        </div>

        <RegisterForm />

        <p className="mt-6 text-center text-sm">
          Already have an account?
          <Link
            href="/login"
            className="ml-2 font-semibold text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
