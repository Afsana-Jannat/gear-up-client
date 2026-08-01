import { ReactNode } from 'react';

import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { getMe } from '@/service/getMe';

export default async function ProviderDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getMe();

  if (!user?.success) {
    return null;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <DashboardSidebar role="PROVIDER" />
        </div>

        {/* Main */}
        <main className="min-h-screen flex-1">
          <DashboardHeader
            title="Provider Dashboard"
            subtitle="Manage your gears, rental requests and earnings."
            user={{
              name: user.data.name,
              email: user.data.email,
              avatar: user.data.avatar,
              role: user.data.role,
            }}
          />

          <div className="p-4 md:p-6 xl:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
