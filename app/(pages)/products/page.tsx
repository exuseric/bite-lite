import ProductList from "@/components/product-list";

export default function MenuPage() {
  return (
    <div className="menu min-h-screen layout-grid">
      <header className="col-span-full px-4 py-12 bg-primary-elevated-1 h-fit text-primary-900">
        <h1 className="display">The Quickest Way to Bite.</h1>
      </header>

      <div className="col-span-full md:grid md:grid-cols-subgrid">
        <ProductList />
      </div>
    </div>
  );
}
