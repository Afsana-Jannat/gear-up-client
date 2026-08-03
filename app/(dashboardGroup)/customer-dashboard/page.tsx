import { BadgeDollarSign, CalendarCheck, Package, Wallet } from 'lucide-react';

import StatsCard from '@/components/dashboard/overview/StatsCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import RecentRentals from '@/components/dashboard/overview/RecentRentals';

import { getCustomerOverview } from '@/service/customer/getDashboardOverview';

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

export default async function CustomerDashboardPage() {
  const overview = await getCustomerOverview();
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <section
        className="
    flex
    flex-col
    gap-5
    rounded-3xl
    border
    bg-background
    p-4
    lg:flex-row
    lg:items-center
    lg:justify-between
  "
      >
        <div>
          <h1 className="text-3xl font-black md:text-4xl">Welcome Back 👋</h1>

          <p className="mt-2 max-w-xl text-muted-foreground">
            Manage your rentals, payments and reviews from one place.
          </p>
        </div>

        <div className="rounded-2xl border px-5 py-3 text-sm font-semibold">
          🚀 Happy Renting
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Rentals"
          value={overview.totalRentals}
          subtitle="All rental orders"
          icon={Package}
        />

        <StatsCard
          title="Active Rentals"
          value={overview.activeRentals}
          subtitle="Currently rented"
          icon={CalendarCheck}
        />

        <StatsCard
          title="Completed"
          value={overview.completedRentals}
          subtitle="Returned successfully"
          icon={BadgeDollarSign}
        />

        <StatsCard
          title="Total Spent"
          value={`৳${overview.totalSpent.toLocaleString()}`}
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

      <RecentRentals rentals={overview.rentals.slice(0, 5)} />
    </div>
  );
}
