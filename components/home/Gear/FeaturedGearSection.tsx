// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';

// import { Button } from '@/components/ui/button';

// import { getFeaturedGear } from '@/service/gear/getFeaturedGear';

// import GearCard from './GearCard';

// export default async function FeaturedGearSection() {
//   const gears = await getFeaturedGear();

//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="mb-10 flex items-center justify-between">
//           <div>
//             <h2 className="text-3xl font-bold">Featured Gear</h2>

//             <p className="mt-2 text-muted-foreground">
//               Discover our most popular outdoor and sports equipment.
//             </p>
//           </div>

//           <Button variant="outline" asChild>
//             <Link href="/gear">
//               View All
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Link>
//           </Button>
//         </div>

//         {gears.length === 0 ? (
//           <div className="rounded-lg border py-16 text-center">
//             No gear available.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {gears.map((gear) => (
//               <GearCard key={gear.id} gear={gear} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { getFeaturedGear } from '@/service/gear/getFeaturedGear';
import GearShowcaseCard from './GearShowcaseCard';

export default async function FeaturedGearSection() {
  const gears = await getFeaturedGear();

  if (!gears.length) return null;

  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}

      <div className="absolute -left-44 top-0 h-[420px] w-[420px] rounded-full bg-neutral-100 blur-3xl opacity-70" />

      <div className="absolute -right-44 bottom-0 h-[420px] w-[420px] rounded-full bg-neutral-100 blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-neutral-500">
              FEATURED COLLECTION
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-neutral-900 md:text-6xl">
              Rent Premium
              <br />
              Outdoor Gear
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500">
              Carefully selected equipment for camping, hiking, cycling,
              photography and every adventure in between.
            </p>
          </div>

          <Link
            href="/gear"
            className="
              group
              inline-flex
              items-center
              gap-3
              self-start
              rounded-full
              border
              border-neutral-300
              px-6
              py-3
              font-semibold
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
            "
          >
            Explore Collection
            <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {gears.slice(0, 5).map((gear) => (
            <GearShowcaseCard key={gear.id} gear={gear} />
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-16 flex justify-center">
          <Link
            href="/gear"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-lg
              font-semibold
              transition
            "
          >
            View All Equipment
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
