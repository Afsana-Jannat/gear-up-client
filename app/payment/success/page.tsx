import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PaymentSuccessPage() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-4xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>

      <p className="mt-4 text-muted-foreground">
        Your rental has been confirmed.
      </p>

      <Button asChild className="mt-8">
        <Link href="/dashboard/customer/rentals">View My Rentals</Link>
      </Button>
    </div>
  );
}
