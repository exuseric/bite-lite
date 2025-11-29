import { ProductItem } from "@/types/product-types";
import data from "@/data/products.json";

export default async function fetchSingleProduct(id: ProductItem["id"]) {
  const product = data.products.find((product) => product.id === id);
  await new Promise((r) => setTimeout(r, 1000));
  return product;
}
