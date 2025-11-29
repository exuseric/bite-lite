import { create } from "zustand";
import { ProductCategory, ProductItem } from "../types/product-types";
import productData from "@/data/products.json";
import categoriesData from "@/data/categories.json";

type StoreType = {
  products: ProductItem[];
  categories: ProductCategory[];
  getProducts: () => Promise<void>;
  getCategories: () => Promise<void>;
};

const useProductStore = create<StoreType>((set) => ({
  products: [],
  categories: [],
  getProducts: async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    console.log({ data });
    set({ products: data });
  },
  getCategories: async () => {
    await new Promise((r) => setTimeout(r, 300));
    set({ categories: categoriesData.categories });
  },
}));

export default useProductStore;
