import { Package, ClipboardList, Wallet, Star } from 'lucide-react';

import StatsCard from '@/components/dashboard/overview/StatsCard';

export default function ProviderDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <section>
        <h2 className="text-4xl font-black">Welcome Back 👋</h2>

        <p className="mt-2 text-muted-foreground">
          Manage your gears, rental requests and earnings.
        </p>
      </section>

      {/* Stats */}
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="My Gears"
          value={12}
          subtitle="Published gears"
          icon={Package}
        />

        <StatsCard
          title="Rental Requests"
          value={7}
          subtitle="Waiting for approval"
          icon={ClipboardList}
        />

        <StatsCard
          title="Monthly Earnings"
          value="৳18,500"
          subtitle="This month"
          icon={Wallet}
        />

        <StatsCard
          title="Average Rating"
          value="4.9"
          subtitle="Customer reviews"
          icon={Star}
        />
      </section>
    </div>
  );
}
