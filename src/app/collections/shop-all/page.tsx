import ProductGrid from "@/components/ProductGrid";
import CollectionToolbar from "@/components/CollectionToolbar";
import { products, categories } from "@/data/products";

export default function ShopAllPage() {
  return (
    <div className="bg-white">
      <div className="grid-layout pt-s pb-s">
        <div className="col-span-full">
          <h1 className="text-m font-moderat">shop:all</h1>
        </div>
        <div className="col-span-full flex flex-wrap gap-xs text-xs mt-xxs">
          {categories.map((cat) => (
            <a key={cat.slug} href={`/collections/${cat.slug}`} className="hover:opacity-70 transition-opacity">
              {cat.name}
            </a>
          ))}
        </div>
      </div>
      <CollectionToolbar />
      <ProductGrid products={products} />
    </div>
  );
}
