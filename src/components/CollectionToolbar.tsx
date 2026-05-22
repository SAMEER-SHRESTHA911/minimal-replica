'use client';

import { useEffect, useRef, useState } from 'react';
import FiltersDrawer from './FiltersDrawer';

export default function CollectionToolbar() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [stickyTop, setStickyTop] = useState(0);
  const toggleRef = useRef<HTMLInputElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('ab_collection_view');
    if (toggleRef.current) {
      toggleRef.current.checked = stored === '1';
    }
  }, []);

  useEffect(() => {
    if (barRef.current) {
      setStickyTop(barRef.current.getBoundingClientRect().top);
    }
  }, []);

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    sessionStorage.setItem('ab_collection_view', e.target.checked ? '1' : '0');
    window.dispatchEvent(new CustomEvent('collection-view-change', { detail: { look: e.target.checked } }));
  };

  return (
    <>
      <div ref={barRef} className="sticky z-20 flex justify-center max-md:shadow-sm md:justify-start md:mx-gutter overflow-x-auto" style={{ top: stickyTop }}>
        <div className="flex w-fit bg-white border-y border-grey-80 md:border-x items-center" style={{ height: 40 }}>
          <label htmlFor="product-card-view" className="flex items-center gap-0.5 cursor-pointer select-none" style={{ padding: '0 30px' }}>
            <input
              ref={toggleRef}
              type="checkbox"
              id="product-card-view"
              className="peer hidden"
              onChange={handleToggleChange}
            />
            <span className="text-xs">product</span>
            <svg width="14" height="4" viewBox="0 0 14 4" className="peer-checked:-scale-x-100">
              <path d="M0 0h14v4H0z" fill="black" />
              <path d="M7 1h6v2H7z" fill="white" />
            </svg>
            <span className="text-xs">look</span>
          </label>

          <button
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-0.5 border-l border-grey-80 bg-transparent cursor-pointer self-stretch"
            style={{ padding: '0 30px' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 14L3 13L11 13L11 14L3 14ZM12 17L12 10L14 10L14 13L17 13L17 14L14 14L14 17L12 17Z" fill="black" />
              <path fillRule="evenodd" clipRule="evenodd" d="M3 7L3 6L6 6L6 7L3 7ZM7 10L7 3L9 3L9 6L17 6L17 7L9 7L9 10L7 10Z" fill="black" />
            </svg>
            <span className="text-xs">filter&nbsp;+&nbsp;sort</span>
          </button>
        </div>
      </div>

      <FiltersDrawer open={filtersOpen} onClose={() => setFiltersOpen(false)} />
    </>
  );
}
