// import Loginform from '../_components/Loginform';

// export default function LoginPage() {
//   return (
//     <>
//       <div className="flex min-h-screen items-center justify-center">
//         <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
//           {/* From generic texts */}
//           <div className="space-y-2 text-center">
//             <h1 className="text-3xl font-bold">Welcome Back!</h1>
//             <p className="text-gray-500">
//               Enter your credentails to access your account
//             </p>
//           </div>

//           {/* from */}
//           <Loginform></Loginform>
//         </div>
//       </div>
//     </>
//   );
// }
import Link from 'next/link';
import LoginForm from '../_components/Loginform';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border bg-background p-8 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your GearUp account
          </p>
        </div>

        <LoginForm />

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
