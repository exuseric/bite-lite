"use client";

import { Button } from "react-aria-components";
import Spacer from "@/components/spacer";
import useCartStore, { cartTotalPrice } from "@/store/cart-store";

export default function CartSummary() {
  const DELIVERY_COST = 300;
  const subtotalPrice = useCartStore(cartTotalPrice);
  const finalTotal = subtotalPrice === 0 ? 0 : subtotalPrice + DELIVERY_COST;

  return (
    <div className="md:sticky md:top-1/3">
      <header className="space-y-2">
        <h2 className="mb-4">Summary</h2>
        <p className="flex flex-row justify-between items-center font-semibold">
          Subtotal: <span>Ksh {subtotalPrice.toFixed(2)}</span>
        </p>
        <p className="flex flex-row justify-between items-center font-semibold">
          Estimated delivery: <span>KSh {DELIVERY_COST}</span>
        </p>
        <Spacer />
        <p className="flex flex-row justify-between items-center font-bold text-lg">
          Total:{" "}
          <span>
            KSh <output id="total">{finalTotal.toFixed(2)}</output>
          </span>
        </p>
        <Spacer />
      </header>

      <Button className="btn btn-primary my-4 w-full">Checkout</Button>
    </div>
  );
}
