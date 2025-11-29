import categoriesData from "@/data/categories.json";
import { create } from "zustand";
import { ProductCategory, ProductItem } from "../types/product-types";

type StoreType = {
  products: ProductItem[];
  categories: ProductCategory[];
  searchTerm: string;
  searchResults: ProductItem[];
  getProducts: () => Promise<void>;
  getCategories: () => Promise<void>;
  setSearchTerm: (term: string) => void;
};

const useProductStore = create<StoreType>((set, get) => ({
  products: [],
  categories: [],
  searchTerm: "",
  searchResults: [],
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
}));

export default useProductStore;
