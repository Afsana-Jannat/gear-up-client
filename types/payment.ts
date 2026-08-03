export interface Payment {
  id: string;

  transactionId: string;

  amount: string;

  method: 'STRIPE';

  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';

  paidAt: string | null;

  createdAt: string;

  rentalOrder: {
    id: string;

    status:
      | 'PLACED'
      | 'CONFIRMED'
      | 'PAID'
      | 'PICKED_UP'
      | 'RETURNED'
      | 'CANCELLED';

    gear: {
      id: string;
      name: string;
      image: string;
    };
  };
}
