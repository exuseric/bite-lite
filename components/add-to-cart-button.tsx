"use client"

import { Button } from "react-aria-components"

export function AddToCartButton({ productId }: { productId: string }) {
    return (
        <Button className="bg-primary-500 w-full px-4 py-3 rounded-full">
            Add to Cart
        </Button>
    )
}
