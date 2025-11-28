"use client";

import data from "@/data/dataset.json";
import { Link } from "react-aria-components";
import Spacer from "./spacer";

export default function ProductList() {
  const products = data.categories;
  return (
    <section className="product-list flex flex-col px-4 md:col-start-4 md:-col-end-1 md:max-h-120 md:overscroll-contain md:overflow-y-scroll">
      {products.map((category) => (
        <>
          <article key={category.id} className="flex flex-col items-start gap-y-4">
            <h2 className="font-display text-neutral-700">{category.name}</h2>
            <ul className="flex flex-col gap-y-3 w-full">
              {category.items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/product/${item.slug}`}
                    aria-labelledby={`item-${item.name}`}
                    className="flex flex-col gap-y-2 w-full hover:bg-background-elevated-1 md:px-3 py-4 rounded-md"
                  >
                    <div className="flex flex-row justify-between items-center font-semibold w-full">
                      <span className="item" id={`item-${item.name}`}>
                        {item.name}
                      </span>
                      <span className="text-base max-w-fit justify-self-end">KSh {item.price}</span>
                    </div>
                    <span className="w-full max-w-[35ch]">{item.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </article>
          <Spacer />
        </>
      ))}
    </section>
  );
}
