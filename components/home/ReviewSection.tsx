import { MessageSquareQuote } from 'lucide-react';

import { getReviews } from '@/service/review/getReviews';
import ReviewSlider from './ReviewSlide';

export default async function ReviewSection() {
  const reviews = await getReviews();

  if (!reviews?.length) return null;

  return (
    <section className="relative overflow-hidden py-14">
      {/* Background */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              bg-background/70
              px-5
              py-2
              backdrop-blur
            "
          >
            <MessageSquareQuote size={18} className="text-primary" />

            <span className="text-sm font-medium text-muted-foreground">
              Trusted by Outdoor Enthusiasts
            </span>
          </div>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              md:text-5xl
            "
          >
            What Our Customers
            <span className="text-primary"> Say</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-muted-foreground
            "
          >
            Thousands of outdoor lovers trust GearUp to rent quality sports
            equipment. Here's what they experienced after renting from us.
          </p>
        </div>

        {/* Reviews */}

        <ReviewSlider reviews={reviews} />
      </div>
    </section>
  );
}
