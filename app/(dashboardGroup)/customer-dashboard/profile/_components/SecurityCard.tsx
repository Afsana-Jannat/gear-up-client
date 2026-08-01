'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock3, ShieldCheck, UserCog } from 'lucide-react';

type User = {
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type Props = {
  user: User;
};

export default function SecurityCard({ user }: Props) {
  return (
    <Card className="rounded-3xl p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Account Information</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Overview of your account status and activity.
        </p>
      </div>

      <div className="space-y-5">
        <InfoRow
          icon={<UserCog className="h-5 w-5" />}
          label="Role"
          value={<Badge>{user.role}</Badge>}
        />

        <InfoRow
          icon={<ShieldCheck className="h-5 w-5" />}
          label="Account Status"
          value={
            <Badge
              variant={user.status === 'ACTIVE' ? 'default' : 'destructive'}
            >
              {user.status}
            </Badge>
          }
        />

        <InfoRow
          icon={<CalendarDays className="h-5 w-5" />}
          label="Joined"
          value={new Date(user.createdAt).toLocaleDateString()}
        />

        <InfoRow
          icon={<Clock3 className="h-5 w-5" />}
          label="Last Updated"
          value={new Date(user.updatedAt).toLocaleDateString()}
        />
      </div>
    </Card>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>

        <span className="font-medium">{label}</span>
      </div>

      <div>{value}</div>
    </div>
  );
}
