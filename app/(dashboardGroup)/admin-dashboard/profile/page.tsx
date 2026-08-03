import { getMe } from '@/service/getMe';
import ProfileCard from './_components/ProfileCard';
import AccountInfo from './_components/AccountInfo';
import SecurityCard from './_components/SecurityCard';

export default async function AdminProfilePage() {
  const user = await getMe();

  if (!user?.success) {
    return (
      <div className="rounded-3xl border bg-background p-8 text-center">
        <h2 className="text-2xl font-bold">User not found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Heading */}
      <section>
        <h1 className="text-3xl font-black md:text-4xl">My Profile</h1>

        <p className="mt-2 text-muted-foreground">
          View and manage your account information.
        </p>
      </section>

      <div className="grid gap-8 xl:grid-cols-[340px_1fr]">
        {/* Left */}
        <ProfileCard user={user.data} />

        {/* Right */}
        <div className="space-y-8">
          <AccountInfo user={user.data} />

          <SecurityCard user={user.data} />
        </div>
      </div>
    </div>
  );
}
