import { BadgeDollarSign, CalendarCheck, Package, Wallet } from 'lucide-react';

import StatsCard from '@/components/dashboard/overview/StatsCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import RecentRentals from '@/components/dashboard/overview/RecentRentals';

function ActionCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <Card
        className="
          group
          h-full
          rounded-3xl
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-primary
          hover:shadow-xl
        "
      >
        <h4 className="text-lg font-bold">{title}</h4>

        <p className="mt-2 text-sm text-muted-foreground">{description}</p>

        <div className="mt-6 flex items-center gap-2 font-medium text-primary">
          Open
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
}

export default function CustomerDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <section>
        <h2 className="text-2xl font-black md:text-4xl">Welcome Back 👋</h2>

        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          Here's an overview of your rentals and payments.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Rentals"
          value={18}
          subtitle="All rental orders"
          icon={Package}
        />

        <StatsCard
          title="Active Rentals"
          value={4}
          subtitle="Currently rented"
          icon={CalendarCheck}
        />

        <StatsCard
          title="Completed"
          value={14}
          subtitle="Returned successfully"
          icon={BadgeDollarSign}
        />

        <StatsCard
          title="Total Spent"
          value="৳32,500"
          subtitle="Lifetime spending"
          icon={Wallet}
        />
      </section>

      {/* quick action */}
      <section>
        <h3 className="mb-5 text-2xl font-bold">Quick Actions</h3>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <ActionCard
            title="Browse Gear"
            description="Explore available rental gear"
            href="/gear"
          />

          <ActionCard
            title="My Rentals"
            description="View all your rental orders"
            href="/customer-dashboard/rentals"
          />

          <ActionCard
            title="Payment History"
            description="See completed payments"
            href="/customer-dashboard/payments"
          />

          <ActionCard
            title="My Profile"
            description="Manage your account"
            href="/customer-dashboard/profile"
          />
        </div>
      </section>

      <RecentRentals></RecentRentals>
    </div>
  );
}
