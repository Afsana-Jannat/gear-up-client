import { ReactNode } from 'react';

import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { getMe } from '@/service/getMe';

export default async function AdminDashboardLayout({
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
        <div className="hidden lg:block">
          <DashboardSidebar role="ADMIN" />
        </div>

        <main className="min-h-screen flex-1">
          <DashboardHeader
            title="Admin Dashboard"
            subtitle="Manage users, gear listings and rental activities."
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
