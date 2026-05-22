'use client';

import { useState, useEffect } from 'react';
import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ALL_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function ProductCard({ product }: { product: Product }) {
  const uid = `qb-${product.id}`;
  const [lookMode, setLookMode] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const { addItem } = useCart();

  useEffect(() => {
    const stored = sessionStorage.getItem('ab_collection_view');
    setLookMode(stored === '1');

    const handler = (e: Event) => {
      setLookMode((e as CustomEvent).detail.look);
    };
    window.addEventListener('collection-view-change', handler);
    return () => window.removeEventListener('collection-view-change', handler);
  }, []);

  const productImg = product.images[0];
  const lookImg = product.images[1] || product.images[0];
  const currentImg = hovering ? (lookMode ? productImg : lookImg) : (lookMode ? lookImg : productImg);

  const sizesUnavailable = product.sizes.length > 0
    ? ALL_SIZES.filter(s => !product.sizes.includes(s))
    : [];

  return (
    <article className="group text-xs">
      <div className="relative overflow-hidden bg-placeholder" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        <input type="checkbox" id={uid} className="peer hidden" />

        <div className="aspect-[3/4] cursor-pointer">
          <img
            src={currentImg}
            alt={product.name}
            className="size-full object-cover transition-opacity duration-280"
            loading="lazy"
          />
        </div>

        {product.badge && (
          <span className="absolute top-0 left-0 p-0.5 text-grey-45">{product.badge}</span>
        )}

        <button className="absolute top-0 right-0 p-0.5 bg-transparent cursor-pointer" aria-label="Add to wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 1v12l4-3 4 3V1H1z" />
          </svg>
        </button>

        {/* Circular plus button */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-xxs translate-y-full group-hover:translate-y-0 transition-transform duration-280 max-md:translate-y-0">
          <label htmlFor={uid} className="cursor-pointer" aria-label="Quick add" onClick={() => setSelectedSize('')}>
            <svg width="21" height="20" fill="none" viewBox="0 0 21 20">
              <rect width="20" height="20" x=".75" fill="#fff" fillOpacity=".6" rx="10" />
              <path fill="#000" d="M10.25 14.5h1v-4h4v-1h-4v-4h-1v4h-4v1h4z" />
            </svg>
          </label>
        </div>

        {/* Quick buy panel */}
        <div className="z-10 peer-checked:translate-y-0 duration-280 absolute bottom-0 left-0 grid w-full translate-y-full transition-transform">
          <div className="p-gutter md:p-xs gap-xs relative grid w-full bg-white/80 backdrop-blur-sm">
            <button
              onClick={() => {
                const cb = document.getElementById(uid) as HTMLInputElement;
                if (cb) cb.checked = false;
                setSelectedSize('');
              }}
              className="p-xs absolute right-0 top-0 bg-transparent cursor-pointer z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 11.7 11.7" width="12" height="12" stroke="currentColor">
                <path d="M11.3.4.4 11.3" /><path d="M.4.4l10.9 10.9" />
              </svg>
            </button>

            <a href={product.href} className="grid w-full grid-cols-6 items-center gap-1" data-product="">
              <div className="w-full bg-placeholder" style={{ aspectRatio: '3/4' }}>
                <img src={product.images[0]} alt={product.name} className="size-full object-cover" />
              </div>
              <div className="col-span-5">
                <h3 className="font-moderat">{product.name}</h3>
                <div className="gap-xxxs text-grey-45 flex items-center" style={{ fontSize: '0.75rem' }}>
                  view product
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" fill="none" viewBox="0 0 12 8">
                    <path stroke="currentColor" strokeWidth=".75" d="M1 4h10M8 .5 11 4 8 7.5" />
                  </svg>
                </div>
              </div>
            </a>

            {product.sizes.length > 0 && (
              <div data-fit="">
                <div style={{ fontSize: '0.75rem' }} className="text-grey-45">model is 6&rsquo;1 / 1.86m and wears a medium</div>
                <div className="gap-xxxs text-grey-45 mb-0.5 flex h-2 items-center" style={{ fontSize: '0.75rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
                    <path stroke="currentColor" strokeWidth=".8" d="M.5 4h14M11.5.2l3 3.8-3 3.8M3.5 7.8l-3-3.8 3-3.8" />
                  </svg>
                  size guide
                </div>
              </div>
            )}

            {product.sizes.length > 0 && (
              <div className="flex flex-wrap gap-xxxs *:hover:z-1">
                {product.sizes.map((size) => (
                  <label
                    key={size}
                    className="border border-grey-80 hover:border-grey-45 hover:bg-grey-15 px-xs py-xxs text-xs uppercase cursor-pointer transition-colors has-checked:border-black has-checked:bg-black has-checked:text-white"
                  >
                    <span>{size}</span>
                    <input type="radio" name={`size-${uid}`} value={size} className="peer hidden" onChange={() => setSelectedSize(size)} />
                  </label>
                ))}
                {sizesUnavailable.map((size) => (
                  <span key={size} className="border border-grey-80 px-xs py-xxs text-xs uppercase text-grey-45">
                    <span className="line-through">{size}</span>
                  </span>
                ))}
              </div>
            )}

            <div className="w-full bg-black text-white" style={{ fontSize: '0.75rem' }}>
              {product.sizes.length === 0 && (
                <button onClick={() => { addItem(product); const cb = document.getElementById(uid) as HTMLInputElement; if (cb) cb.checked = false; }} className="px-xs flex w-full items-center justify-between py-xxs cursor-pointer">
                  <div className="flex gap-x-xxs">{product.price}</div>
                  <div>add to bag</div>
                </button>
              )}

              {product.sizes.length > 0 && (
                selectedSize ? (
                  <button onClick={() => { addItem(product, selectedSize); setSelectedSize(''); const cb = document.getElementById(uid) as HTMLInputElement; if (cb) cb.checked = false; }} className="px-xs flex w-full items-center justify-between py-xxs cursor-pointer">
                    <div className="flex gap-x-xxs">{product.price}</div>
                    <div>add to bag</div>
                  </button>
                ) : (
                  <div className="px-xs flex w-full items-center justify-between py-xxs">
                    <div className="flex gap-x-xxs">{product.price}</div>
                    <div>select size</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-xs mt-0.5" style={{ fontSize: '0.75rem' }}>
        <div className="grid gap-0.5">
          <div className="flex flex-wrap items-baseline gap-x-1 max-md:flex-col">
            <span className="font-moderat">{product.name}</span>
            {product.variant && <span className="text-grey-45">{product.variant}</span>}
          </div>
          {product.colors.length > 0 && (
            <ul className="grid grid-flow-col justify-start gap-px">
              {product.colors.slice(0, 10).map((color, i) => (
                <li key={i} className="w-5 h-[4px]" style={{ backgroundColor: color.hex }} title={color.name} />
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-wrap gap-x-xxs self-baseline text-grey-45">
          {product.compareAtPrice && <span className="line-through mr-px">{product.compareAtPrice}</span>}
          <div>{product.price}</div>
        </div>
      </div>
    </article>
  );
}
