import { getProductList } from "@/entities/product/server";
import { useQuery } from "@tanstack/react-query";

export function useGetProducts() {
  const getProductsQuery = useQuery({
    queryKey: ["products"],
    queryFn: getProductList,
    refetchOnWindowFocus: true,
  });
  return {
    products: getProductsQuery.data,
    isPending: getProductsQuery.isPending,
  };
}
