import ProductList from "@/components/product-list";

export default function MenuPage() {
  return (
    <div className="menu min-h-screen layout-grid">

      <div className="col-span-full md:grid md:grid-cols-subgrid section">
        <ProductList />
      </div>
    </div>
  );
}
