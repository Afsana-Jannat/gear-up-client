'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { CheckCircle2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

import Link from 'next/link';
import { confirmPayment } from '@/service/payment/confirmPayment';

export default function PaymentSuccess() {
  const searchParams = useSearchParams();

  const sessionId = searchParams.get('session_id');

  const [loading, setLoading] = useState(true);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!sessionId) return;

    const run = async () => {
      const result = await confirmPayment(sessionId);

      setSuccess(result.success);

      setLoading(false);
    };

    run();
  }, [sessionId]);

  if (loading) {
    return (
      <section className="container py-24 text-center">
        Confirming payment...
      </section>
    );
  }

  return (
    <section className="container flex min-h-[70vh] items-center justify-center">
      <div className="max-w-lg rounded-3xl border p-10 text-center shadow-lg">
        <CheckCircle2 className="mx-auto mb-5 h-20 w-20 text-green-600" />

        <h1 className="text-4xl font-black">
          {success ? 'Payment Successful' : 'Payment Failed'}
        </h1>

        <p className="mt-4 text-muted-foreground">
          {success
            ? 'Your payment has been completed successfully.'
            : 'Unable to verify payment.'}
        </p>

        <Button asChild className="mt-8">
          <Link href="/customer-dashboard/rentals">Back to Rentals</Link>
        </Button>
      </div>
    </section>
  );
}
