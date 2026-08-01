import { BadgeDollarSign, CalendarCheck, Package, Wallet } from 'lucide-react';

import StatsCard from '@/components/dashboard/overview/StatsCard';

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
    </div>
  );
}
