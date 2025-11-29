import { ProductItem } from "@/types/product-types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: ProductItem["id"];
  qty: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  updateCart: (args: { productId: CartItem["id"]; changes: { qty: CartItem["qty"] } }) => void;
  removeFromCart: (productId: CartItem["id"]) => void;
  clearCart: () => void;

  // ---- Selectors ----
  cartItemsCount: () => number;
  cartCount: () => number;
  cartTotal: (productMap: Record<string, ProductItem>) => number;
  getItemQty: (productId: CartItem["id"]) => CartItem["qty"];
};

const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find((c) => c.id === product.id);

          if (existing) {
            return {
              cart: state.cart.map((c) => (c.id === product.id ? { ...c, qty: c.qty + product.qty } : c)),
            };
          }

          return { cart: [...state.cart, product] };
        }),

      updateCart: ({ productId, changes }) =>
        set((state) => ({
          cart: state.cart.map((item) => (item.id === productId ? { ...item, ...changes } : item)),
        })),

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      clearCart: () => set({ cart: [] }),

      // ---- Selectors ----

      cartItemsCount: () => get().cart.length, // distinct items

      cartCount: () => get().cart.reduce((sum, item) => sum + item.qty, 0), // total qty

      cartTotal: (productMap) =>
        get().cart.reduce((sum, item) => {
          const product = productMap[item.id];
          if (!product) return sum;
          return sum + product.price * item.qty;
        }, 0),

      getItemQty: (productId) => get().cart.find((item) => item.id === productId)?.qty ?? 0,
    }),
    { name: "cart-store" },
  ),
);

export default useCartStore;
