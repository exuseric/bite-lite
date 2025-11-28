"use client"

import { Button } from "react-aria-components";
import Spacer from "@/components/spacer";

export default function CartSummary() {
    return (
        <>
            <header className="space-y-2">
                <h2 className="mb-4">
                    Summary
                </h2>
                <p className="flex flex-row justify-between items-center font-semibold">Subtotal: <span>Ksh 2000</span></p>
                <p className="flex flex-row justify-between items-center font-semibold">Estimated delivery: <span>Ksh 300</span></p>
                <Spacer />
                <p className="flex flex-row justify-between items-center font-bold text-lg">Total: <span>KSh <output id="total">2300</output></span></p>
                <Spacer />
            </header>

            <Button className="btn btn-primary my-4 w-full">
                Checkout
            </Button>
        </>
    )
}