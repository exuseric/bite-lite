"use client";

import { Settings2Icon } from "lucide-react";
import { ReactElement } from "react";
import { Button, Dialog, DialogTrigger, Popover } from "react-aria-components";

export default function ProductFiltersPopover({ children }: { children: ReactElement }) {
  return (
    <DialogTrigger>
      <Button className="btn btn-ghost">
        <Settings2Icon size={18} /> <span>Filter</span>
      </Button>
      <Popover
        offset={10}
        placement="bottom"
        className="bg-background border-2 border-background-elevated-4 rounded-md h-fit w-full shadow-lg md:w-fit p-4 max-sm:left-0!"
      >
        <Dialog>{children}</Dialog>
      </Popover>
    </DialogTrigger>
  );
}
