// import { FilterSearchParams } from "@/features/filters/server";
import { Container } from "@/shared/ui";
import { ProductList } from "@/widgets/product-list";
// import { SidebarFilters } from "@/widgets/filters/client";

export default async function HomePage() {
  // const resolvedSearchParams = await searchParams;

  return (
    <Container className="px-4">
      {/* <SidebarFilters searchParams={resolvedSearchParams} /> */}
      <ProductList />
    </Container>
  );
}
