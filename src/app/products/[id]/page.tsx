import { notFound } from 'next/navigation';
import { products } from '@/data/products';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }));
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // Will resolve params in the component
  return <ProductDetail idPromise={params} />;
}

async function ProductDetail({ idPromise }: { idPromise: Promise<{ id: string }> }) {
  const { id } = await idPromise;
  const product = products.find((p) => p.slug === id);
  if (!product) notFound();

  return (
    <div className="bg-white relative py-m">
      <div className="grid-layout gap-y-s">
        <div className="col-span-full md:col-span-6">
          <div className="aspect-[3/4] bg-placeholder">
            <img src={product.images[0]} alt={product.name} className="size-full object-cover" />
          </div>
        </div>

        <div className="col-span-full md:col-span-5 md:col-start-8 flex flex-col gap-xs">
          <div>
            <h1 className="text-m font-moderat">{product.name}</h1>
            {product.variant && <p className="text-grey-45 text-xs">{product.variant}</p>}
          </div>

          <div className="text-xs">
            {product.compareAtPrice && <span className="line-through mr-1 text-grey-45">{product.compareAtPrice}</span>}
            <span>{product.price}</span>
          </div>

          {product.colors.length > 0 && (
            <div className="flex gap-px">
              {product.colors.map((c, i) => (
                <span key={i} className="w-5 h-[4px]" style={{ backgroundColor: c.hex }} title={c.name} />
              ))}
            </div>
          )}

          <p className="text-xs leading-relaxed text-grey-45">{product.description}</p>

          {product.details && (
            <ul className="text-xs space-y-0.5 list-disc list-inside text-grey-45">
              {product.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}

          {product.sizes.length > 0 && (
            <div className="flex flex-wrap gap-xxxs mt-xxs">
              {product.sizes.map((size) => (
                <span key={size} className="border border-grey-80 px-xs py-xxs text-xs uppercase">
                  {size}
                </span>
              ))}
            </div>
          )}

          <button className="w-full bg-black text-white text-xs py-xxs mt-xs cursor-pointer hover:opacity-90 transition-opacity">
            add to bag — {product.price}
          </button>
        </div>
      </div>
    </div>
  );
}
