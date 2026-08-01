'use client';

import Link from 'next/link';
import { XCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function PaymentCancel() {
  return (
    <section className="container flex min-h-[70vh] items-center justify-center">
      <div className="max-w-lg rounded-3xl border p-10 text-center shadow-lg">
        <XCircle className="mx-auto mb-5 h-20 w-20 text-red-500" />

        <h1 className="text-4xl font-black">Payment Cancelled</h1>

        <p className="mt-4 text-muted-foreground">
          Your payment was not completed. You can try again anytime.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button asChild variant="outline">
            <Link href="/customer-dashboard/rentals">Back to Rentals</Link>
          </Button>

          <Button asChild>
            <Link href="/gear">Browse Gear</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
