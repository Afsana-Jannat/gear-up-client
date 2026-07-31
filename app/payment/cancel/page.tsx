import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PaymentCancelPage() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-4xl font-bold text-red-500">Payment Cancelled</h1>

      <p className="mt-4 text-muted-foreground">
        You can complete your payment later.
      </p>

      <Button asChild className="mt-8">
        <Link href="/dashboard/customer/rentals">Back to Rentals</Link>
      </Button>
    </div>
  );
}
