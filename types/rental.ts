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
}
