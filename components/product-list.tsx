"use client";

import data from "@/data/dataset.json";
import { Link } from "react-aria-components";
import Spacer from "./spacer";
import Image from "next/image";

export default function ProductList() {
  const products = data.categories;
  return (
    <div className="product-list flex flex-col md:col-start-4 md:-col-end-1">
      {products.map((category) => (
        <>
          <article key={category.id} className="flex flex-col items-start gap-y-4">
            <h2 className="font-display text-neutral-700">{category.name}</h2>
            <ul className="flex flex-col gap-y-3 w-full md:grid md:grid-cols-[repeat(3,minmax(300px,1fr))]">
              {category.items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/products/${item.slug}`}
                    aria-labelledby={`item-${item.name}`}
                    className="grid grid-cols-[auto_1fr] md:grid-cols-1 md:grid-rows-[auto_1fr] gap-x-4 items-start gap-y-2 w-full hover:bg-background-elevated-1 md:px-3 py-4 rounded-md"
                  >
                    <div className="aspect-square w-34 md:w-full md:max-h-60 relative bg-background-elevated-1">
                      <Image src={item.image} fill={true} alt={item.name} style={{ objectFit: "cover" }} />
                    </div>
                    <section className="space-y-2">
                      <header className="flex flex-col justify-between font-semibold mb-1">
                        <h3 id={`item-${item.name}`} className="text-lg!">{item.name}</h3>
                        <p className="text-base max-w-fit justify-self-end">KSh {item.price}</p>
                      </header>
                      <p className="w-full max-w-[35ch]">{item.description}</p>
                    </section>
                  </Link>
                </li>
              ))}
            </ul>
            <Spacer />
          </article>
        </>
      ))}
    </div>
  );
}