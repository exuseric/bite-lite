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
    <div className="filters col-span-full md:col-start-1 md:col-end-4 md:h-screen md:justify-start md:items-start md:overflow-hidden md:overflow-y-scroll md:overscroll-contain w-full h-full py-2 md:py-4 md:px-4 sticky top-20 z-50 flex flex-row gap-x-2 justify-between items-center bg-background border-b border-b-background-elevated-4">
      <ProductFilters>
        <CollapsibleFilter filter={categories} label="Categories" />
      </ProductFilters>
    </div>
  );
}
