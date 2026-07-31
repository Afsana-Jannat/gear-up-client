// 'use client';

// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { CalendarDays, Package, ShieldCheck } from 'lucide-react';

// type Props = {
//   pricePerDay: string;
//   stock: number;
//   availability: string;
// };

// export default function RentCard({ pricePerDay, stock, availability }: Props) {
//   return (
//     <Card className="sticky top-24 rounded-2xl p-6 shadow-lg">
//       <div className="space-y-6">
//         <div>
//           <p className="text-sm text-muted-foreground">Rental Price</p>

//           <h2 className="mt-1 text-4xl font-bold text-primary">
//             ৳{pricePerDay}
//           </h2>

//           <p className="text-sm text-muted-foreground">per day</p>
//         </div>

//         <Badge
//           variant={availability === 'AVAILABLE' ? 'default' : 'destructive'}
//           className="w-fit"
//         >
//           {availability}
//         </Badge>

//         <div className="space-y-3 text-sm">
//           <div className="flex items-center gap-2">
//             <Package className="h-4 w-4" />
//             <span>{stock} item(s) available</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <ShieldCheck className="h-4 w-4 text-green-600" />
//             <span>Verified Provider</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <CalendarDays className="h-4 w-4" />
//             <span>Flexible rental period</span>
//           </div>
//         </div>

//         <Button
//           className="w-full"
//           size="lg"
//           disabled={availability !== 'AVAILABLE'}
//         >
//           Rent Now
//         </Button>
//       </div>
//     </Card>
//   );
// }

'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { CalendarDays, Package, ShieldCheck, Zap } from 'lucide-react';

type Props = {
  pricePerDay: string;
  stock: number;
  availability: string;
};

export default function RentCard({ pricePerDay, stock, availability }: Props) {
  const isAvailable = availability === 'AVAILABLE';

  return (
    <Card
      className="
        overflow-hidden
        rounded-3xl
        border
        shadow-lg
      "
    >
      {/* Header */}
      <div
        className="
          bg-primary/5
          p-6
        "
      >
        <p className="text-sm text-muted-foreground">Rental Price</p>

        <div className="mt-2 flex items-end gap-2">
          <h2
            className="
            text-4xl
            font-black
            text-primary
          "
          >
            ৳{pricePerDay}
          </h2>

          <span
            className="
            mb-1
            text-sm
            text-muted-foreground
          "
          >
            / day
          </span>
        </div>

        <Badge
          variant={isAvailable ? 'default' : 'destructive'}
          className="
            mt-5
            rounded-full
            px-4
          "
        >
          {availability}
        </Badge>
      </div>

      {/* Information */}
      <div className="space-y-5 p-6">
        <div
          className="
          flex
          items-center
          justify-between
          rounded-xl
          bg-muted/50
          p-4
        "
        >
          <div
            className="
            flex
            items-center
            gap-3
          "
          >
            <Package className="h-5 w-5" />

            <span className="text-sm">Available Stock</span>
          </div>

          <span className="font-bold">{stock}</span>
        </div>

        {/* Features */}

        <div className="space-y-4">
          <FeatureItem icon={<ShieldCheck />} text="Verified Provider" />

          <FeatureItem icon={<Zap />} text="Instant Booking" />

          <FeatureItem icon={<CalendarDays />} text="Flexible Rental Period" />
        </div>

        {/* Button */}

        {/* <Button
          size="lg"
          className="
            h-12
            w-full
            rounded-xl
            text-base
            font-semibold
          "
          disabled={!isAvailable}
        >
          {isAvailable ? 'Rent This Gear' : 'Currently Unavailable'}
        </Button> */}
      </div>
    </Card>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div
      className="
      flex
      items-center
      gap-3
      text-sm
      text-muted-foreground
    "
    >
      <span
        className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-lg
        bg-primary/10
        text-primary
      "
      >
        {icon}
      </span>

      <span>{text}</span>
    </div>
  );
}
