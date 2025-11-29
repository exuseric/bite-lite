"use client";
import useProductStore from "@/store/product-store";
import debounce from "lodash.debounce";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Button, Input, SearchField } from "react-aria-components";

export default function ProductSearchComponent() {
  const searchTerm = useProductStore((state) => state.searchTerm);
  const searchResults = useProductStore((state) => state.searchResults);
  const setSearchTerm = useProductStore((state) => state.setSearchTerm);
  const [localValue, setLocalValue] = useState(searchTerm);

  const DEBOUNCE_DELAY = 200;

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearchTerm(value);
      }, DEBOUNCE_DELAY),
    [setSearchTerm],
  );

  return (
    <div className="w-full relative isolate max-w-80">
      <SearchField value={localValue}>
        <Input
          className="rounded-full w-full px-6 py-4 md:py-2 border border-background-elevated-4"
          placeholder="Search"
          onChange={(e) => {
            setLocalValue(e.target.value);
            debouncedSearch(e.target.value);
          }}
        />
      </SearchField>
      {searchResults.length > 0 && (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min-content,1fr))] gap-2 my-4 col-span-full md:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] absolute top-3/4 inset-x-0 p-2 bg-background shadow-lg  border-2 border-background-elevated-4 rounded-md">
          {searchResults.slice(0, 5).map((result) => (
            <Link
              href={`/products/${result.id}`}
              className="w-full h-full space-y-1 flex flex-row items-center gap-x-2 "
              key={result.id}
            >
              <div className="aspect-square  h-20 bg-background-elevated-1 mb-0 relative isolate overflow-hidden rounded-sm">
                <Image src={result.image} fill={true} style={{ objectFit: "cover" }} alt={result.name} />
              </div>

              <div className="space-y-2">
                <p className="font-semibold">{result.name}</p>
                <p className="font-semibold text-neutral-700 text-sm">KSh {result.price}</p>
              </div>
            </Link>
          ))}
          {searchResults.length > 5 && (
            <Button className="btn btn-sm btn-secondary">
              View All Search Results <span>({searchResults.length})</span>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
