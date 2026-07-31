// import Image from 'next/image';
// import Link from 'next/link';

// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

// import { Gear } from '@/types/gear';
// import { Badge } from '@/components/ui/badge';

// type Props = {
//   gear: Gear;
// };

// export default function GearCard({ gear }: Props) {
//   return (
//     <Card className="group overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
//       <div className="relative aspect-square overflow-hidden">
//         <img
//           src={gear.image}
//           alt={gear.name}
//           className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//         />
//       </div>

//       <div className="space-y-4 p-5">
//         <Badge variant="secondary">{gear.category.name}</Badge>

//         <div>
//           <h3 className="line-clamp-1 text-lg font-semibold">{gear.name}</h3>

//           <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
//             {gear.description}
//           </p>
//         </div>

//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-xl font-bold text-primary">
//               ৳{gear.pricePerDay}
//             </p>

//             <p className="text-xs text-muted-foreground">per day</p>
//           </div>

//           <Badge
//             variant={
//               gear.availability === 'AVAILABLE' ? 'default' : 'destructive'
//             }
//           >
//             {gear.availability}
//           </Badge>
//         </div>

//         <p className="text-sm text-muted-foreground">Stock: {gear.stock}</p>

//         <Button asChild className="w-full">
//           <Link href={`/gear/${gear.id}`}>Rent Now</Link>
//         </Button>
//       </div>
//     </Card>
//   );
// }

'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Package, Star } from 'lucide-react';

import { Gear } from '@/types/gear';

type Props = {
  gear: Gear;
};

export default function GearCard({ gear }: Props) {
  const isAvailable = gear.availability === 'AVAILABLE';

  return (
    <Link href={`/gear/${gear.id}`} className="group block h-full">
      <article
        className="
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[24px]
          border
          border-neutral-200
          bg-white
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-neutral-300
          hover:shadow-[0_30px_80px_rgba(0,0,0,.08)]
        "
      >
        {/* IMAGE */}
        <div className="relative h-72 overflow-hidden bg-[#f7f7f7]">
          {/* Category */}
          <span
            className="
              absolute
              left-4
              top-4
              z-20
              rounded-full
              bg-white/90
              px-3
              py-1.5
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              backdrop-blur
            "
          >
            {gear.category.name}
          </span>

          {/* Availability */}
          <span
            className={`
              absolute
              right-4
              top-4
              z-20
              flex
              items-center
              gap-1.5
              rounded-full
              px-3
              py-1.5
              text-[11px]
              font-semibold
              backdrop-blur
              ${
                isAvailable
                  ? 'bg-emerald-500 text-white'
                  : 'bg-red-500 text-white'
              }
            `}
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            {isAvailable ? 'Available' : 'Unavailable'}
          </span>

          {/* Product Image */}
          <img
            src={gear.image}
            alt={gear.name}
            loading="lazy"
            className="
              absolute
              left-1/2
              top-1/2
              h-[78%]
              w-auto
              -translate-x-1/2
              -translate-y-1/2
              object-contain
              transition-all
              duration-700
              group-hover:scale-110
              group-hover:-rotate-3
            "
          />

          {/* Gradient */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-24
              bg-gradient-to-t
              from-black/10
              to-transparent
            "
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col p-5">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-neutral-400" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
              {gear.brand}
            </span>
          </div>

          {/* Name */}
          <h3 className="mt-3 line-clamp-2 text-2xl font-black tracking-tight text-neutral-900 transition-colors group-hover:text-black">
            {gear.name}
          </h3>

          {/* Description */}
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-neutral-500">
            {gear.description}
          </p>

          {/* Rating + Stock */}
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

              <span className="text-sm font-semibold">4.9</span>

              <span className="text-sm text-neutral-400">(120)</span>
            </div>

            <span className="text-sm text-neutral-500">
              Stock: <span className="font-semibold">{gear.stock}</span>
            </span>
          </div>

          {/* Bottom */}
          <div className="mt-auto pt-6">
            <div className="flex items-center justify-between border-t border-neutral-200 pt-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Per Day
                </p>

                <p className="mt-1 text-3xl font-black tracking-tight text-neutral-900">
                  ৳{gear.pricePerDay}
                </p>
              </div>

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-neutral-200
                  transition-all
                  duration-300
                  group-hover:bg-black
                  group-hover:text-white
                "
              >
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
