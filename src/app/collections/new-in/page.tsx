import ProductGrid from "@/components/ProductGrid";
import CollectionToolbar from "@/components/CollectionToolbar";
import { products } from "@/data/products";

export default function NewInPage() {
  const newProducts = products.filter((p) => p.badge === 'new:in');
  return (
    <div className="bg-white">
      <div
        className="md:stack -mt-(--button-m) gap-y-s py-s grid items-start"
        id="collection-header"
      >
        <h1 className="md:h-(--button-m) grid place-content-center text-center max-md:text-xs">
          new in
        </h1>
      </div>
      <CollectionToolbar />
      <ProductGrid products={newProducts.length > 0 ? newProducts : products} />
    </div>
  );
}
