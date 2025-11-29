import { create } from "zustand";
import { ProductCategory, ProductItem } from "../types/product-types";

type StoreType = {
  products: ProductItem[];
  categories: ProductCategory[];
};

const useProductStore = create<StoreType>((set) => ({
  products: [],
  categories: [],
}));

export default useProductStore;
