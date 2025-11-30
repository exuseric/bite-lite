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
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const cart = get().cart;

        const exists = cart.some((item) => item.id === product.id);

        if (!exists) {
          set({ cart: [...cart, product] });
        }
      },
      updateQuantity: ({ productId, qty }) => {
        const cart = get().cart;
        const newCart = cart.map((item) => (item.id === productId ? { ...item, qty } : item));
        set({ cart: newCart });
        console.log({ productId, qty, newCart });
      },
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

    // console.log({ total, itemQty, itemPrice, cart: state.cart });

    return total + itemQty * itemPrice;
  }, 0);
export default useCartStore;
