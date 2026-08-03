export interface ProviderRental {
  id: string;

  startDate: string;
  endDate: string;

  totalAmount: string;

  status:
    | 'PLACED'
    | 'CONFIRMED'
    | 'PAID'
    | 'PICKED_UP'
    | 'RETURNED'
    | 'CANCELLED';

  customer: {
    id: string;
    name: string;
    email: string;
  };

  gear: {
    id: string;
    name: string;
    image: string;
  };

  payment?: {
    status: string;
  };
}
