'use client';

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
};

export default function RentalDialog({ gearId, pricePerDay }: Props) {
  return (
    <Dialog>
      <DialogTrigger
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
      </DialogTrigger>

      <DialogContent
        className="
          max-w-xl
          rounded-3xl
          p-0
          overflow-hidden
        "
      >
        <DialogHeader
          className="
            border-b
            px-6
            py-5
          "
        >
          <DialogTitle
            className="
              text-2xl
              font-bold
            "
          >
            Rent This Gear
          </DialogTitle>
        </DialogHeader>

        <div
          className="
            max-h-[80vh]
            overflow-y-auto
            p-6
          "
        >
          <RentalForm gearId={gearId} pricePerDay={pricePerDay} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
