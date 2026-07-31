// export interface Category {
//   id: string;
//   name: string;
//   description: string | null;

//   // Future fields
//   image?: string | null;
//   gearCount?: number;
// }

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string | null;
  gearCount: number;
}

export interface CategoriesResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Category[];
}
