'use client';

import { useTransition } from 'react';
import { toast } from 'sonner';
import { Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { deleteCategoryAction } from '@/app/actions/deleteCategoryAction';

type Props = {
  id: string;
  name: string;
};

export default function DeleteCategoryButton({ id, name }: Props) {
  const [pending, startTransition] = useTransition();

  const handleDelete = () => {
    const ok = window.confirm('Are you sure you want to delete "{name}"?');

    if (!ok) return;

    startTransition(async () => {
      const result = await deleteCategoryAction(id);

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
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
