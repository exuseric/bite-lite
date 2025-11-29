"use client";

import type { CartItem } from "@/store/cart-store";
import useCartStore from "@/store/cart-store";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button, Group, Input, NumberField } from "react-aria-components";
import Spacer from "@/components/spacer";
import Link from "next/link";

export default function CartItems({ item, simple = false }: { item: CartItem; simple?: boolean }) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const deleteItem = useCartStore((state) => state.removeFromCart);

  return (
    <div className="w-full">
      <article className="flex flex-row items-center gap-x-4 w-full">
        <div className="aspect-square h-30 relative bg-background-elevated-1">
          <Image src={item.image} fill={true} alt={item.name} style={{ objectFit: "cover" }} />
        </div>
        <div className="flex flex-col gap-y-2 font-semibold w-full justify-between">
          <Link href={`/products/${item.id}`}>
            <header>
              <h2 className="text-xl!">{item.name}</h2>
              <p>KSh {item.price}</p>
            </header>
          </Link>
          {!simple && (
            <div className="flex flex-row gap-x-2 space-y-4 items-end justify-between">
              <NumberField
                defaultValue={1}
                minValue={1}
                maxValue={10}
                aria-label={`change the quantity for ${item.name}`}
                className="mb-0"
              >
                <Group className="grid grid-cols-[1fr_auto_1fr] w-fit border border-background-elevated-4 rounded-md">
                  <Button
                    className="justify-self-center btn-icon place-items-center"
                    slot="decrement"
                    onPress={() => updateQuantity({ productId: item.id, qty: item.qty - 1 })}
                  >
                    <Minus size={18} />
                  </Button>
                  <Input
                    className="max-w-10 aspect-square h-10 w-10 flex place-items-center border border-y-transparent border-x-background-elevated-4"
                    onChange={(e) => updateQuantity({ productId: item.id, qty: Number(e.target.value) })}
                  />
                  <Button
                    className="justify-self-center btn-icon place-items-center"
                    slot="increment"
                    onPress={() => updateQuantity({ productId: item.id, qty: item.qty + 1 })}
                  >
                    <Plus size={18} />
                  </Button>
                </Group>
              </NumberField>

              <Button className="aspect-square btn-icon" slot="decrement" onPress={() => deleteItem(item.id)}>
                <Trash2 size={18} />
              </Button>
            </div>
          )}
        </div>
      </article>
      <Spacer />
    </div>
  );
}
