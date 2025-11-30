"use client";

import CartItem from "@/components/cart/cart-item";
import CartSummary from "@/components/cart/cart-summary";
import useCartStore from "@/store/cart-store";
import { X } from "lucide-react";
import { Button } from "react-aria-components";

export default function Cart() {
  const items = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <section className="relative section h-full">
      <div className="layout-grid h-inherit">
        <header className="col-span-full h-fit flex flex-row items-center justify-start gap-x-4">
          <h1>Cart</h1>
          <Button className="btn btn-sm btn-destructive-ghost" onPress={() => clearCart()}>
            <X size={16} />
            <span>Clear</span>
          </Button>
        </header>
        <div className="col-span-full md:col-start-1 md:col-end-8 h-fit flex flex-col w-full items-start  gap-y-4">
          {items.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        <div className="summary col-span-full md:col-start-9 md:-col-end-1  align-self-end">
          <CartSummary />
        </div>
      </div>
    </section>
  );
}
