import Link from 'next/link';

import { SearchX } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <SearchX className="mx-auto mb-6 h-20 w-20" />

        <h1 className="text-5xl font-black">404</h1>

        <h2 className="mt-3 text-2xl font-bold">Page Not Found</h2>

        <p className="mt-3 text-muted-foreground">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link href="/">
          <Button className="mt-8">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
