'use client';

import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { Product } from '@/data/products';

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  variant?: string;
  price: string;
  image: string;
  quantity: number;
  selectedSize?: string;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, size?: string) => void;
  removeItem: (slug: string, size?: string) => void;
  updateQuantity: (slug: string, delta: number, size?: string) => void;
  itemCount: number;
  subtotal: string;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addItem = useCallback((product: Product, size?: string) => {
    setItems((prev) => {
      const key = `${product.slug}-${size || ''}`;
      const existing = prev.find((i) => `${i.slug}-${i.selectedSize || ''}` === key);
      if (existing) {
        return prev.map((i) =>
          `${i.slug}-${i.selectedSize || ''}` === key ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { id: product.id, slug: product.slug, name: product.name, variant: product.variant, price: product.price, image: product.images[0], quantity: 1, selectedSize: size }];
    });
    setCartOpen(true);
  }, []);

  const removeItem = useCallback((slug: string, size?: string) => {
    setItems((prev) => prev.filter((i) => `${i.slug}-${i.selectedSize || ''}` !== `${slug}-${size || ''}`));
  }, []);

  const updateQuantity = useCallback((slug: string, delta: number, size?: string) => {
    setItems((prev) =>
      prev.map((i) => {
        if (`${i.slug}-${i.selectedSize || ''}` !== `${slug}-${size || ''}`) return i;
        const next = i.quantity + delta;
        return next > 0 ? { ...i, quantity: next } : i;
      }).filter((i) => i.quantity > 0)
    );
  }, []);

  const itemCount = useMemo(() => items.reduce((s, i) => s + i.quantity, 0), [items]);

  const subtotal = useMemo(() => {
    const total = items.reduce((s, i) => {
      const num = parseFloat(i.price.replace(/[^0-9.]/g, ''));
      return s + num * i.quantity;
    }, 0);
    return `£${total.toFixed(2)}`;
  }, [items]);

  const value = useMemo(() => ({ items, addItem, removeItem, updateQuantity, itemCount, subtotal, cartOpen, setCartOpen }), [items, addItem, removeItem, updateQuantity, itemCount, subtotal, cartOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
