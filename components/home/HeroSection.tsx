'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Bike,
  Tent,
  Mountain,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      {/* Background Blur */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-0 top-40 h-[450px] w-[450px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="container relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-5 py-2 text-sm font-medium shadow-md backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Trusted by 1000+ Outdoor Enthusiasts
            </div>

            {/* Heading */}

            <div className="space-y-5">
              <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Rent
                <span className="text-primary"> Sports </span>&
                <span className="text-primary"> Outdoor Gear </span>
                Without Buying
              </h1>

              <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                Discover premium camping, cycling, hiking, trekking, climbing,
                and sports equipment from trusted local providers. Save money,
                travel lighter, and enjoy every adventure.
              </p>
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-xl px-7 text-base shadow-lg shadow-primary/20 transition-all hover:scale-105"
              >
                <Link href="/gear">
                  Browse Gear
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl px-7 text-base"
              >
                <Link href="/provider">Become a Provider</Link>
              </Button>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 border-t pt-8">
              <div>
                <h2 className="text-3xl font-bold">10K+</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Successful Rentals
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">500+</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Verified Providers
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">4.9★</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Average Rating
                </p>
              </div>
            </div>

            {/* Categories */}

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                {
                  icon: Bike,
                  label: 'Cycling',
                },
                {
                  icon: Tent,
                  label: 'Camping',
                },
                {
                  icon: Mountain,
                  label: 'Hiking',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-xl border bg-background px-4 py-2 shadow-sm"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-0 rounded-[40px] bg-primary/20 blur-3xl" />

            {/* Image */}

            <div className="relative overflow-hidden rounded-[32px] border bg-card shadow-2xl">
              <img
                src="https://i.pinimg.com/1200x/ee/9f/b4/ee9fb411826f23c3b86a0547d133739b.jpg"
                alt="Outdoor Gear"
                className="h-[650px] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}

            <div className="absolute left-6 top-6 rounded-2xl bg-background/95 p-4 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-yellow-100 p-2">
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                </div>

                <div>
                  <p className="font-semibold">4.9/5 Rating</p>
                  <p className="text-sm text-muted-foreground">
                    Based on 2K+ Reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 rounded-2xl bg-background/95 p-5 shadow-xl backdrop-blur">
              <h3 className="text-3xl font-bold text-primary">500+</h3>
              <p className="text-sm text-muted-foreground">Trusted Providers</p>
            </div>

            <div className="absolute -bottom-5 left-14 rounded-2xl bg-background/95 p-4 shadow-xl backdrop-blur">
              <p className="text-lg font-bold">🚴 Ready for Adventure</p>
              <p className="text-sm text-muted-foreground">
                Rent • Explore • Return
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
