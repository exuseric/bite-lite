import { ProductItem } from "@/types/product-types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = ProductItem & {
  qty: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  updateQuantity: (args: { productId: CartItem["id"]; qty: CartItem["qty"] }) => void;
  removeFromCart: (productId: CartItem["id"]) => void;
  clearCart: () => void;
};

const useCartStore = create(
  persist<CartStore>(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find((c) => c.id === product.id);

          if (existing) {
            return {
              cart: state.cart.map((c) => (c.id === product.id ? { ...c, qty: c.qty + 1 } : c)),
            };
          }

          return {
            cart: [...state.cart, product],
          };
        }),

      updateQuantity: ({ productId, qty }) =>
        set((state) => {
          if (qty <= 0) {
            return {
              cart: state.cart.map((item) => (item.id === productId ? { ...item, qty: 1 } : item)),
            };
          }

          return {
            cart: state.cart.map((item) => (item.id === productId ? { ...item, qty } : item)),
          };
        }),

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart-store" },
  ),
);
export const cartCount = (state: CartStore) => state.cart.length;
export const cartTotalPrice = (state: CartStore) =>
  state.cart.reduce((total, item) => {
    const itemPrice = item.price || 0;
    const itemQty = item.qty || 1;

    return total + itemQty * itemPrice;
  }, 0);
export default useCartStore;
