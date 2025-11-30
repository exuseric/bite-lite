import { create } from "zustand";
import { ProductCategory, ProductItem } from "../types/product-types";

export const FILTER_KEYS = ["activeCategories"] as const;
export type FilterKey = (typeof FILTER_KEYS)[number];

type StoreType = {
  products: ProductItem[];
  categories: ProductCategory[];
  searchTerm: string;
  searchResults: ProductItem[];
  activeCategories: string[];
  filterResults: ProductItem[];
  getProducts: () => Promise<void>;
  getCategories: () => Promise<void>;
  setSearchTerm: (term: string) => void;
  setActiveFilter: (filterKey: FilterKey, categories: string[]) => void;
  setFilterResults: (filterKey: FilterKey) => void;
  clearActiveFilter: (filterKey: FilterKey) => void;
  resetAllFilters: () => void;
};

const useProductStore = create<StoreType>((set, get) => ({
  products: [],
  categories: [],
  searchTerm: "",
  searchResults: [],
  activeCategories: [],
  filterResults: [],

  getProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data });
  },
  getCategories: async () => {
    const res = await fetch("/api/categories");
    const data = await res.json();
    set({ categories: data });
  },
  setSearchTerm: (term: string) => {
    const products = get().products;

    const results =
      term.trim().length === 0 ? [] : products.filter((p) => p.name.toLowerCase().includes(term.toLowerCase()));

    set({
      searchTerm: term,
      searchResults: results,
    });
  },
  setActiveFilter: (filterKey, filterIds) => {
    set({ [filterKey]: filterIds });
    get().setFilterResults(filterKey);
  },
  setFilterResults: (filterKey) => {
    const { [filterKey]: filterValues, products } = get();
    const results = products.filter((p) => filterValues.includes(p.categoryId));

    set({ filterResults: results });
  },
  clearActiveFilter: (filterKey) => {
    get().setActiveFilter(filterKey, []);
  },
  resetAllFilters: () => {
    set({ filterResults: [] });
    FILTER_KEYS.forEach((key) => get().clearActiveFilter(key));
  },
}));

export default useProductStore;
