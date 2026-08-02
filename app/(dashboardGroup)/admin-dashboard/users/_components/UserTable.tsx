'use client';

import { useMemo, useState } from 'react';

import { User } from '@/types/user';

import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import StatusButton from './UserStatusButton';

type Props = {
  users: User[];
};

export default function UserTable({ users }: Props) {
  const [search, setSearch] = useState('');

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  return (
    <div className="space-y-6">
      <Input
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-hidden rounded-3xl border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div>
                    <p className="font-semibold">{user.name}</p>

                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </TableCell>

                <TableCell>
                  <Badge variant="secondary">{user.role}</Badge>
                </TableCell>

                <TableCell>
                  <Badge
                    variant={
                      user.status === 'ACTIVE' ? 'default' : 'destructive'
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>

                <TableCell className="text-right">
                  <StatusButton user={user} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
