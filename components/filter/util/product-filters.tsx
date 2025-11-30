"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useProductStore from "@/store/product-store";
import { Settings2Icon, X } from "lucide-react";
import { ReactElement } from "react";
import { Button } from "react-aria-components";
import { cn } from "@/lib/utils";

export default function ProductFilters({ children }: { children: ReactElement }) {
  const resetAllFilters = useProductStore((state) => state.resetAllFilters);

  return (
    <>
      <aside className="hidden md:flex md:flex-col md:gap-y-2">{children}</aside>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="btn btn-sm btn-ghost">
              <Settings2Icon size={18} /> <span>Filter</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="px-0 bg-background-elevated-1" side="left">
            <SheetHeader className="grid grid-cols-[1fr_auto] items-center border-b border-b-background-elevated-4">
              <SheetTitle className="">Filter</SheetTitle>
              <SheetDescription className="sr-only">Filter product items</SheetDescription>
              <SheetClose asChild>
                <Button className="btn-icon btn-sm btn-ghost text-foreground">
                  <X size={18} />
                </Button>
              </SheetClose>
            </SheetHeader>
            <div className="px-4">{children}</div>

            <SheetFooter>
              <Button className="btn  btn-secondary-outline" onPress={() => resetAllFilters()}>
                Reset All Filters
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
