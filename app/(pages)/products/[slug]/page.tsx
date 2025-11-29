import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import fetchSingleProduct from "@/lib/fetch-single-product";
import { CartItem } from "@/store/cart-store";
import { ProductItem } from "@/types/product-types";
import Image from "next/image";

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const product: ProductItem = await fetchSingleProduct(slug);

  return (
    <section className="section">
      <div className="layout-grid h-fit">
        <div className="col-span-full md:col-start-1 md:col-end-7 bg-background-elevated-1 rounded-md overflow-hidden h-80 relative isolate md:h-96">
          <Image src={product.image} fill={true} alt={product.name} style={{ objectFit: "cover" }} />
        </div>
        <div className="col-span-full md:col-start-8  md:-col-end-1 flex flex-col gap-y-6">
          <header className="mb-2">
            <h1 className="mb-2">{product.name}</h1>
            <p className="text-2xl max-w-prose">KSh {product.price}</p>
          </header>
          <p>{product.description}</p>
          <AddToCartButton product={product as CartItem} />
        </div>
      </div>
    </section>
  );
}
