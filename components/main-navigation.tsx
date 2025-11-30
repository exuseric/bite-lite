import CartDrawer from "@/components/cart/cart-drawer";
import ProductSearchComponent from "@/components/filter/product-search";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="py-safe-top px-4 sticky bg-background top-0 z-1 w-full h-20 isolate flex flex-col justify-between items-center gap-x-2">
      <div className="flex flex-row items-center w-full layout-grid  rounded-sm relative isolate">
        <Link href="/" className="font-semibold min-w-20">
          Bite Lite
        </Link>
        <div className="actions col-start-2 -col-end-1 flex flex-row items-end justify-end w-full gap-x-2">
          <ProductSearchComponent />
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}
