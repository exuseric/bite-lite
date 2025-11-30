"use client";
import useCartStore, { cartCount } from "@/store/cart-store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CartDrawer() {
  const count = useCartStore(cartCount);
  return (
    <Link href="/cart" className="font-semibold btn btn-ghost relative isolate cursor-pointer">
      <ShoppingCart size={18} />
      <span className="rounded-full p-1 bg-background-elevated-1 aspect-square h-6 w-6 place-content-center flex">
        {count}
      </span>
    </Link>
  );
}
