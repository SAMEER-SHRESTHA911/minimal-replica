'use client';

import { useState, useEffect, useRef } from 'react';
import { useCart } from '@/context/CartContext';

interface NavLink { label: string; href: string; arrow?: boolean }

const shopLinks: NavLink[] = [
  { label: 'spring:summer \'26', href: '/collections/shop-all' },
  { label: 'core:collection', href: '/collections/shop-all' },
  { label: 'new:in', href: '/collections/new-in' },
  { label: 'headwear', href: '/collections/shop-all' },
  { label: 'vests', href: '/collections/shop-all' },
  { label: 't-shirts', href: '/collections/shop-all' },
  { label: 'shirts', href: '/collections/shop-all' },
  { label: 'hoodies & sweats', href: '/collections/shop-all' },
  { label: 'knitwear', href: '/collections/shop-all' },
  { label: 'outerwear', href: '/collections/shop-all' },
  { label: 'shorts', href: '/collections/shop-all' },
  { label: 'legwear', href: '/collections/shop-all' },
  { label: 'denim', href: '/collections/shop-all' },
  { label: 'accessories', href: '/collections/shop-all' },
  { label: 'shop:all', href: '/collections/shop-all', arrow: true },
];

const brandLinks: NavLink[] = [
  { label: 'about:us', href: '/pages/about-us' },
  { label: 'stockists', href: '/pages/about-us' },
  { label: 'journal', href: '/blogs/news' },
];

const infoLinks: NavLink[] = [
  { label: 'contact', href: '/pages/contact' },
  { label: 'instagram', href: 'https://instagram.com' },
  { label: 'tiktok', href: 'https://tiktok.com' },
  { label: 'terms of service', href: '/pages/contact' },
  { label: 'shipping and returns', href: '/pages/contact' },
];

const accountLinks: NavLink[] = [
  { label: 'login', href: '/account/login' },
  { label: 'create an account', href: '/account/login' },
  { label: 'wishlist', href: '/account/login' },
];

const bannerMessages = [
  'about:blank // flatlist eyewear available now',
  "drop:three of spring:summer '26 is now live",
  'US and EU orders now shipped duties & taxes paid',
];

function PromotionalBanner() {
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = sessionStorage.getItem('ab_promotional_banner');
      if (dismissed === '0') setVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    try { sessionStorage.setItem('ab_promotional_banner', '0'); } catch {}
  };
  if (!visible) return null;
  return (
    <div className="h-(--banner-h) flex items-center justify-center text-xs relative" style={{ backgroundColor: '#4e4e4e', color: '#ffffff' }}>
      <a href="/" className="flex items-center gap-xxxs truncate max-w-[65vw]">
        <span className="truncate text-xxs">{bannerMessages[current]}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" fill="none" viewBox="0 0 12 8">
          <path stroke="currentColor" strokeWidth=".75" d="M1 4h10M8 .5 11 4 8 7.5" />
        </svg>
      </a>
      <button onClick={dismiss} className="absolute right-xs top-1/2 -translate-y-1/2 cursor-pointer bg-transparent" aria-label="Close">
        <CrossIcon />
      </button>
    </div>
  );
}

function CrossIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 11.7 11.7" stroke="currentColor">
      <path d="M11.3.4.4 11.3" /><path d="M.4.4l10.9 10.9" />
    </svg>
  );
}

