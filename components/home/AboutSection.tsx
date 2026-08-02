import { ShieldCheck, CalendarCheck, CreditCard } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Verified Providers',
    text: 'Rent from trusted gear owners.',
  },
  {
    icon: CalendarCheck,
    title: 'Flexible Rentals',
    text: 'Choose your preferred rental period.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payment',
    text: 'Safe and simple checkout.',
  },
];

export default function AboutSection() {
  return (
    <section className="py-6">
      <div
        className="
        mx-auto
        grid
        max-w-6xl
        items-center
        gap-12
        px-6
        md:grid-cols-2
      "
      >
        {/* LEFT IMAGE */}

        <div className="relative h-[520px]">
          {/* Main Image */}

          <div
            className="
      absolute
      left-0
      top-10
      overflow-hidden
      rounded-[40px]
      shadow-xl
    "
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmun-LxqIbiZrD6NnWR4Eu4v3AIK1rmt905G7w1KAJCg&s=10"
              alt="Camping gear"
              className="
        h-[420px]
        w-[360px]
        object-cover
      "
            />
          </div>

          {/* Top Right Image */}

          <div
            className="
      absolute
      right-0
      top-0
      overflow-hidden
      rounded-3xl
      border-8
      border-background
      shadow-lg
    "
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3k7mleIaVosXNfrju091a3Z9BfNNAkfPCVZQT2szeF54_nuFs1go70g8&s=10"
              alt="Outdoor activity"
              className="
        h-[180px]
        w-[180px]
        object-cover
      "
            />
          </div>

          {/* Bottom Right Image */}

          <div
            className="
      absolute
      bottom-5
      right-5
      overflow-hidden
      rounded-3xl
      border-8
      border-background
      shadow-lg
    "
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ4HJDLdpJ0hWTHE6gIOFoLvjE5IR9mNzUsdXUhTFYQ&s=10"
              alt="Sports gear"
              className="
        h-[150px]
        w-[150px]
        object-cover
      "
            />
          </div>

          {/* Floating Card */}

          <div
            className="
      absolute
      bottom-12
      left-20
      rounded-3xl
      bg-background
      px-6
      py-4
      shadow-xl
    "
          >
            <p
              className="
        text-3xl
        font-black
        text-primary
      "
            >
              500+
            </p>

            <p
              className="
        text-sm
        text-muted-foreground
      "
            >
              Available Gears
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}

        <div>
          <p
            className="
            mb-3
            font-bold
            text-primary
          "
          >
            ABOUT GEARUP
          </p>

          <h2
            className="
            text-4xl
            font-black
            leading-tight
          "
          >
            Rent Outdoor Gear
            <br />
            Without Buying
          </h2>

          <p
            className="
            mt-5
            leading-8
            text-muted-foreground
          "
          >
            GearUp makes outdoor adventures easier by connecting you with
            quality sports and camping gear from trusted providers.
          </p>

          {/* FEATURES */}

          <div
            className="
            mt-8
            space-y-5
          "
          >
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                      flex
                      gap-4
                    "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary/10
                      text-primary
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3
                      className="
                        font-bold
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-sm
                        text-muted-foreground
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
