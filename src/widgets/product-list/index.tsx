"use client";

import { useGetProducts } from "@/features/product/_model/use-get-products";
import { Spinner } from "@/shared/ui";

import { cn } from "@/shared/ui/utils";
import { ProductListCard } from "./_ui/product-list-card";

export function ProductList({ className }: { className?: string }) {
  const { products, isPending } = useGetProducts();

  if (isPending) {
    return <Spinner />;
  }

  return (
    <div
      className={cn(
        "w-full grid grid-cols-1 md:grid-cols-5 gap-4 py-4 px-12",
        className,
      )}
    >
      {products?.map((item) => (
        <ProductListCard key={item.id} product={item} />
      ))}
    </div>
  );
}
