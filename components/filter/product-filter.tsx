"use client";

import CollapsibleFilter from "@/components/filter/util/collapsible-filter";
import ProductFilters from "@/components/filter/util/product-filters";
import useProductStore from "@/store/product-store";
import { useEffect } from "react";

export default function ProductFilter() {
  const categories = useProductStore((s) => s.categories);
  const getCategories = useProductStore.getState().getCategories;

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="filters col-span-full w-full h-full py-2 md:px-4 sticky top-20 z-50 flex flex-row gap-x-2 justify-between items-center bg-background border-b border-b-background-elevated-4">
      <ProductFilters>
        <CollapsibleFilter filter={categories} label="Categories" />
      </ProductFilters>
    </div>
  );
}
