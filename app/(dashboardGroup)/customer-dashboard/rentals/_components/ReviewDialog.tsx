'use client';

import { useState, useTransition } from 'react';
import { toast } from 'sonner';

import { createReviewAction } from '@/app/actions/createReviewAction';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type Props = {
  rentalOrderId: string;
  gearId: string;
  onSuccess?: () => void;
};

export default function ReviewDialog({
  rentalOrderId,
  gearId,
  onSuccess,
}: Props) {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    startTransition(async () => {
      const result = await createReviewAction({
        rentalOrderId,
        gearId,
        rating,
        comment,
      });

      if (result.success) {
        toast.success(result.message);

        onSuccess?.();

        setOpen(false);
        setComment('');
        setRating(5);
      } else {
        toast.error(result.message || 'Failed to submit review');
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Leave Review</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Leave a Review</DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          <div>
            <Label>Rating</Label>

            <select
              className="mt-2 w-full rounded-md border p-2"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
              <option value={4}>⭐⭐⭐⭐ (4)</option>
              <option value={3}>⭐⭐⭐ (3)</option>
              <option value={2}>⭐⭐ (2)</option>
              <option value={1}>⭐ (1)</option>
            </select>
          </div>

          <div>
            <Label>Comment</Label>

            <Textarea
              rows={5}
              placeholder="Share your experience..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <Button className="w-full" disabled={pending} onClick={handleSubmit}>
            {pending ? 'Submitting...' : 'Submit Review'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
