'use client';

import { Badge } from '@/components/ui/badge';
import { MapPin, Star } from 'lucide-react';

import { Gear } from '@/types/gear';

import ProviderCard from './providerCard';
import RentCard from './rentCard';
import RentalDialog from './rentalDialog';

type Props = {
  gear: Gear;
  isLoggedIn: boolean;
};

export default function GearDetails({ gear, isLoggedIn }: Props) {
  if (!gear) return null;

  return (
    <section className="py-8 md:py-12">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        {/* LEFT */}
        <div className="space-y-10">
          {/* Image */}
          <div className="group relative overflow-hidden rounded-3xl border bg-muted">
            <img
              src={gear.image || '/gear-placeholder.png'}
              alt={gear.name}
              className="
                h-[420px]
                w-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
                sm:h-[480px]
                lg:h-[520px]
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 transition group-hover:opacity-100" />

            {/* Badges */}
            <div className="absolute left-5 top-5 flex flex-wrap gap-3">
              <Badge className="rounded-full px-4 py-1.5 backdrop-blur">
                {gear.category.name}
              </Badge>

              <Badge
                variant={
                  gear.availability === 'AVAILABLE' ? 'default' : 'destructive'
                }
                className="rounded-full px-4 py-1.5"
              >
                {gear.availability}
              </Badge>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-black tracking-tight md:text-5xl">
                {gear.name}
              </h1>

              <p className="mt-2 text-lg text-muted-foreground">{gear.brand}</p>

              <div className="mt-4 flex flex-wrap gap-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  4.9 (36 reviews)
                </span>

                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="rounded-3xl border bg-muted/30 p-6">
              <h2 className="mb-3 text-xl font-bold">About This Gear</h2>

              <p className="leading-8 text-muted-foreground">
                {gear.description}
              </p>
            </div>
          </div>

          <ProviderCard provider={gear.provider} />
        </div>

        {/* RIGHT */}
        <aside>
          <div className="sticky top-24 space-y-6">
            <RentCard
              pricePerDay={gear.pricePerDay}
              stock={gear.stock}
              availability={gear.availability}
            />

            <RentalDialog
              gearId={gear.id}
              pricePerDay={Number(gear.pricePerDay)}
              isLoggedIn={isLoggedIn}
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
