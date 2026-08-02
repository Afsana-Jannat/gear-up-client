import { Search, CalendarDays, CreditCard, Backpack } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Browse Gear',
    description:
      'Explore camping, hiking, cycling and sports equipment from trusted providers.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Choose Dates',
    description:
      'Select your rental period and confirm your booking in a few clicks.',
    icon: CalendarDays,
  },
  {
    number: '03',
    title: 'Secure Payment',
    description:
      'Complete your payment safely through our secure checkout process.',
    icon: CreditCard,
  },
  {
    number: '04',
    title: 'Enjoy Adventure',
    description: 'Pick up your gear and start your next outdoor experience.',
    icon: Backpack,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-wider text-primary">
            HOW IT WORKS
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Rent Gear in Four Simple Steps
          </h2>

          <p className="mt-4 text-muted-foreground leading-7">
            Getting the gear you need has never been easier. Browse, book and
            enjoy your adventure with confidence.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  bg-card
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-primary/30
                  hover:shadow-xl
                "
              >
                {/* Step Number */}

                <span
                  className="
                    absolute
                    right-6
                    top-5
                    text-5xl
                    font-black
                    text-primary/10
                  "
                >
                  {step.number}
                </span>

                {/* Icon */}

                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon size={28} />
                </div>

                {/* Content */}

                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>

                <p className="leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
