import { ProductListItem } from "@/entities/product/server";
import { Badge } from "@/shared/ui";
import { cn } from "@/shared/ui/utils";
import Image from "next/image";
import Link from "next/link";

export const ProductListCard = ({
  product,
  className,
}: {
  product: ProductListItem;
  className?: string;
}) => {
  return (
    <Link
      href={`/`}
      className={cn(
        "flex bg-white shadow-md justify-between hover:shadow-xl",
        className,
      )}
    >
      <div className="w-64 h-48 relative">
        <Image
          // src={product.images[0]}
          src={"https://picsum.photos/200"}
          alt="Product logo"
          layout="fill"
        />
        <Badge variant={"secondary"} className="absolute bottom-2 left-2">
          $222
        </Badge>
      </div>
    </Link>
  );
};
