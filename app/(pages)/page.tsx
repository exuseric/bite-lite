import ProductFilter from "@/components/filter/product-filter";
import ProductList from "@/components/product-list";

export default function ProductDetailsPage() {
  return (
    <div className="product-list bg-backgruond-elevated-1 section">
      <div className="layout-grid gap-y-2! isolate">
        <ProductFilter />
        <ProductList />
      </div>
    </div>
  );
}
