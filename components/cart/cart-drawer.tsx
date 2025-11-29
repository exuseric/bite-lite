"use client";
import useCartStore, { cartCount } from "@/store/cart-store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CartDrawer() {
  const count = useCartStore(cartCount);
  return (
    <Link href="/cart" className="font-semibold btn-icon btn-secondary relative isolate">
      <ShoppingCart size={18} />
      <span className="absolute -top-1 -right-1 rounded-full p-1 bg-primary-elevated-1 aspect-square h-6 w-6 place-content-center flex">
        {count}
      </span>
    </Link>
  );
}
