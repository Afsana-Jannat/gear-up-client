import { cookies } from 'next/headers';
import { getSingleGear } from '@/service/gear/getSingleGear';
import GearDetails from './_components/gearDetails';

export default async function GearPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await getSingleGear(id);

  const cookieStore = await cookies();

  const isLoggedIn = !!cookieStore.get('accessToken');

  if (!response.success || !response.data) {
    return (
      <section className="container mx-auto py-16">
        <h1 className="text-2xl font-bold">Gear not found</h1>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-16">
      <GearDetails gear={response.data} isLoggedIn={isLoggedIn} />
    </section>
  );
}