function Logo() {
  return (
    <span className="relative inline-flex items-center">
      <svg viewBox="0 0 161.9 22" className="h-(--logo-h)" fill="currentColor">
        <path d="M4.9 22c-3 0-4.9-1.8-4.9-4.4s2.6-4.9 7.2-5.2l1.9-.2v-.4c0-1.4-.8-2.3-2.2-2.3s-2.2.7-2.4 1.9H.3c.2-3.1 2.9-5.3 6.6-5.3s6.2 2.3 6.2 6v5.5c0 .7.4 1.1 1 1.1h.4l.3 2.9c-.5.2-1.1.3-1.7.3-1.7 0-2.9-.9-3.4-2.3h-.2C8.4 21.2 6.8 22 4.8 22m-.6-4.8c0 .9.6 1.5 1.7 1.5 1.8 0 3.1-1.5 3.1-3.6v-.2H7.5c-2.1.3-3.4 1.1-3.4 2.3M25 22c-2 0-3.8-.8-4.6-2.1h-.2l-.2 1.7h-3.5V0h4v7.9h.2c.9-1.2 2.5-1.8 4.4-1.8 3.9 0 6.8 3.4 6.8 7.9S29 21.9 25 21.9M20.5 14c0 2.7 1.4 4.4 3.6 4.4s3.6-1.8 3.6-4.4-1.5-4.4-3.6-4.4-3.6 1.7-3.6 4.4m21.7 8c-4.6 0-8-3.4-8-7.9s3.5-7.9 8-7.9 8 3.4 8 7.9-3.5 7.9-8 7.9m-3.9-8c0 2.5 1.6 4.3 3.8 4.3s3.8-1.8 3.8-4.3-1.6-4.3-3.8-4.3-3.8 1.8-3.8 4.3m20.3 8c-3.3 0-5.8-2.3-5.8-5.9V6.5h4v8.8c0 2 1.1 3.1 2.8 3.1s3-1.4 3-3.3V6.5h4v15.1h-3.5l-.2-1.6h-.2c-.9 1.3-2.3 2-4.2 2m18.6 0c-3.3 0-5.3-1.8-5.3-5.3V10h-2.9V6.5h.4c1.8 0 2.8-1.1 2.9-3.1V2.1h3.5v4.4h3.6v3.4h-3.6v6.5c0 1.3.8 2.1 2.1 2.1s.9 0 1.2-.2l.5 3.2c-.7.2-1.6.4-2.5.4m6.6-.1c-1.4 0-2.4-1-2.4-2.3s1.1-2.3 2.4-2.3 2.4 1 2.4 2.3-1 2.3-2.4 2.3M81.2 8.6c0-1.3 1.1-2.3 2.4-2.3S86 7.4 86 8.6s-1 2.3-2.4 2.3-2.4-1.1-2.4-2.3M97.4 22c-2 0-3.8-.8-4.7-2.1h-.2l-.2 1.7h-3.5V0h4v7.9h.2c.9-1.2 2.6-1.8 4.4-1.8 3.9 0 6.8 3.4 6.8 7.9s-2.9 7.9-6.9 7.9M92.9 14c0 2.7 1.4 4.4 3.6 4.4s3.6-1.8 3.6-4.4-1.5-4.4-3.6-4.4-3.6 1.7-3.6 4.4m14.2 7.6V0h4v21.6zm11.6.4c-3 0-4.9-1.8-4.9-4.4s2.6-4.9 7.2-5.2l1.9-.2v-.4c0-1.4-.8-2.3-2.2-2.3s-2.2.7-2.4 1.9h-4.1c.2-3.1 2.9-5.3 6.6-5.3s6.2 2.3 6.2 6v5.5c0 .7.4 1.1 1 1.1h.4l.3 2.9c-.5.2-1.1.3-1.7.3-1.7 0-2.9-.9-3.4-2.3h-.2c-1.1 1.6-2.7 2.4-4.7 2.4m-.7-4.8c0 .9.6 1.5 1.7 1.5 1.8 0 3.2-1.5 3.2-3.6v-.2h-1.5c-2.1.3-3.4 1.1-3.4 2.3m22.4-4.2c0-2.1-1.1-3.3-2.9-3.3s-3.1 1.4-3.1 3.5v8.4h-4V6.5h3.5l.2 1.6h.2c.9-1.2 2.5-2 4.4-2 3.5 0 5.8 2.4 5.8 6.1v9.4h-4V13Zm7.3 8.6V0h4v11.4h.2l4.9-4.9h5.1l-5.6 5.7 5.6 9.4h-4.6l-3.9-6.6-1.7 1.7v4.9z" />
      </svg>
      <span className="absolute -right-[5.5em] top-1/2 -translate-y-1/2 text-[0.55em] opacity-60 leading-none select-none pointer-events-none tabular-nums font-moderat">by SAMEER</span>
    </span>
  );
}

