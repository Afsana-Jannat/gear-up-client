'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Category } from '@/types/category';

type Props = {
  category: Category;
};

export default function CategoryGridCard({ category }: Props) {
  return (
    <Link href={`/gear?categoryId=${category.id}`} className="group">
      <article className="overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        <div className="space-y-4 p-6">
          <div>
            <h3 className="text-xl font-bold">{category.name}</h3>

            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {category.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary">
              Browse Gear
            </span>

            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  );
}
