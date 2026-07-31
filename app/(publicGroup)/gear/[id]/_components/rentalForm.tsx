'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { CalendarDays, ReceiptText } from 'lucide-react';

import { createRental } from '@/service/rental/createRental';
import { createPayment } from '@/service/payment/createPayment';

type Props = {
  gearId: string;
  pricePerDay: number;
};

export default function RentalForm({ gearId, pricePerDay }: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const totalDays = useMemo(() => {
    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const difference = end.getTime() - start.getTime();

    if (difference <= 0) return 0;

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  }, [startDate, endDate]);

  const totalPrice = totalDays * pricePerDay;

  const handleSubmit = async () => {
    if (!startDate || !endDate) {
      toast.error('Please select rental dates');

      return;
    }

    if (totalDays <= 0) {
      toast.error('End date must be after start date');

      return;
    }

    try {
      setLoading(true);

      const result = await createRental(gearId, startDate, endDate);

      if (!result.success) {
        toast.error(result.message);

        return;
      }

      toast.success('Rental created successfully');

      const payment = await createPayment(result.data.id);

      if (!payment.success) {
        toast.error(payment.message);

        return;
      }

      window.location.href = payment.data.checkoutUrl;
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      className="
        rounded-3xl
        p-6
        shadow-md
      "
    >
      <div
        className="
          mb-6
          flex
          items-center
          gap-3
        "
      >
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-primary/10
            text-primary
          "
        >
          <CalendarDays size={20} />
        </div>

        <div>
          <h2
            className="
              text-xl
              font-bold
            "
          >
            Rental Period
          </h2>

          <p
            className="
              text-sm
              text-muted-foreground
            "
          >
            Select your booking dates
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
          "
        >
          <DateInput
            label="Start Date"
            value={startDate}
            onChange={setStartDate}
          />

          <DateInput
            label="End Date"
            value={endDate}
            onChange={setEndDate}
            minDate={startDate}
          />
        </div>

        <div
          className="
            space-y-3
            rounded-2xl
            bg-muted/50
            p-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              font-semibold
            "
          >
            <ReceiptText size={18} />
            Booking Summary
          </div>

          <div
            className="
              flex
              justify-between
              text-sm
            "
          >
            <span>Price per day</span>

            <span>৳{pricePerDay.toLocaleString()}</span>
          </div>

          <div
            className="
              flex
              justify-between
              text-sm
            "
          >
            <span>Total days</span>

            <span>{totalDays}</span>
          </div>

          <div
            className="
              flex
              justify-between
              border-t
              pt-3
              text-lg
              font-bold
            "
          >
            <span>Total</span>

            <span className="text-primary">৳{totalPrice.toLocaleString()}</span>
          </div>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={loading}
          size="lg"
          className="
            h-12
            w-full
            rounded-xl
            text-base
            font-semibold
          "
        >
          {loading ? 'Processing...' : 'Confirm Rental'}
        </Button>
      </div>
    </Card>
  );
}

function DateInput({
  label,

  value,

  onChange,

  minDate,
}: {
  label: string;

  value: string;

  onChange: (value: string) => void;

  minDate?: string;
}) {
  return (
    <div className="space-y-2">
      <label
        className="
          text-sm
          font-medium
        "
      >
        {label}
      </label>

      <input
        type="date"
        min={minDate || new Date().toISOString().split('T')[0]}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-12
          w-full
          rounded-xl
          border
          bg-background
          px-4
          outline-none
          transition
          focus:ring-2
          focus:ring-primary/30
        "
      />
    </div>
  );
}
