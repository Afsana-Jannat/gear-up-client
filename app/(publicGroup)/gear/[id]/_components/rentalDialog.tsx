'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import RentalForm from './rentalForm';

type Props = {
  gearId: string;
  pricePerDay: number;
  isLoggedIn: boolean;
};

export default function RentalDialog({
  gearId,
  pricePerDay,
  isLoggedIn,
}: Props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('clicked');

    if (!isLoggedIn) {
      router.push(`/login?redirect=/gear/${gearId}`);
      return;
    }

    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={handleClick}
        className="
            inline-flex
            h-12
            items-center
            justify-center
            rounded-xl
            bg-primary
            px-8
            text-base
            font-semibold
            text-primary-foreground
            shadow-lg
            transition
            hover:scale-[1.02]
          "
      >
        Rent Now
      </button>

      <DialogContent className="max-w-xl overflow-hidden rounded-3xl p-0">
        <DialogHeader className="border-b px-6 py-5">
          <DialogTitle className="text-2xl font-bold">
            Rent This Gear
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-[80vh] overflow-y-auto p-6">
          <RentalForm gearId={gearId} pricePerDay={pricePerDay} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
