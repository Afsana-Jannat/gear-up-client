import { CategoriesSection } from '@/components/home/CategoriesSection';
import FeaturedGearSection from '@/components/home/Gear/FeaturedGearSection';
import { HeroSection } from '@/components/home/HeroSection';
import { Navbar } from '@/components/shared/navbar';
import { Button } from '@/components/ui/button';
import { getMe } from '@/service/getMe';

export default async function HomePage() {
  console.log('Root Route');

  const user = await getMe();

  console.log(user);
  return (
    <main>
      <Navbar user={user}></Navbar>
      <HeroSection></HeroSection>
      <CategoriesSection></CategoriesSection>
      <FeaturedGearSection></FeaturedGearSection>
    </main>
  );
}
