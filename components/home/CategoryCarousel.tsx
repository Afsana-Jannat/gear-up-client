'use client';

import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

import { Category } from '@/types/category';
import { CategoryCard } from './CategoryCard';

interface Props {
  categories: Category[];
}

export function CategoryCarousel({ categories }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      {/* Left Content */}
      <div className="lg:w-[280px] lg:shrink-0">
        <p className="text-3xl font-black uppercase leading-none tracking-tight lg:text-5xl">
          OUR
          <br />
          CATEGORIES
        </p>

        <div className="mt-6 h-[2px] w-10 bg-black" />

        <p className="mt-6 text-muted-foreground leading-7">
          Browse premium sports and
          <br />
          outdoor equipment for every adventure.
        </p>

        <Link
          href="/gear"
          className="group mt-10 inline-flex items-center gap-3 font-semibold"
        >
          Explore All
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Right */}
      <div className="relative flex-1">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {categories.map((category) => (
              <div
                key={category.id}
                className="
                  min-w-0
                  flex-[0_0_100%]
                  px-3

                  sm:flex-[0_0_50%]

                  xl:flex-[0_0_25%]
                "
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>

        {/* Previous */}

        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition hover:scale-110 lg:flex"
        >
          <ChevronLeft />
        </button>

        {/* Next */}

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition hover:scale-110 lg:flex"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
