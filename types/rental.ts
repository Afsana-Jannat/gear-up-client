export interface Rental {
  id: string;
  startDate: string;
  endDate: string;
  totalAmount: string;
  status: string;

  gear: {
    id: string;
    name: string;
    brand: string;
    image: string;
  };

  review?: {
    id: string;
  };
}

export interface RentalOrder {
  id: string;
  startDate: string;
  endDate: string;
  totalAmount: string;
  status: string;

  customer: {
    id: string;
    name: string;
    email: string;
  };

  gear: {
    id: string;
    name: string;
  };

  payment?: {
    status: string;
  };
}
