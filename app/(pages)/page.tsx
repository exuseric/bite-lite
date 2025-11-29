import ProductFilter from "@/components/filter/product-filter";
import ProductSearchComponent from "@/components/filter/product-search";
import ProductList from "@/components/product-list";

export default function MenuPage() {
  return (
    <div className="product-list bg-backgruond-elevated-1 section">
      <div className="layout-grid">
        <div className="filters col-span-full w-full h-full md:py-2 md:px-4 sticky top-4 z-50 flex flex-row gap-x-2 justify-between items-center">
          <ProductFilter />
          <ProductSearchComponent />
        </div>
        <ProductList />
      </div>
    </div>
  );
}
