'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Gear } from '@/types/gear';

type Props = {
  gear: Gear;
};

export default function GearShowcaseCard({ gear }: Props) {
  return (
    <Link href={`/gear/${gear.id}`} className="group block">
      <article
        className="
          relative
          aspect-[4/5]
          overflow-hidden
          rounded-[28px]
          bg-neutral-100
          shadow-sm
        "
      >
        {/* Image */}

        <img
          src={gear.image}
          alt={gear.name}
          loading="lazy"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Soft Dark Overlay */}

        <div
          className="
            absolute
            inset-0
            z-10
            bg-black/0
            transition-all
            duration-500
            group-hover:bg-black/20
          "
        />

        {/* Expanding Blur Circle */}

        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-10
              w-10
              -translate-x-1/2
              -translate-y-1/2
              rounded-full

              border border-white/10
              bg-black/10
              backdrop-blur-md

              shadow-[0_0_80px_rgba(255,255,255,0.08)]

              opacity-0
              scale-0

              transition-all
              duration-700
              ease-[cubic-bezier(.22,1,.36,1)]

              group-hover:scale-[18]
              group-hover:opacity-100
            "
          />
        </div>

        {/* Content */}

        <div
          className="
            absolute
            inset-0
            z-30

            flex
            flex-col
            items-center
            justify-center

            px-6
            text-center

            opacity-0
            translate-y-6

            transition-all
            duration-500
            delay-150

            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <div className="max-w-[220px]">
            {/* Category */}

            <span
              className="
                inline-flex
                rounded-full
                border
                border-white/20
                bg-white/10
                px-3
                py-1

                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]

                text-white

                backdrop-blur
              "
            >
              {gear.category.name}
            </span>

            {/* Name */}

            <h3 className="mt-5 line-clamp-2 text-xl font-black leading-tight text-white lg:text-2xl">
              {gear.name}
            </h3>

            {/* Brand */}

            <p className="mt-2 text-xs tracking-wide text-white/70">
              {gear.brand}
            </p>

            {/* Price */}

            <div className="mt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                Per Day
              </p>

              <p className="mt-1 text-2xl font-bold text-white">
                ৳{gear.pricePerDay}
              </p>
            </div>

            {/* CTA */}

            <div
              className="
                mt-7

                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-white/20

                bg-white/10

                px-4
                py-2

                text-xs
                font-semibold

                text-white

                backdrop-blur

                transition-all
                duration-300

                group-hover:bg-white
                group-hover:text-black
              "
            >
              Rent Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
