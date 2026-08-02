'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Trash2 } from 'lucide-react';

import { deleteGearAction } from '@/app/actions/deleteGearAction';

import { Button } from '@/components/ui/button';

type Props = {
  id: string;
};

export default function DeleteGearButton({ id }: Props) {
  const router = useRouter();

  const [pending, startTransition] = useTransition();

  const handleDelete = () => {
    const ok = window.confirm('Are you sure you want to delete this gear?');

    if (!ok) return;

    startTransition(async () => {
      const result = await deleteGearAction(id);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success('Gear deleted successfully');

      router.refresh();
    });
  };

  return (
    <Button
      size="icon"
      variant="destructive"
      disabled={pending}
      onClick={handleDelete}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
