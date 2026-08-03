import { getMe } from '@/service/getMe';
import AdminEditProfileForm from './_components/EditProfileForm';

export default async function EditProfilePage() {
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
        <h1 className="text-3xl font-black md:text-4xl">Edit Profile</h1>

        <p className="mt-2 text-muted-foreground">
          Update your personal information.
        </p>
      </section>

      <AdminEditProfileForm user={user.data} />
    </div>
  );
}
