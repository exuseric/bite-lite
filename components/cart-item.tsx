"use client";

import { useState } from "react";
import { Button, Input, NumberField, Group } from "react-aria-components";
import { Plus, Minus, Trash2 } from 'lucide-react';
import Spacer from "@/components/spacer";
import Image from "next/image";

export default function CartItems({ items }: { items: any }) {
    const [cartItems, setItems] = useState(items);

    const updateQuantity = (id: any, qty: any) => {
        console.log(id, qty);
        setItems((prev: any) =>
            prev.map((item: any) =>
                item.id === id ? { ...item, quantity: Number(qty) } : item
            )
        );
    }

    const deleteItem = (id: string) => {
        console.log(id)
    }

    return (
        <ul>
            {cartItems.map((item: any) => (
                <li key={item.id}>
                    <article className="flex flex-row items-center gap-x-4">
                        <div className="aspect-square h-30 relative bg-background-elevated-1">
                            <Image src={item.image} fill={true} alt={item.name} />
                        </div>
                        <div className="flex flex-col gap-y-2 font-semibold w-full justify-between">
                            <header>
                                <h2 className="text-xl!">{item.name}</h2>
                                <p>KSh {item.price}</p>
                            </header>
                            <div className="flex flex-row gap-x-2 space-y-4 items-end justify-between">
                                <NumberField defaultValue={item.quantity} minValue={1} maxValue={10} aria-label={`change the quantity for ${item.name}`} className="mb-0">
                                    <Group className="grid grid-cols-[1fr_auto_1fr] w-fit border border-background-elevated-4 rounded-md">
                                        <Button className="justify-self-center btn-icon place-items-center" slot="decrement" onPress={() => updateQuantity(item.id, item.quantity - 1)}>
                                            <Minus size={18} />
                                        </Button>
                                        <Input className="max-w-10 aspect-square h-10 w-10 flex place-items-center border border-y-transparent border-x-background-elevated-4" />
                                        <Button className="justify-self-center btn-icon place-items-center" slot="increment" onPress={() => updateQuantity(item.id, item.quantity + 1)}>
                                            <Plus size={18} />
                                        </Button>
                                    </Group>
                                </NumberField>

                                <Button className="aspect-square btn-icon" slot="decrement" onPress={() => deleteItem(item.id)}>
                                    <Trash2 size={18} />
                                </Button>

                            </div>
                        </div>

                    </article>
                    <Spacer />
                </li >
            ))
            }
        </ul >
    );
}
