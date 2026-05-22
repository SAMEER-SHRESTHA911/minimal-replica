'use client';

import { useState, useEffect } from 'react';

function ChevronDown() {
  return (
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none">
      <path d="M1.13672 5.54004L7.50068 11.904L13.8646 5.54004" stroke="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 11.7 11.7" width="12" height="12" stroke="currentColor">
      <path d="M11.3.4.4 11.3" /><path d="M.4.4l10.9 10.9" />
    </svg>
  );
}

function FilterSection({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(id === 'sort-by');
  return (
    <div className="border-b border-grey-15">
      <input id={id} type="checkbox" className="peer hidden" checked={open} onChange={() => setOpen(!open)} />
      <label htmlFor={id} className="p-xs flex w-full items-center justify-between cursor-pointer">
        <span className="text-xs">{label}</span>
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" className={`transition-transform ${open ? '-scale-y-100' : ''}`}>
          <path d="M1.13672 5.54004L7.50068 11.904L13.8646 5.54004" stroke="currentColor" />
        </svg>
      </label>
      <div className={`px-xs pb-xs ${open ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
}

const sortOptions = [
  'Featured', 'Most relevant', 'Best selling', 'Alphabetically, A-Z', 'Alphabetically, Z-A',
  'Price, low to high', 'Price, high to low', 'Date, old to new', 'Date, new to old',
];

const productTypes = ['accessories', 'Denim Jeans', 'Denim Shorts', 'hoodie', 'jacket', 'knitwear', 'Shirt', 'Short', 'sweatshirt', 'T-Shirt', 'Trousers', 'vest'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36', '38', 'O/S'];
const colours = ['antique black', 'black', 'blue', 'blue wash', 'brushed gold/tortoise', 'champagne/brown', 'ecru', 'green', 'grey', 'grey marl/yellow', 'grey pinstripe', 'matte black/green', 'murky wash', 'oat', 'olive', 'raw indigo', 'tan', 'washed', 'washed red/ecru', 'yellow/ecru'];
const fits = ['cropped and boxy', 'traditional oversized'];
const availabilities = ['In stock', 'Out of stock'];

export default function FiltersDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-black/20" onClick={onClose} />}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 md:w-96 bg-white/90 backdrop-blur-sm border-l border-grey-15 grid grid-rows-[auto_1fr_auto] transition-transform duration-280 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-xs border-b border-grey-15">
          <h2 className="text-xs">filter and sort</h2>
          <button onClick={onClose} className="bg-transparent cursor-pointer"><CloseIcon /></button>
        </div>

        <div className="no-scrollbar h-full overflow-y-auto">
          <form id="collection-filters-form" method="get" className="pb-m">
            <FilterSection id="sort-by" label="sort by">
              <fieldset className="grid lowercase gap-0.5">
                {sortOptions.map((opt) => (
                  <label key={opt} className="flex items-center gap-1 text-xs cursor-pointer hover:opacity-70">
                    <input type="radio" name="sort_by" value={opt.toLowerCase().replace(/[^a-z]+/g, '-')} className="accent-black" />
                    <span>{opt}</span>
                  </label>
                ))}
              </fieldset>
            </FilterSection>

            <FilterSection id="product-type" label="product type">
              <fieldset className="grid lowercase gap-0.5">
                {productTypes.map((t) => (
                  <label key={t} className="flex items-center gap-1 text-xs cursor-pointer hover:opacity-70">
                    <input type="checkbox" name="filter.p.product_type" value={t} className="accent-black" />
                    <span>{t}</span>
                  </label>
                ))}
              </fieldset>
            </FilterSection>

            <FilterSection id="size" label="size">
              <fieldset className="grid grid-cols-2 gap-0.5">
                {sizes.map((s) => (
                  <label key={s} className="flex items-center gap-1 text-xs cursor-pointer hover:opacity-70">
                    <input type="checkbox" name="filter.v.option.size" value={s} className="accent-black" />
                    <span>{s}</span>
                  </label>
                ))}
              </fieldset>
            </FilterSection>

            <FilterSection id="colour" label="colour">
              <fieldset className="grid lowercase gap-0.5">
                {colours.map((c) => (
                  <label key={c} className="flex items-center gap-1 text-xs cursor-pointer hover:opacity-70">
                    <input type="checkbox" name="filter.p.m.custom.colour_name" value={c} className="accent-black" />
                    <span>{c}</span>
                  </label>
                ))}
              </fieldset>
            </FilterSection>

            <FilterSection id="fit" label="fit">
              <fieldset className="grid lowercase gap-0.5">
                {fits.map((f) => (
                  <label key={f} className="flex items-center gap-1 text-xs cursor-pointer hover:opacity-70">
                    <input type="checkbox" name="filter.p.m.custom.fit" value={f} className="accent-black" />
                    <span>{f}</span>
                  </label>
                ))}
              </fieldset>
            </FilterSection>

            <FilterSection id="availability" label="availability">
              <fieldset className="grid lowercase gap-0.5">
                {availabilities.map((a) => (
                  <label key={a} className="flex items-center gap-1 text-xs cursor-pointer hover:opacity-70">
                    <input type="checkbox" name="filter.v.availability" value={a === 'In stock' ? '1' : '0'} className="accent-black" />
                    <span>{a}</span>
                  </label>
                ))}
              </fieldset>
            </FilterSection>
          </form>
        </div>

        <div className="flex gap-xxs p-xs border-t border-grey-15 *:flex-1">
          <a href="/collections/new-in" className="flex items-center justify-center border border-grey-15 text-xs py-xxs">clear all</a>
          <label htmlFor="filters-drawer-toggle" onClick={onClose} className="flex items-center justify-center bg-black text-white text-xs py-xxs cursor-pointer">
            view (72)
          </label>
        </div>
      </div>
    </>
  );
}
