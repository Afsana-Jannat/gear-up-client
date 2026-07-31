// import { Card } from '@/components/ui/card';
// import { Mail, Phone, MapPin } from 'lucide-react';

// type Props = {
//   provider: {
//     name: string;
//     email: string;
//     phone: string;
//     address: string;
//     avatar: string;
//   };
// };

// export default function ProviderCard({ provider }: Props) {
//   return (
//     <Card className="rounded-2xl p-6">
//       <h3 className="mb-5 text-xl font-semibold">Provider Information</h3>

//       <div className="flex items-center gap-4">
//         <img
//           src={provider.avatar || '/default-avatar.png'}
//           alt={provider.name}
//           width={64}
//           height={64}
//           className="rounded-full object-cover"
//         />

//         <div>
//           <h4 className="font-semibold text-lg">{provider.name}</h4>

//           <p className="text-sm text-muted-foreground">Verified Provider</p>
//         </div>
//       </div>

//       <div className="mt-6 space-y-4 text-sm">
//         <div className="flex items-center gap-3">
//           <Mail size={18} />
//           {provider.email}
//         </div>

//         <div className="flex items-center gap-3">
//           <Phone size={18} />
//           {provider.phone}
//         </div>

//         <div className="flex items-center gap-3">
//           <MapPin size={18} />
//           {provider.address}
//         </div>
//       </div>
//     </Card>
//   );
// }

'use client';

import { Card } from '@/components/ui/card';

import { Mail, MapPin, Phone, ShieldCheck, UserRound } from 'lucide-react';

type Props = {
  provider: {
    name: string;
    email: string;
    phone: string;
    address: string;
    avatar: string;
  };
};

export default function ProviderCard({ provider }: Props) {
  return (
    <Card
      className="
        rounded-3xl
        p-6
        shadow-sm
      "
    >
      {/* Header */}

      <div
        className="
        mb-6
        flex
        items-center
        gap-3
      "
      >
        <div
          className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-primary/10
          text-primary
        "
        >
          <UserRound size={20} />
        </div>

        <div>
          <h2
            className="
            text-xl
            font-bold
          "
          >
            Provider Information
          </h2>

          <p
            className="
            text-sm
            text-muted-foreground
          "
          >
            About the gear owner
          </p>
        </div>
      </div>

      {/* Profile */}

      <div
        className="
        flex
        items-center
        gap-4
        rounded-2xl
        bg-muted/40
        p-4
      "
      >
        <img
          src={provider.avatar || '/default-avatar.png'}
          alt={provider.name}
          className="
            h-16
            w-16
            rounded-full
            object-cover
          "
        />

        <div className="space-y-1">
          <h3
            className="
            text-lg
            font-bold
          "
          >
            {provider.name}
          </h3>

          <div
            className="
            flex
            items-center
            gap-1
            text-sm
            text-green-600
          "
          >
            <ShieldCheck size={16} />
            Verified Provider
          </div>
        </div>
      </div>

      {/* Contact */}

      <div
        className="
        mt-6
        space-y-4
      "
      >
        <InfoItem
          icon={<Mail size={18} />}
          label="Email"
          value={provider.email}
        />

        <InfoItem
          icon={<Phone size={18} />}
          label="Phone"
          value={provider.phone}
        />

        <InfoItem
          icon={<MapPin size={18} />}
          label="Location"
          value={provider.address}
        />
      </div>
    </Card>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
      flex
      gap-3
    "
    >
      <div
        className="
        mt-1
        text-primary
      "
      >
        {icon}
      </div>

      <div>
        <p
          className="
          text-xs
          text-muted-foreground
        "
        >
          {label}
        </p>

        <p
          className="
          text-sm
          font-medium
        "
        >
          {value}
        </p>
      </div>
    </div>
  );
}
