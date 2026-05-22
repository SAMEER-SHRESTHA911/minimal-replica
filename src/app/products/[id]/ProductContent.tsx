'use client';

import { useState, useMemo } from 'react';
import type { Product } from '@/data/products';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ProductContent({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  const related = useMemo(
    () => products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4),
    [product]
  );

  return (
    <>
      <div className="bg-white relative py-m">
        <div className="grid-layout gap-y-m">
          {/* Image gallery — scrolls naturally */}
          <div className="col-span-full md:col-span-6 flex flex-col gap-xxs">
            {product.images.map((img, i) => (
              <div key={i} className="aspect-[3/4] bg-placeholder">
                <img src={img} alt={product.name} className="size-full object-cover" />
              </div>
            ))}
          </div>

          {/* Product info — sticky */}
          <div className="col-span-full md:col-span-5 md:col-start-8 flex flex-col gap-s md:sticky md:top-(--nav-h) md:self-start">
            <div>
              <h1 className="text-m font-moderat">{product.name}</h1>
              {product.variant && <p className="text-grey-45 text-xs mt-px">{product.variant}</p>}
            </div>

            <div className="text-xs">
              {product.compareAtPrice && <span className="line-through mr-1 text-grey-45">{product.compareAtPrice}</span>}
              <span>{product.price}</span>
            </div>

            {product.colors.length > 0 && (
              <div className="flex gap-1">
                {product.colors.map((c, i) => (
                  <span key={i} className="w-5 h-[4px]" style={{ backgroundColor: c.hex }} title={c.name} />
                ))}
              </div>
            )}

            {product.sizes.length > 0 && (
              <div className="flex flex-wrap gap-xxs">
                {product.sizes.map((size) => (
                  <span key={size} className="border border-grey-80 px-s py-xxs text-xs uppercase">
                    {size}
                  </span>
                ))}
              </div>
            )}

            {/* Buttons side by side */}
            <div className="flex max-md:flex-col gap-xxs">
              <button
                onClick={() => addItem(product)}
                className="bg-black text-white text-xs cursor-pointer hover:opacity-90 transition-opacity w-full md:w-[182px]"
                style={{ height: '60px' }}
              >
                add to bag — {product.price}
              </button>
              <button
                className="border border-black text-black text-xs cursor-pointer hover:opacity-70 transition-opacity bg-transparent w-full md:w-[182px]"
                style={{ height: '60px' }}
              >
                buy now
              </button>
            </div>

            {product.sizes.length > 0 && (
              <button className="w-full border border-grey-80 text-xs py-xxs cursor-pointer hover:opacity-70 transition-opacity bg-transparent">
                notify me
              </button>
            )}

            <p className="text-xs leading-relaxed text-grey-45">{product.description}</p>

            {product.details && product.details.length > 0 && (
              <>
                <ProductAccordion title="details">
                  <ul className="text-xs space-y-1 list-disc list-inside text-grey-45">
                    {product.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </ProductAccordion>
                <div className="border-t border-grey-15" />
              </>
            )}

            <ProductAccordion title="shipping">
              <p className="text-xs text-grey-45">
                Free UK shipping on orders over £200<br />
                Pre-paid returns for UK customers<br />
                Free exchanges for UK customers
              </p>
              <a href="/" className="text-xs underline mt-xxs inline-block hover:opacity-70">shipping and returns</a>
            </ProductAccordion>
            <div className="border-t border-grey-15" />

            {product.sizes.length > 0 && (
              <button className="text-xxs underline text-left hover:opacity-70 cursor-pointer bg-transparent">
                size guide
              </button>
            )}
          </div>
        </div>
      </div>

      {/* You might also like */}
      {related.length > 0 && (
        <div className="bg-white relative pb-m">
          <div className="grid-layout gap-y-s">
            <div className="col-span-full">
              <h2 className="text-xs font-moderat mb-s">you might also like</h2>
            </div>
            {related.map((p) => (
              <div key={p.slug} className="col-span-3">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function ProductAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-xs py-xxs bg-transparent cursor-pointer hover:opacity-70"
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>
      {open && <div className="pb-xxs">{children}</div>}
    </div>
  );
}
