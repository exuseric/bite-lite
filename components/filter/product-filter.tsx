"use client";

import CollapsibleFilter from "@/components/filter/util/collapsible-filter";
import ProductFiltersPopover from "@/components/filter/util/product-filters-popover";
import useProductStore from "@/store/product-store";
import { useEffect } from "react";

export default function ProductFilter() {
  const categories = useProductStore((s) => s.categories);
  const getCategories = useProductStore.getState().getCategories;

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <ProductFiltersPopover>
      <CollapsibleFilter filter={categories} label="Categories" />
    </ProductFiltersPopover>
  );
}
