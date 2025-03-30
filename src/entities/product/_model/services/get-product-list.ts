import { z } from "zod";
import { productListApi } from "../api/product-list-api";
import { productListSchema } from "../types/schema";
import { ProductList } from "../types/product";

export const getProductList = async (): Promise<ProductList> => {
  try {
    const data = await productListApi();

    const validatedData = productListSchema.parse(data);

    return validatedData;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Zod error:", error.errors);
    } else {
      console.error("Error in service:", error);
    }

    throw error;
  }
};
