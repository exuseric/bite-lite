export type ProductItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  image: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
};
