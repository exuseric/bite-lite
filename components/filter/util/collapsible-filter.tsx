import { ProductCategory } from "@/types/product-types";
import { ChevronDown, Check } from "lucide-react";

export default function CollapsibleFilter({ label, filter }: { filter: ProductCategory[]; label: string }) {
  console.log(filter);
  return (
    <details name="category" className="appearance-none group" open>
      <summary className="appearance-none flex flex-row items-center cursor-pointer justify-between">
        {label}
        <ChevronDown size={18} className="group-open:rotate-180" />
      </summary>
      <div className="mt-4 space-y-3">
        {filter.map((filter) => (
          <label className="flex items-center gap-3 cursor-pointer" key={filter.id}>
            <input type="radio" name={label} value={filter.slug} className="peer sr-only" />

            <span
              className="h-4 w-4 group border border-background-elevated-4 rounded-sm flex items-center justify-center
                     peer-checked:bg-primary-500 peer-checked:text-on-primary peer-checked:border-primary-500
                     transition"
            >
              <Check size={18} className="hidden group-peer-checked:block" />
            </span>

            <span>{filter.name}</span>
          </label>
        ))}
      </div>
    </details>
  );
}
