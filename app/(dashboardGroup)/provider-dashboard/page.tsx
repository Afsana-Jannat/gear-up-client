import Link from 'next/link';
import {
  ArrowRight,
  ClipboardList,
  Package,
  RotateCcw,
  Truck,
} from 'lucide-react';

import { Card } from '@/components/ui/card';
import StatsCard from '@/components/dashboard/overview/StatsCard';

import { getDashboardOverview } from '@/service/provider/getDashboardOverview';

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

export default async function ProviderDashboardPage() {
  const overview = await getDashboardOverview();

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
          p-6
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <h1 className="text-3xl font-black md:text-4xl">Welcome Back 👋</h1>

          <p className="mt-2 max-w-xl text-muted-foreground">
            Manage your gears, rental requests and track your ongoing rentals
            from one place.
          </p>
        </div>

        <div className="rounded-2xl border px-5 py-3 text-sm font-semibold">
          🏕 Provider Dashboard
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="My Gears"
          value={overview.totalGear}
          subtitle="Published gears"
          icon={Package}
        />

        <StatsCard
          title="Pending Requests"
          value={overview.pendingRequests}
          subtitle="Need confirmation"
          icon={ClipboardList}
        />

        <StatsCard
          title="Active Rentals"
          value={overview.activeRentals}
          subtitle="Currently picked up"
          icon={Truck}
        />

        <StatsCard
          title="Returned"
          value={overview.returnedRentals}
          subtitle="Completed rentals"
          icon={RotateCcw}
        />
      </section>

      {/* Quick Actions */}
      <section>
        <h3 className="mb-5 text-2xl font-bold">Quick Actions</h3>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <ActionCard
            title="Add Gear"
            description="Create a new gear listing"
            href="/provider-dashboard/add-gear"
          />

          <ActionCard
            title="Manage Gears"
            description="Edit or delete your gear"
            href="/provider-dashboard/my-gears"
          />

          <ActionCard
            title="Rental Requests"
            description="Approve and manage rentals"
            href="/provider-dashboard/rental-requests"
          />

          <ActionCard
            title="My Profile"
            description="Update your account"
            href="/provider-dashboard/profile"
          />
        </div>
      </section>
    </div>
  );
}
