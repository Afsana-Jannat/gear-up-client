'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Bike,
  Camera,
  Goal,
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
      className="group"
    >
      <article className="overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/10">
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-muted">
          {category.image ? (
            <img
              src={category.image}
              alt={category.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Icon className="h-16 w-16 text-primary" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold shadow backdrop-blur">
            📦 {category.gearCount ?? 0} Gear
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 p-6">
          <div>
            <h3 className="text-xl font-bold">{category.name}</h3>

            <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
              {category.description}
            </p>
          </div>

          <div className="flex items-center justify-between border-t pt-4">
            <span className="text-sm font-medium text-muted-foreground">
              View Collection
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
