'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, PackageCheck, Truck } from 'lucide-react';

import { Button } from '@/components/ui/button';

const features = [
  {
    icon: ShieldCheck,
    text: 'Secure Online Payment',
  },
  {
    icon: PackageCheck,
    text: 'Verified Gear Providers',
  },
  {
    icon: Truck,
    text: 'Flexible Rental Experience',
  },
];

export default function CTASection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-border/50
            bg-background/70
            px-5
            py-12
            shadow-xl
            backdrop-blur-xl
            transition-all
            duration-500
            hover:shadow-2xl
            sm:px-10
            sm:py-16
            lg:px-20
            lg:py-20
          "
        >
          {/* Animated Glow */}
          <div
            className="
              absolute
              -left-32
              -top-32
              h-80
              w-80
              rounded-full
              bg-white/10
              blur-[100px]
              transition-all
              duration-700
              group-hover:scale-125
            "
          />

          <div
            className="
              absolute
              -bottom-32
              -right-32
              h-80
              w-80
              rounded-full
              bg-black/10
              blur-[100px]
              transition-all
              duration-700
              group-hover:scale-125
            "
          />

          {/* Subtle Grid */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.04]
              [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
              [background-size:40px_40px]
            "
          />

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Badge */}
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                bg-background/60
                px-4
                py-2
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-muted-foreground
                backdrop-blur
              "
            >
              Ready to Explore?
            </span>

            {/* Heading */}
            <h2
              className="
                mt-6
                text-3xl
                font-black
                leading-tight
                tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Rent Premium Outdoor Gear
              <br className="hidden sm:block" />
              <span className="text-muted-foreground">Without Buying It.</span>
            </h2>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-muted-foreground
                sm:text-lg
              "
            >
              From camping tents to cycling equipment, discover quality gear
              from trusted providers and start your next adventure today.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-10
                flex
                flex-col
                justify-center
                gap-4
                sm:flex-row
              "
            >
              <Button
                asChild
                size="lg"
                className="
                  h-12
                  rounded-full
                  px-8
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <Link href="/gear">
                  Browse Gear
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="
                  h-12
                  rounded-full
                  px-8
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <Link href="/register">Become a Provider</Link>
              </Button>
            </div>

            {/* Features */}
            <div
              className="
                mt-12
                grid
                grid-cols-1
                gap-4
                border-t
                border-border/50
                pt-8
                sm:grid-cols-3
                sm:gap-6
                lg:mt-16
              "
            >
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.text}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-3
                      rounded-2xl
                      px-3
                      py-3
                      transition-all
                      duration-300
                      hover:bg-muted/50
                    "
                  >
                    <Icon className="h-5 w-5" />

                    <span
                      className="
                        text-xs
                        font-medium
                        sm:text-sm
                      "
                    >
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
