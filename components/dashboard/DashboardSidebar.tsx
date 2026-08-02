'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  CreditCard,
  User,
  UserPen,
  Home,
  PlusCircle,
  ClipboardList,
  Wallet,
  ShieldCheck,
  Users,
  FolderTree,
} from 'lucide-react';

import { cn } from '@/lib/utils';

type Role = 'CUSTOMER' | 'PROVIDER' | 'ADMIN';

type Props = {
  mobile?: boolean;
  role?: Role;
};

const sidebarItems = {
  CUSTOMER: [
    {
      title: 'Dashboard',
      href: '/customer-dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'My Rentals',
      href: '/customer-dashboard/rentals',
      icon: Package,
    },
    {
      title: 'Payment History',
      href: '/customer-dashboard/payments',
      icon: CreditCard,
    },
    {
      title: 'Profile',
      href: '/customer-dashboard/profile',
      icon: User,
    },
    {
      title: 'Edit Profile',
      href: '/customer-dashboard/profile/edit',
      icon: UserPen,
    },
  ],

  PROVIDER: [
    {
      title: 'Dashboard',
      href: '/provider-dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'My Gears',
      href: '/provider-dashboard/my-gears',
      icon: Package,
    },
    {
      title: 'Add Gear',
      href: '/provider-dashboard/add-gear',
      icon: PlusCircle,
    },
    {
      title: 'Rental Requests',
      href: '/provider-dashboard/rental-requests',
      icon: ClipboardList,
    },
    {
      title: 'Earnings',
      href: '/provider-dashboard/earnings',
      icon: Wallet,
    },
  ],

  ADMIN: [
    {
      title: 'Dashboard',
      href: '/admin-dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Users',
      href: '/admin-dashboard/users',
      icon: Users,
    },
    {
      title: 'Categories',
      href: '/admin-dashboard/categories',
      icon: FolderTree,
    },
    {
      title: 'Gears',
      href: '/admin-dashboard/gears',
      icon: Package,
    },
    {
      title: 'Rentals',
      href: '/admin-dashboard/rentals',
      icon: ClipboardList,
    },
    {
      title: 'Profile',
      href: '/admin-dashboard/profile',
      icon: ShieldCheck,
    },
  ],
} as const;

const dashboardTitles: Record<Role, string> = {
  CUSTOMER: 'Customer Dashboard',
  PROVIDER: 'Provider Dashboard',
  ADMIN: 'Admin Dashboard',
};

export default function DashboardSidebar({
  mobile = false,
  role = 'CUSTOMER',
}: Props) {
  const pathname = usePathname();

  const menuItems = sidebarItems[role];

  return (
    <aside
      className={cn(
        'flex w-72 flex-col border-r bg-background',
        mobile ? 'h-full' : 'sticky top-0 h-screen'
      )}
    >
      {/* Logo */}
      <div className="border-b px-8 py-7">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="https://gearupkw.myshopify.com/cdn/shop/files/Gear_Up.svg?v=1716521435&width=500"
            alt="GearUp"
            className="h-10 w-10"
          />

          <div>
            <h2 className="text-xl font-black">GearUp</h2>

            <p className="text-xs text-muted-foreground">
              {dashboardTitles[role]}
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-5">
        {menuItems.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(item.href + '/');

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all',
                active
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t p-5">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
        >
          <Home className="h-5 w-5" />
          <span>Back to Website</span>
        </Link>
      </div>
    </aside>
  );
}
