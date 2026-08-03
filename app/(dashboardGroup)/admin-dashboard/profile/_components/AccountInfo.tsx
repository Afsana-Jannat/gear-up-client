'use client';

import { Card } from '@/components/ui/card';
import { Mail, MapPin, Phone, User } from 'lucide-react';

type User = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

type Props = {
  user: User;
};

export default function AccountInfo({ user }: Props) {
  return (
    <Card className="rounded-3xl p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Personal Information</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Your personal account information.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <InfoItem
          icon={<User className="h-5 w-5" />}
          label="Full Name"
          value={user.name}
        />

        <InfoItem
          icon={<Mail className="h-5 w-5" />}
          label="Email Address"
          value={user.email}
        />

        <InfoItem
          icon={<Phone className="h-5 w-5" />}
          label="Phone Number"
          value={user.phone || 'Not provided'}
        />

        <InfoItem
          icon={<MapPin className="h-5 w-5" />}
          label="Address"
          value={user.address || 'Not provided'}
        />
      </div>
    </Card>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border bg-muted/30 p-5">
      <div className="mb-3 flex items-center gap-2 text-primary">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>

      <p className="break-words text-base font-semibold">{value}</p>
    </div>
  );
}
