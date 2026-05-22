import type { Product } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ products: items }: { products: Product[] }) {
  return (
    <section className="grid-layout py-s bg-white relative">
      <div className="col-span-full grid grid-cols-2 md:grid-cols-4 gap-x-card-gap gap-y-s">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
