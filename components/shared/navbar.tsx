'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  BarChart3,
  User,
  Settings,
  CreditCard,
  LifeBuoy,
  LogOut,
  Menu,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { logout } from '@/service/logout';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '#dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Projects',
    href: '#projects',
    icon: FolderKanban,
  },
  {
    label: 'Team',
    href: '#team',
    icon: Users,
  },
  {
    label: 'Analytics',
    href: '#analytics',
    icon: BarChart3,
  },
];

type UserMenuItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const userMenuItems: UserMenuItem[] = [
  {
    label: 'Profile',
    href: '#profile',
    icon: User,
  },
  {
    label: 'Settings',
    href: '#settings',
    icon: Settings,
  },
  {
    label: 'Billing',
    href: '#billing',
    icon: CreditCard,
  },
  {
    label: 'Support',
    href: '#support',
    icon: LifeBuoy,
  },
];

type IUser = {
  success: boolean;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    avatar: string;
    role: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
};

type NavbarProps = {
  user: IUser;
};

export function Navbar({ user }: NavbarProps) {
  const router = useRouter();
  const handleUserMenuAction = async (action: string) => {
    if (action === 'logout') {
      await logout();
      toast.success('user logged out successfully');
      router.push('/login');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
            N
          </span>

          <span className="text-lg font-semibold">NextJs Press</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" size="sm" asChild>
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuGroup>
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {user?.success ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={user.data?.avatar || '/default-avatar.png'}
                      alt={user.data?.name}
                    />
                    <AvatarFallback>
                      {user.data?.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span className="font-medium">{user.data?.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {user.data?.email}
                    </span>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  {userMenuItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild>
                      <Link href={item.href}>
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  className="text-red-600 focus:text-red-600"
                  onClick={async () => {
                    await handleUserMenuAction('logout');
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
