import ProductFilter from "@/components/filter/product-filter";
import ProductList from "@/components/product-list";
import products from "@/data/products.json";

export default async function ProductDetailsPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" });
  const data = await res.json();

  return (
    <div className="product-list bg-backgruond-elevated-1">
      <div className="layout-grid gap-y-2! isolate section">
        <ProductFilter />
        <ProductList data={products.products} />
      </div>
    </div>
  );
}
