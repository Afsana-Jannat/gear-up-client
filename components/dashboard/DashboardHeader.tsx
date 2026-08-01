'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Bell, Menu } from 'lucide-react';
import DashboardSidebar from './DashboardSidebar';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

type Props = {
  title: string;
  subtitle?: string;
  user: {
    name: string;
    email: string;
    avatar?: string;
    role: string;
  };
};

export default function DashboardHeader({ title, subtitle, user }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur">
      <div className="flex min-h-20 flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        {/* Left */}
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-72 p-0">
              <DashboardSidebar mobile />
            </SheetContent>
          </Sheet>

          <div>
            <h1 className="text-2xl font-black md:text-3xl">{title}</h1>

            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-between gap-4 md:justify-end">
          {/* Notification */}
          <Button
            variant="outline"
            size="icon"
            className="relative h-11 w-11 rounded-full"
          >
            <Bell className="h-5 w-5" />

            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500" />
          </Button>

          {/* User */}
          <div className="hidden sm:block items-center gap-3 rounded-2xl border bg-card px-3 py-2 shadow-sm">
            <Avatar className="h-11 w-11">
              <AvatarImage
                src={user.avatar || '/default-avatar.png'}
                alt={user.name}
              />

              <AvatarFallback>
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="hidden sm:block">
              <h3 className="text-sm font-semibold">{user.name}</h3>

              <p className="text-xs capitalize text-muted-foreground">
                {user.role.toLowerCase()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
