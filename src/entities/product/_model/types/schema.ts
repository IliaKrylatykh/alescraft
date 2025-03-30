import { z } from "zod";
import { productSchema } from "@/shared/types/product";

export const productListItemSchema = productSchema.pick({
  id: true,
  name: true,
});

export const productListSchema = z.array(productListItemSchema);
