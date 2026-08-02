'use client';

import { useTransition } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';

import { updateUserStatusAction } from '@/app/actions/updateUserStatusAction';
import { User } from '@/types/user';

type Props = {
  user: User;
};
export default function StatusButton({ user }: Props) {
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      const status = user.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE';

      const result = await updateUserStatusAction(user.id, status);

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <Button
      disabled={pending}
      onClick={handleClick}
      variant={user.status === 'ACTIVE' ? 'destructive' : 'default'}
    >
      {pending
        ? 'Updating...'
        : user.status === 'ACTIVE'
          ? 'Suspend'
          : 'Activate'}
    </Button>
  );
}
