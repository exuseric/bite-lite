"use client";

import useProductStore from "@/store/product-store";
import { ProductItem } from "@/types/product-types";
import Image from "next/image";
import { useEffect } from "react";
import { Link } from "react-aria-components";

export default function ProductList() {
  const products = useProductStore((s) => s.products);
  const getProducts = useProductStore.getState().getProducts; // stable & safe

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-list flex flex-col px-4 col-span-full overscroll-contain md:grid md:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: ProductItem }) {
  return (
    <article key={product.id} className="flex flex-col items-start gap-y-4">
      <Link
        href={`/products/${product.id}`}
        aria-labelledby={`item-${product.name}`}
        className="grid grid-cols-[auto_1fr] md:grid-cols-1 md:grid-rows-[auto_1fr] gap-x-4 items-start gap-y-2 w-full hover:bg-background-elevated-1 md:px-3 py-4 rounded-md isolate"
      >
        <div className="aspect-square w-34 md:w-full md:max-h-60 relative isolate z-1 bg-background-elevated-1">
          <Image src={product.image} fill={true} alt={product.name} style={{ objectFit: "cover", zIndex: 1 }} />
        </div>
        <section className="space-y-2">
          <header className="flex flex-col justify-between font-semibold mb-1">
            <h3 id={`item-${product.name}`} className="text-lg!">
              {product.name}
            </h3>
            <p className="text-base max-w-fit justify-self-end">KSh {product.price}</p>
          </header>
          <p className="w-full max-w-[35ch]">{product.description}</p>
        </section>
      </Link>
    </article>
  );
}
