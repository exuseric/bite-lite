"use client";

import useProductStore from "@/store/product-store";
import { ProductItem } from "@/types/product-types";
import { motion, stagger } from "motion/react";
import Image from "next/image";
import { Suspense, useEffect } from "react";
import { Link } from "react-aria-components";

export default function ProductList({ data }: { data: ProductItem[] }) {
  const products = useProductStore((s) => s.products);
  const filterResults = useProductStore((s) => s.filterResults);

  const setProducts = useProductStore.getState().setProducts;
  const hydrated = useProductStore((s) => s.hydrated);

  const listToShow = filterResults.length > 0 ? filterResults : products;

  useEffect(() => {
    setProducts(data);
  }, [data, setProducts]);

  return (
    <div className="product-list flex flex-col px-4 col-span-full md:col-start-4 md:-col-end-1 md:px-0 overscroll-contain min-h-screen md:grid md:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
      <Suspense fallback={<div>Loading products...</div>}>
        {!hydrated
          ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
          : listToShow.map((product) => <ProductCard product={product} key={product.id} />)}
      </Suspense>
    </div>
  );
}

function Skeleton() {
  return (
    <motion.div
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      transition={{ ease: ["easeIn", "easeOut"] }}
      className="flex flex-col items-start gap-y-4 animate-pulse"
    >
      <div className="grid grid-cols-[auto_1fr] md:grid-cols-1 md:grid-rows-[auto_1fr] gap-x-4 items-start gap-y-2 w-full bg-background-elevated-1 md:px-3 py-4 rounded-md">
        <div className="aspect-square w-34 md:w-full md:max-h-60 bg-gray-200 rounded-md" />
        <section className="space-y-2 flex-1">
          <header className="flex flex-col justify-between mb-1">
            <div className="h-6 w-2/3 bg-gray-300 rounded-md mb-1" /> {/* Title */}
            <div className="h-5 w-1/4 bg-gray-300 rounded-md" /> {/* Price */}
          </header>
          <div className="h-4 w-full max-w-[35ch] bg-gray-300 rounded-md" /> {/* Description */}
        </section>
      </div>
    </motion.div>
  );
}

function ProductCard({ product }: { product: ProductItem }) {
  return (
    <motion.article
      variants={{
        visible: {
          opacity: 1,
          y: 0,
        },
        hidden: { opacity: 0, y: 20 },
      }}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      transition={{ ease: ["easeIn", "easeOut"] }}
      key={product.id}
      className="flex flex-col items-start gap-y-4"
    >
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
    </motion.article>
  );
}
