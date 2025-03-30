import { z } from "zod";

export const productIdSchema = z.string().brand("ProductId");
export type ProductId = z.infer<typeof productIdSchema>;

export const productSchema = z.object({
  id: productIdSchema,
  name: z.string(),
  description: z.string(),
});

export type Product = z.infer<typeof productSchema>;
