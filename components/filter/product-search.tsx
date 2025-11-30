"use client";
import useProductStore from "@/store/product-store";
import debounce from "lodash.debounce";
import { ChevronLeft, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Button, Input, Label, SearchField } from "react-aria-components";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function ProductSearchComponent() {
  const searchTerm = useProductStore((state) => state.searchTerm);
  const searchResults = useProductStore((state) => state.searchResults);
  const setSearchTerm = useProductStore((state) => state.setSearchTerm);
  const [localValue, setLocalValue] = useState(searchTerm);

  const DEBOUNCE_DELAY = 200;
  const MAX_SEARCH_RESULTS = 10;

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearchTerm(value);
      }, DEBOUNCE_DELAY),
    [setSearchTerm],
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="btn btn-ghost">
          <Search size={18} />
          Search
        </Button>
      </SheetTrigger>

      <SheetContent className="bg-background-elevated-1">
        <SheetHeader className="pl-1 pr-0 py-0 w-full grid grid-cols-[auto_1fr] items-center border-b border-b-background-elevated-4">
          <SheetTitle className="sr-only">Search</SheetTitle>
          <SheetDescription className="sr-only">Search the food items</SheetDescription>
          <SheetClose asChild>
            <Button className="btn-icon btn-sm btn-ghost text-foreground">
              <ChevronLeft size={18} />
            </Button>
          </SheetClose>

          <SearchField value={localValue}>
            <Label className="sr-only">Search for food items</Label>
            <Input
              className="w-full px-6 py-4 md:py-4 border-l  border-l-background-elevated-4"
              placeholder="Search"
              onChange={(e) => {
                setLocalValue(e.target.value);
                debouncedSearch(e.target.value);
              }}
            />
          </SearchField>
        </SheetHeader>

        <div className="flex flex-col justify-start gap-y-4 h-fit max-h-full overflow-hidden overflow-y-scroll overscroll-contain px-4">
          {searchResults.slice(0, MAX_SEARCH_RESULTS).map((result) => (
            <Link
              href={`/products/${result.id}`}
              className="w-full h-fit space-y-1 flex flex-row items-center gap-x-2 "
              key={result.id}
            >
              <div className="aspect-square h-20 bg-background-elevated-1 mb-0 relative isolate overflow-hidden rounded-sm">
                <Image src={result.image} fill={true} style={{ objectFit: "cover" }} alt={result.name} />
              </div>

              <div className="space-y-2">
                <p className="font-semibold">{result.name}</p>
                <p className="font-semibold text-neutral-700 text-sm">KSh {result.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {searchResults.length > MAX_SEARCH_RESULTS && (
          <SheetFooter className="border-t border-t-background-elevated-1">
            <Button className="btn btn-secondary-outline w-full">
              View All Search Results <span>({searchResults.length})</span>
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
