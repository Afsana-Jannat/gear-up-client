// 'use client';

// import Link from 'next/link';
// import {
//   ArrowRight,
//   Bike,
//   Camera,
//   Goal,
//   Mountain,
//   Package,
//   Snowflake,
//   Tent,
// } from 'lucide-react';

// import { Category } from '@/types/category';

// const iconMap: Record<string, React.ElementType> = {
//   Camping: Tent,
//   Cycling: Bike,
//   Football: Goal,
//   Hiking: Mountain,
//   Winter: Snowflake,
//   Photography: Camera,
// };

// export function CategoryCard({ category }: { category: Category }) {
//   const Icon = iconMap[category.name] || Package;

//   return (
//     <Link
//       href={`/gear?category=${encodeURIComponent(category.name)}`}
//       className="group"
//     >
//       <article className="overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/10">
//         {/* Image */}
//         <div className="relative h-52 overflow-hidden bg-muted">
//           {category.image ? (
//             <img
//               src={category.image}
//               alt={category.name}
//               loading="lazy"
//               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//           ) : (
//             <div className="flex h-full items-center justify-center">
//               <Icon className="h-16 w-16 text-primary" />
//             </div>
//           )}

//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

//           <div className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold shadow backdrop-blur">
//             📦 {category.gearCount ?? 0} Gear
//           </div>
//         </div>

//         {/* Content */}
//         <div className="space-y-4 p-6">
//           <div>
//             <h3 className="text-xl font-bold">{category.name}</h3>

//             <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
//               {category.description}
//             </p>
//           </div>

//           <div className="flex items-center justify-between border-t pt-4">
//             <span className="text-sm font-medium text-muted-foreground">
//               View Collection
//             </span>

//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-x-1">
//               <ArrowRight className="h-4 w-4" />
//             </div>
//           </div>
//         </div>
//       </article>
//     </Link>
//   );
// }

'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Bike,
  Camera,
  Goal,
  Heart,
  Mountain,
  Package,
  Snowflake,
  Tent,
} from 'lucide-react';

import { Category } from '@/types/category';

const iconMap: Record<string, React.ElementType> = {
  Camping: Tent,
  Cycling: Bike,
  Football: Goal,
  Hiking: Mountain,
  Winter: Snowflake,
  Photography: Camera,
};

export function CategoryCard({ category }: { category: Category }) {
  const Icon = iconMap[category.name] || Package;

  return (
    <Link
      href={`/gear?category=${encodeURIComponent(category.name)}`}
      className="group block h-full"
    >
      <article
        className="
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-neutral-200
          bg-white
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-neutral-300
          hover:shadow-[0_25px_70px_rgba(0,0,0,.08)]
        "
      >
        {/* IMAGE */}

        <div className="relative h-28 overflow-hidden bg-[#f6f6f6]">
          {category.image ? (
            <img
              src={category.image}
              alt={category.name}
              loading="lazy"
              className="
                absolute
                left-1/2
                top-1/2
                h-[65%]
                w-auto
                -translate-x-1/2
                -translate-y-1/2
                object-contain
                transition-all
                duration-700
                group-hover:scale-110
                group-hover:-rotate-6
              "
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Icon className="h-20 w-20 text-neutral-300" />
            </div>
          )}

          {/* NEW */}

          <span className="absolute left-4 top-4 rounded bg-black px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            NEW
          </span>

          {/* WISHLIST */}

          <button
            className="
              absolute
              right-4
              top-4
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-sm
              transition
              hover:scale-110
            "
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>

        {/* CONTENT */}

        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-neutral-500" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              CATEGORY
            </span>
          </div>

          <h3 className="mt-3 text-xl font-bold tracking-tight">
            {category.name}
          </h3>

          <p className="mt-2 text-sm leading-5 text-neutral-500">
            {category.description}
          </p>

          <div className="mt-auto pt-5">
            <div className="flex items-center justify-between border-t pt-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                  Available
                </p>

                <p className="mt-1 text-xl font-black">
                  {category.gearCount ?? 0}+
                </p>
              </div>

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all
                  duration-300
                  group-hover:bg-black
                  group-hover:text-white
                "
              >
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
