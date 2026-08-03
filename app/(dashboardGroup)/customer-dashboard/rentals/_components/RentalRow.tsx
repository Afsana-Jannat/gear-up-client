// 'use client';

// import Link from 'next/link';
// import { CalendarDays, CreditCard } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import { Rental } from '@/types/rental';
// import PayNowButton from './PayNowButton';
// import ReviewDialog from './ReviewDialog';

// type Props = {
//   rental: Rental;
// };
// export default function RentalRow({ rental }: Props) {
//   const isPaid = rental.status === 'PAID';

//   return (
//     <div
//       className="
//         flex
//         flex-col
//         gap-6
//         rounded-3xl
//         border
//         bg-background
//         p-5
//         shadow-sm
//         transition-all
//         hover:shadow-lg
//         lg:flex-row
//         lg:items-center
//         lg:justify-between
//       "
//     >
//       {/* Left */}
//       <div className="flex gap-5">
//         <img
//           src={rental.gear.image}
//           alt={rental.gear.name}
//           className="
//             h-28
//             w-28
//             rounded-2xl
//             object-cover
//             border
//           "
//         />

//         <div className="space-y-3">
//           <div>
//             <h3 className="text-xl font-bold">{rental.gear.name}</h3>

//             <p className="text-sm text-muted-foreground">{rental.gear.brand}</p>
//           </div>

//           <div className="flex items-center gap-2 text-sm text-muted-foreground">
//             <CalendarDays size={16} />

//             <span>
//               {new Date(rental.startDate).toLocaleDateString()} -{' '}
//               {new Date(rental.endDate).toLocaleDateString()}
//             </span>
//           </div>

//           <div className="flex gap-2">
//             {rental.status === 'RETURNED' && (
//               <ReviewDialog rentalOrderId={rental.id} gearId={rental.gear.id} />
//             )}

//             <Badge variant={isPaid ? 'default' : 'secondary'}>
//               {isPaid ? 'Paid' : 'Unpaid'}
//             </Badge>
//           </div>
//         </div>
//       </div>

//       {/* Right */}
//       <div
//         className="
//           flex
//           flex-col
//           items-start
//           gap-4
//           lg:items-end
//         "
//       >
//         <div>
//           <p className="text-sm text-muted-foreground">Total Amount</p>

//           <h2 className="text-3xl font-black text-primary">
//             ৳{Number(rental.totalAmount).toLocaleString()}
//           </h2>
//         </div>
//         {!isPaid && <PayNowButton rentalOrderId={rental.id} />}{' '}
//       </div>
//     </div>
//   );
// }

'use client';

import { CalendarDays } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

import { Rental } from '@/types/rental';

import PayNowButton from './PayNowButton';
import ReviewDialog from './ReviewDialog';
import { useState } from 'react';

type Props = {
  rental: Rental;
};

export default function RentalRow({ rental }: Props) {
  const canPay = rental.status === 'CONFIRMED';

  const isPaid =
    rental.status === 'PAID' ||
    rental.status === 'PICKED_UP' ||
    rental.status === 'RETURNED';

  const [reviewed, setReviewed] = useState(!!rental.review);

  return (
    <div
      className="
        flex
        flex-col
        gap-6
        rounded-3xl
        border
        bg-background
        p-5
        shadow-sm
        transition-all
        hover:shadow-lg
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Left */}
      <div className="flex gap-5">
        <img
          src={rental.gear.image}
          alt={rental.gear.name}
          className="h-28 w-28 rounded-2xl border object-cover"
        />

        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-bold">{rental.gear.name}</h3>

            <p className="text-sm text-muted-foreground">{rental.gear.brand}</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays size={16} />

            <span>
              {new Date(rental.startDate).toLocaleDateString()} -{' '}
              {new Date(rental.endDate).toLocaleDateString()}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={isPaid ? 'default' : 'secondary'}>
              {rental.status}
            </Badge>

            {rental.status === 'RETURNED' &&
              (reviewed ? (
                <Badge className="bg-green-600 text-white hover:bg-green-600">
                  Already Reviewed
                </Badge>
              ) : (
                <ReviewDialog
                  rentalOrderId={rental.id}
                  gearId={rental.gear.id}
                  onSuccess={() => setReviewed(true)}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col items-start gap-4 lg:items-end">
        <div>
          <p className="text-sm text-muted-foreground">Total Amount</p>

          <h2 className="text-3xl font-black text-primary">
            ৳{Number(rental.totalAmount).toLocaleString()}
          </h2>
        </div>

        {canPay && <PayNowButton rentalOrderId={rental.id} />}
      </div>
    </div>
  );
}
