import Link from 'next/link';
import {
  ArrowRight,
  Users,
  Package,
  ClipboardList,
  Shield,
} from 'lucide-react';

import { Card } from '@/components/ui/card';
import StatsCard from '@/components/dashboard/overview/StatsCard';

import { getAllUsers } from '@/service/admin/getAllUsers';
import { getAllRentals } from '@/service/admin/getAllRentals';
import { getAllGear } from '@/service/admin/getAllGear';

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
          border
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-primary
          hover:shadow-xl
        "
      >
        <h4 className="text-lg font-bold">{title}</h4>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-2 font-medium text-primary">
          Open
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
}

export default async function AdminDashboardPage() {
  const [users, gears, rentals] = await Promise.all([
    getAllUsers(),
    getAllGear(),
    getAllRentals(),
  ]);

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
          <h1 className="text-3xl font-black md:text-4xl">Welcome Admin 👋</h1>

          <p className="mt-2 max-w-xl text-muted-foreground">
            Monitor users, providers, rentals and platform activities from one
            central dashboard.
          </p>
        </div>

        <div
          className="
            w-fit
            rounded-2xl
            border
            px-5
            py-3
            text-sm
            font-semibold
          "
        >
          🟢 Platform Active
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Users"
          value={users.length}
          subtitle="Registered accounts"
          icon={Users}
        />

        <StatsCard
          title="Total Gear"
          value={gears.length}
          subtitle="Published equipment"
          icon={Package}
        />

        <StatsCard
          title="Rental Orders"
          value={rentals.length}
          subtitle="Overall bookings"
          icon={ClipboardList}
        />

        <StatsCard
          title="Platform"
          value="Active"
          subtitle="System status"
          icon={Shield}
        />
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="mb-5 text-2xl font-bold">Quick Actions</h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <ActionCard
            title="Manage Users"
            description="Suspend, activate and monitor users."
            href="/admin-dashboard/users"
          />

          <ActionCard
            title="Categories"
            description="Create, edit and organize categories."
            href="/admin-dashboard/categories"
          />

          <ActionCard
            title="Manage Gear"
            description="Review every published gear."
            href="/admin-dashboard/gears"
          />

          <ActionCard
            title="Rental Orders"
            description="Track every rental across the platform."
            href="/admin-dashboard/rentals"
          />
        </div>
      </section>
    </div>
  );
}
