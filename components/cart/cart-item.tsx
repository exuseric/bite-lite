"use client";

import type { CartItem } from "@/store/cart-store";
import useCartStore from "@/store/cart-store";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button, Group, Input, NumberField } from "react-aria-components";
import Spacer from "@/components/spacer";
import Link from "next/link";
import { motion } from "motion/react";

export default function CartItems({ item }: { item: CartItem; simple?: boolean }) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const deleteItem = useCartStore((state) => state.removeFromCart);

  return (
    <motion.div
      layout
      variants={{
        hidden: { opacity: 0, y: -10, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "none",
          transition: { ease: ["easeIn", "easeOut"] },
        },
      }}
      exit="hidden"
      animate="visible"
      initial="visible"
      className="w-full"
    >
      <article className="flex flex-row items-center gap-x-4 w-full">
        <div className="aspect-square h-30 w-40 relative bg-background-elevated-1 overflow-hidden rounded-md">
          <Image src={item.image} fill={true} alt={item.name} style={{ objectFit: "cover" }} />
        </div>
        <div className="flex flex-col gap-y-2 font-semibold w-full justify-between">
          <Link href={`/products/${item.id}`}>
            <header>
              <h2 className="text-xl!">{item.name}</h2>
              <p>KSh {item.price}</p>
            </header>
          </Link>
          <div className="flex flex-row gap-x-2 space-y-4 items-end justify-between">
            <NumberField
              defaultValue={1}
              minValue={1}
              maxValue={10}
              aria-label={`change the quantity for ${item.name}`}
              className="mb-0"
            >
              <Group className="grid grid-cols-[1fr_auto_1fr] w-fit border-2 border-background-elevated-4 rounded-full">
                <Button
                  className="justify-self-center btn-icon btn-secondary-ghost place-items-center"
                  slot="decrement"
                  onPress={() => updateQuantity({ productId: item.id, qty: item.qty - 1 })}
                >
                  <Minus size={18} />
                </Button>
                <Input
                  className="max-w-10 aspect-square h-10 w-10 flex place-items-center border border-y-transparent border-x-background-elevated"
                  onChange={(e) => updateQuantity({ productId: item.id, qty: Number(e.target.value) })}
                />
                <Button
                  className="justify-self-center btn-icon place-items-center btn-secondary-ghost"
                  slot="increment"
                  onPress={() => updateQuantity({ productId: item.id, qty: item.qty + 1 })}
                >
                  <Plus size={18} />
                </Button>
              </Group>
            </NumberField>

            <Button
              className="aspect-square btn-icon btn-destructive-ghost"
              slot="decrement"
              onPress={() => deleteItem(item.id)}
            >
              <Trash2 size={18} />
            </Button>
          </div>
        </div>
      </article>
      <Spacer />
    </motion.div>
  );
}
