export interface RentalRequest {
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
    phone: string;
  };

  gear: {
    id: string;
    name: string;
    image: string;
  };

  payment: {
    status: string;
  } | null;
}
