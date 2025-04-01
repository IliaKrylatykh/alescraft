import { Container } from "@/shared/ui";
import { ProductList } from "@/widgets/product-list";

export default async function HomePage() {
  return (
    <Container className="px-4">
      <ProductList />
    </Container>
  );
}
