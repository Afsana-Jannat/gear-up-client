// import { Rental } from '@/types/rental';
// import RentalRow from './RentalRow';

// type Props = {
//   rentals: Rental[];
// };

// export default function RentalTable({ rentals }: Props) {
//   if (!rentals || rentals.length === 0) {
//     return (
//       <div className="rounded-2xl border py-20 text-center">
//         <h3 className="text-xl font-semibold">No rentals found</h3>

//         <p className="mt-2 text-muted-foreground">
//           Start renting your first gear.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-5">
//       {rentals.map((rental) => (
//         <RentalRow key={rental.id} rental={rental} />
//       ))}
//     </div>

//   );
// }

import { Rental } from '@/types/rental';

import RentalRow from './RentalRow';

type Props = {
  rentals: Rental[];
};

export default function RentalTable({ rentals }: Props) {
  if (!rentals || rentals.length === 0) {
    return (
      <div className="rounded-2xl border py-20 text-center">
        <h3 className="text-xl font-semibold">No rentals found</h3>

        <p className="mt-2 text-muted-foreground">
          Start renting your first gear.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {rentals.map((rental) => (
        <RentalRow key={rental.id} rental={rental} />
      ))}
    </div>
  );
}
