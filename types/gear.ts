export interface Gear {
  id: string;
  name: string;
  brand: string;
  description: string;
  pricePerDay: string;
  stock: number;
  availability: 'AVAILABLE' | 'OUT_OF_STOCK';
  image: string;

  category: {
    id: string;
    name: string;
    description: string;
    image: string;
  };

  provider: {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    avatar: string;
    role: string;
    status: string;
  };
}
