export interface Review {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;

  customer: {
    name: string;
    avatar?: string;
  };

  gear: {
    id: string;
    name: string;
    image?: string;
  };
}
