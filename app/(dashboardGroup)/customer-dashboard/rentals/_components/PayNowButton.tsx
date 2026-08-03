'use client';

import { CreditCard } from 'lucide-react';
import { useTransition } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { createPayment } from '@/service/payment/createPayment';

type Props = {
  rentalOrderId: string;
};

export default function PayNowButton({ rentalOrderId }: Props) {
  const [pending, startTransition] = useTransition();

  const handlePayment = () => {
    startTransition(async () => {
      const result = await createPayment(rentalOrderId);

      if (!result.success) {
        toast.error(result.message);

        return;
      }

      window.location.href = result.data.checkoutUrl;
    });
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={pending}
      className="     w-full
    justify-center
    sm:w-[auto]
    sm:min-w-[170px]"
    >
      <CreditCard className="mr-2 h-4 w-4 shrink-0" />

      {pending ? 'Redirecting...' : 'Pay Now'}
    </Button>
  );
}
