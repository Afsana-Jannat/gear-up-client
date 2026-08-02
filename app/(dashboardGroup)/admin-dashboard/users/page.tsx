import { getAllUsers } from '@/service/admin/getAllUsers';
import UserTable from './_components/UserTable';

export default async function AdminUsersPage() {
  const users = await getAllUsers();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-black">User Management</h2>

        <p className="text-muted-foreground">
          Suspend or activate platform users.
        </p>
      </div>

      <UserTable users={users.data} />
    </div>
  );
}
