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
} from 'lucide-react';

import { cn } from '@/lib/utils';

type Props = {
  mobile?: boolean;
  role?: 'CUSTOMER' | 'PROVIDER' | 'ADMIN';
};

const providerItems = [
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
];

const links = [
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
];

export default function DashboardSidebar({
  mobile = false,
  role = 'CUSTOMER',
}: Props) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'flex w-72 flex-col border-r bg-background',
        mobile ? 'h-full' : 'sticky top-0 h-screen'
      )}
    >
      {' '}
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

            <p className="text-xs text-muted-foreground">Customer Dashboard</p>
          </div>
        </Link>
      </div>
      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-5">
        {links.map((item) => {
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

              {item.title}
            </Link>
          );
        })}
      </nav>
      {/* Footer */}
      <div className="border-t p-5">
        <Link
          href="/"
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            px-4
            py-3
            text-sm
            font-medium
            text-muted-foreground
            transition
            hover:bg-muted
            hover:text-foreground
          "
        >
          <Home className="h-5 w-5" />
          Back to Website
        </Link>
      </div>
    </aside>
  );
}
