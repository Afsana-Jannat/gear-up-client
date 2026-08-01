'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Pencil } from 'lucide-react';

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
  role: string;
  status: string;
};

type Props = {
  user: User;
};

export default function ProfileCard({ user }: Props) {
  return (
    <Card className="sticky top-24 rounded-3xl p-8 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <Avatar className="h-32 w-32 border-4 border-primary/10">
          <AvatarImage src={user.avatar} alt={user.name} />

          <AvatarFallback className="text-4xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <h2 className="mt-6 text-2xl font-black">{user.name}</h2>

        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          {user.email}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Badge className="rounded-full px-4 py-1">{user.role}</Badge>

          <Badge
            variant={user.status === 'ACTIVE' ? 'default' : 'destructive'}
            className="rounded-full px-4 py-1"
          >
            {user.status}
          </Badge>
        </div>

        <Button asChild className="mt-8 w-full rounded-xl">
          <Link href="/customer-dashboard/profile/edit">
            <Pencil className="mr-2 h-4 w-4" />
            Edit Profile
          </Link>
        </Button>
      </div>
    </Card>
  );
}
