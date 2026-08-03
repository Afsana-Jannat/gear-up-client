'use client';

import Autoplay from 'embla-carousel-autoplay';
import { Quote, Star } from 'lucide-react';
import { useRef } from 'react';

import { Review } from '@/types/review';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

type Props = {
  reviews: Review[];
};

export default function ReviewSlider({ reviews }: Props) {
  const plugin = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {reviews.map((review) => (
          <CarouselItem
            key={review.id}
            className="
              pl-4
              basis-full
              sm:basis-1/2
              xl:basis-1/3
            "
          >
            <article
              className="
                group
                relative
                flex
                h-[285px]
                flex-col
                justify-between
                overflow-hidden
                rounded-[28px]
                border
                bg-background
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-primary/20
                hover:shadow-xl
              "
            >
              {/* Quote */}

              <Quote
                size={42}
                className="
                  absolute
                  right-5
                  top-5
                  text-primary/10
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              {/* Rating */}

              <div>
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={17}
                      className={
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }
                    />
                  ))}
                </div>

                {/* Comment */}

                <p className="line-clamp-4 text-[15px] leading-7 text-muted-foreground">
                  "{review.comment}"
                </p>
              </div>

              {/* Footer */}

              <div className="mt-6">
                <div className="mb-4 border-t" />

                <div className="flex items-center gap-3">
                  {/* User */}

                  <img
                    src={
                      review.customer.avatar ||
                      'https://placehold.co/80x80?text=User'
                    }
                    alt={review.customer.name}
                    className="
                      h-12
                      w-12
                      rounded-full
                      border-2
                      border-primary/20
                      object-cover
                    "
                  />

                  <div className="min-w-0 flex-1">
                    <h4 className="truncate font-semibold">
                      {review.customer.name}
                    </h4>

                    <p className="truncate text-xs text-muted-foreground">
                      Rented {review.gear.name}
                    </p>
                  </div>

                  {/* Gear */}

                  <img
                    src={
                      review.gear.image ||
                      'https://placehold.co/60x60?text=Gear'
                    }
                    alt={review.gear.name}
                    className="
                      h-11
                      w-11
                      rounded-xl
                      border
                      object-cover
                    "
                  />
                </div>
              </div>

              {/* Glow */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-1
                  scale-x-0
                  bg-gradient-to-r
                  from-violet-500
                  via-fuchsia-500
                  to-purple-500
                  transition-transform
                  duration-300
                  group-hover:scale-x-100
                "
              />
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
