import useProductStore from "@/store/product-store";
import { ProductCategory } from "@/types/product-types";
import { Check, ChevronDown, RotateCcw } from "lucide-react";
import { useRef } from "react";
import { Button, Form } from "react-aria-components";

export default function CollapsibleFilter({ label, filter }: { filter: ProductCategory[]; label: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const activeCategories = useProductStore((state) => state.activeCategories);
  const clearActiveFilter = useProductStore((state) => state.clearActiveFilter);
  const setActiveFilter = useProductStore((state) => state.setActiveFilter);

  const handleFilter = () => {
    const form = formRef.current;
    if (!form) return;

    const checked = form.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked');

    const selectedIds = new Set<string>();
    checked.forEach((check) => selectedIds.add(check.value));

    setActiveFilter("activeCategories", [...selectedIds]);
  };

  const handleReset = () => {
    formRef?.current?.reset();
    clearActiveFilter("activeCategories");
  };

  return (
    <details name="category" className="appearance-none group" open>
      <summary className="appearance-none flex flex-row items-center cursor-pointer justify-between">
        {label}
        <ChevronDown size={18} className="group-open:rotate-180" />
      </summary>
      <div className="space-y-3">
        <Form ref={formRef}>
          <Button className="btn btn-ghost btn-sm flex flex-row items-start gap-3" onPress={() => handleReset()}>
            <RotateCcw size={14} />
            Reset Filter
          </Button>
          {filter.map((filter) => (
            <label className="flex items-center gap-3 cursor-pointer py-1" key={filter.id}>
              <input
                type="checkbox"
                name={filter.name}
                value={filter.id}
                className="peer sr-only"
                onChange={() => handleFilter()}
                checked={activeCategories.includes(filter.id)}
              />
              <span
                className="h-4 w-4 group border border-background-elevated-4 rounded-sm flex items-center justify-center
                     peer-checked:bg-primary-500 peer-checked:text-on-primary peer-checked:border-primary-500
                     transition"
              >
                <Check size={18} className="hidden group-peer-checked:block" />
              </span>

              <span className="capitalize">{filter.name}</span>
            </label>
          ))}
        </Form>
      </div>
    </details>
  );
}
