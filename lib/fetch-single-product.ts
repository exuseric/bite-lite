import { ProductItem } from "@/types/product-types";
import type { CartItem } from "@/store/cart-store";
import data from "@/data/products.json";

export default async function fetchSingleProduct(id: ProductItem["id"]): Promise<CartItem> {
  const product = data.products.find((product) => product.id === id);
  await new Promise((r) => setTimeout(r, 1000));

  if (!product) {
    throw new Error(`Product with id '${id}' not found`);
  }

  // Ensure we return a fully-typed CartItem (ProductItem + qty)
  return { ...product, qty: 1 };
}