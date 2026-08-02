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
      <Card className="group h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl">
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

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-black md:text-4xl">Welcome Admin 👋</h2>

        <p className="mt-2 text-muted-foreground">
          Monitor the entire GearUp platform from one place.
        </p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Users"
          value={0}
          subtitle="Registered users"
          icon={Users}
        />

        <StatsCard
          title="Total Gear"
          value={0}
          subtitle="Published gear"
          icon={Package}
        />

        <StatsCard
          title="Rentals"
          value={0}
          subtitle="All rental orders"
          icon={ClipboardList}
        />

        <StatsCard
          title="Platform"
          value="Active"
          subtitle="System health"
          icon={Shield}
        />
      </section>

      <section>
        <h3 className="mb-5 text-2xl font-bold">Quick Actions</h3>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <ActionCard
            title="Manage Users"
            description="Suspend or activate users"
            href="/admin-dashboard/users"
          />

          <ActionCard
            title="Manage Categories"
            description="Create and update categories"
            href="/admin-dashboard/categories"
          />

          <ActionCard
            title="Manage Gears"
            description="Inspect all gear listings"
            href="/admin-dashboard/gears"
          />

          <ActionCard
            title="Rental Orders"
            description="View every rental order"
            href="/admin-dashboard/rentals"
          />
        </div>
      </section>
    </div>
  );
}
