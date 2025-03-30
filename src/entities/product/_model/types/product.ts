import { z } from "zod";
import { productListItemSchema, productListSchema } from "./schema";

export type ProductListItem = z.infer<typeof productListItemSchema>;
export type ProductList = z.infer<typeof productListSchema>;
