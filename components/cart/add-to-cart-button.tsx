"use client";

import useCartStore, { CartItem } from "@/store/cart-store";
import { Button } from "react-aria-components";

export function AddToCartButton({ product }: { product: CartItem }) {
  const addToCart = useCartStore((state) => state.addToCart);
  console.log(addToCart);
  return (
    <Button className="bg-primary-500 w-full px-4 py-3 rounded-full cursor-pointer" onPress={() => addToCart(product)}>
      Add to Cart
    </Button>
  );
}
