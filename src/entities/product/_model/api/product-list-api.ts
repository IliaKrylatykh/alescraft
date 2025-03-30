import { Product } from "@/shared/types/product";

export const productListApi = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`/api/products`);
    return response.json();
  } catch (error) {
    console.error(`Failed to fetch school list: ${error}`);
    return [];
  }
};