export default function Header() {
  const { itemCount, setCartOpen: openCart, cartOpen, items, removeItem, updateQuantity, subtotal } = useCart();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpenLocal, setCartOpenLocal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState('shop');
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [panelTop, setPanelTop] = useState(0);

  const showMenu = (menu: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (headerRef.current) setPanelTop(headerRef.current.getBoundingClientRect().bottom);
    setOpenMenu(menu);
  };

  const hideMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 200);
  };

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-50">
        <PromotionalBanner />

        {/* Desktop */}
        <div
          className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center h-(--nav-h) px-gutter border-b border-grey-80 bg-white/80 backdrop-blur-md"
        >
          {/* Left */}
          <div className="flex items-center h-full gap-s text-xs">
            <NavTrigger label="shop" href={shopLinks[0].href} onOpen={() => showMenu('shop')} onClose={hideMenu} />
            <NavTrigger label="brand" href={brandLinks[0].href} onOpen={() => showMenu('brand')} onClose={hideMenu} />
            <a href="/collections/new-in" className="flex items-center h-full border-b border-b-transparent hover:border-b-black transition-colors tabular-nums pt-[0.35em]">new:in</a>
            <a href="/collections/new-in" className="flex items-center h-full border-b border-b-transparent hover:border-b-black transition-colors gap-0.5 tabular-nums pt-[0.35em]">
              about:blank // flatlist
              <sup className="text-[0.6em] ml-px">new</sup>
            </a>
          </div>

          {/* Center Logo */}
          <a href="/" className="flex items-center"><Logo /></a>

          {/* Right */}
          <div className="flex items-center h-full gap-s text-xs justify-end">
            <NavTrigger label="info" href={infoLinks[0].href} onOpen={() => showMenu('info')} onClose={hideMenu} right />
            <NavTrigger label="account" href={accountLinks[0].href} onOpen={() => showMenu('account')} onClose={hideMenu} right />
            <button onClick={() => setSearchOpen(true)} className="flex items-center h-full border-b border-b-transparent hover:border-b-black transition-colors bg-transparent cursor-pointer tabular-nums pt-[0.35em]">
              search
            </button>
            <button onClick={() => openCart(true)} className="flex items-center h-full border-b border-b-transparent hover:border-b-black transition-colors bg-transparent cursor-pointer relative tabular-nums pt-[0.35em]">
              bag<sup className="ml-[0.1em]">{itemCount || ''}</sup>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-between h-(--nav-h) px-gutter border-b border-grey-15 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-xs">
            <button onClick={() => setMobileMenuOpen(true)} className="bg-transparent cursor-pointer" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 5h16" /><path d="M2 10h16" /><path d="M2 15h16" />
              </svg>
            </button>
            <button onClick={() => setSearchOpen(true)} className="bg-transparent cursor-pointer" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="9" r="5" /><path d="m13 13 4 4" />
              </svg>
            </button>
          </div>
          <a href="/"><Logo /></a>
          <button onClick={() => openCart(true)} className="bg-transparent cursor-pointer relative" aria-label="Bag">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 7h10l1.5 11h-13L5 7z" /><path d="M7 7V5a3 3 0 016 0v2" />
            </svg>
            {itemCount > 0 && <sup className="text-xxs absolute top-[0.35em] -right-2">{itemCount}</sup>}
          </button>
        </div>
      </header>

      {/* Mega menu backdrop */}
      {openMenu && <div className="fixed inset-0 z-40" onClick={() => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenMenu(null); }} />}

      {/* Mega menu panel */}
      {openMenu && (
        <div
          className={`fixed z-50 bg-white shadow-md ${openMenu === 'info' || openMenu === 'account' ? 'border-x border-b border-grey-80 right-0 w-1/3' : 'inset-x-0'} flex flex-col`}
          style={{ top: panelTop, bottom: 0 }}
          onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
          onMouseLeave={hideMenu}
        >
          {openMenu === 'shop' || openMenu === 'brand' ? (
            <>
              <div className="p-gutter py-xs border-b border-grey-80 shrink-0">
                <ul className="flex flex-col text-xs gap-xxs">
                  {(openMenu === 'shop' ? shopLinks : brandLinks).map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="flex items-center gap-1 hover:opacity-70 cursor-pointer" onClick={() => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenMenu(null); }}>
                        {link.arrow && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" fill="none" viewBox="0 0 12 8" className="mt-[0.15em]">
                            <path stroke="currentColor" strokeWidth=".75" d="M1 4h10M8 .5 11 4 8 7.5" />
                          </svg>
                        )}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative flex-1 min-h-0 pointer-events-none overflow-hidden">
                <img
                  src={openMenu === 'shop'
                    ? 'https://images.pexels.com/photos/9821877/pexels-photo-9821877.jpeg?auto=compress&cs=tinysrgb&w=1200'
                    : 'https://images.pexels.com/photos/5325768/pexels-photo-5325768.jpeg?auto=compress&cs=tinysrgb&w=1200'}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </>
          ) : (
            <div className="p-gutter py-xs">
              <ul className="flex flex-col text-xs">
                {(openMenu === 'info' ? infoLinks : accountLinks).map((link, i) => (
                  <li key={i} className={i > 0 ? 'mt-xs' : ''}>
                    <a href={link.href} className="flex items-center gap-1 hover:opacity-70 cursor-pointer" onClick={() => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenMenu(null); }}>
                      {link.arrow && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" fill="none" viewBox="0 0 12 8" className="mt-[0.15em]">
                          <path stroke="currentColor" strokeWidth=".75" d="M1 4h10M8 .5 11 4 8 7.5" />
                        </svg>
                      )}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Search Drawer */}
      <Drawer open={searchOpen} onClose={() => setSearchOpen(false)} title="search">
        <div className="p-gutter">
          <input type="text" placeholder="search" className="w-full border border-grey-15 p-xxs text-xs outline-none bg-transparent" autoFocus />
        </div>
        <div className="p-gutter"><p className="text-xs text-grey-45">No results found</p></div>
      </Drawer>

      {/* Cart Drawer */}
      <Drawer open={cartOpen} onClose={() => openCart(false)} title="shopping bag">
        {items.length === 0 ? (
          <div className="flex items-center justify-center flex-1"><p className="text-xs text-grey-45">your bag is empty</p></div>
        ) : (
          <div className="p-gutter flex flex-col gap-xs overflow-y-auto flex-1">
            {items.map((item) => (
              <div key={`${item.slug}-${item.selectedSize || ''}`} className="flex gap-2">
                <div className="w-16 h-20 shrink-0 bg-placeholder">
                  <img src={item.image} alt={item.name} className="size-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-moderat truncate">{item.name}</p>
                  {item.variant && <p className="text-xxs text-grey-45 truncate">{item.variant}</p>}
                  {item.selectedSize && <p className="text-xxs text-grey-45">{item.selectedSize}</p>}
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => updateQuantity(item.slug, -1, item.selectedSize)} className="text-xxs border border-grey-80 px-1 py-0.5 bg-transparent cursor-pointer hover:opacity-70">−</button>
                    <span className="text-xxs">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.slug, 1, item.selectedSize)} className="text-xxs border border-grey-80 px-1 py-0.5 bg-transparent cursor-pointer hover:opacity-70">+</button>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs">{item.price}</p>
                  <button onClick={() => removeItem(item.slug, item.selectedSize)} className="text-xxs text-grey-45 underline mt-1 bg-transparent cursor-pointer hover:opacity-70">remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="p-gutter border-t border-grey-15 space-y-xxs">
          {items.length > 0 && (
            <div className="flex justify-between text-xs mb-xxs">
              <span>subtotal</span>
              <span>{subtotal}</span>
            </div>
          )}
          <button onClick={() => openCart(false)} className="w-full border border-grey-15 text-xs py-xxs bg-transparent cursor-pointer hover:opacity-70">
            {items.length === 0 ? 'continue shopping' : 'checkout'}
          </button>
        </div>
      </Drawer>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute inset-0 bg-white flex flex-col">
            <div className="flex items-center justify-between p-gutter border-b border-grey-15">
              <div className="flex gap-s text-xs">
                {['shop', 'brand', 'new:in'].map((tab) => (
                  <button key={tab} onClick={() => setMobileTab(tab)} className={`bg-transparent cursor-pointer ${mobileTab === tab ? '' : 'opacity-50'}`}>
                    {tab}
                  </button>
                ))}
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="bg-transparent cursor-pointer"><CrossIcon /></button>
            </div>
            <div className="p-gutter flex-1 overflow-auto">
              {mobileTab === 'shop' && (
                <ul className="flex flex-col">{shopLinks.map((link, i) => (
                  <li key={i} className={i > 0 ? 'mt-xs' : ''}><a href={link.href} className="text-xs hover:opacity-70">{link.label}</a></li>
                ))}</ul>
              )}
              {mobileTab === 'brand' && (
                <ul className="flex flex-col">{brandLinks.map((link, i) => (
                  <li key={i} className={i > 0 ? 'mt-xs' : ''}><a href={link.href} className="text-xs hover:opacity-70">{link.label}</a></li>
                ))}</ul>
              )}
              {mobileTab === 'new:in' && <p className="text-xs text-grey-45">new:in collection</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavTrigger({ label, href, onOpen, onClose, right }: { label: string; href: string; onOpen: () => void; onClose: () => void; right?: boolean }) {
  return (
    <div className="relative h-full flex items-center">
      <a href={href} onMouseEnter={onOpen} onMouseLeave={onClose} className="flex items-center h-full border-b border-b-transparent hover:border-b-black transition-colors cursor-pointer tabular-nums pt-[0.35em]">
        {label}
      </a>
    </div>
  );
}

function Drawer({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full md:w-96 bg-white/90 backdrop-blur-sm border-l border-grey-15 grid grid-rows-[auto_1fr]">
        <div className="flex items-center justify-between p-gutter border-b border-grey-15">
          <span className="text-xs">{title}</span>
          <button onClick={onClose} className="bg-transparent cursor-pointer"><CrossIcon /></button>
        </div>
        {children}
      </div>
    </div>
  );
}
