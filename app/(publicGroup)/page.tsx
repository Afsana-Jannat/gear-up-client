import { Button } from '@/components/ui/button';
import { getMe } from '@/service/getMe';

export default async function HomePage() {
  console.log('Root Route');

  const user = await getMe();

  console.log(user);
  return (
    <main>
      <div>
        hello Next.js
        <Button size={'xs'} variant={'destructive'}>
          Click me
        </Button>
      </div>
    </main>
  );
}
