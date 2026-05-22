import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductContent from './ProductContent';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.slug === id);
  if (!product) notFound();
  return <ProductContent product={product} />;
}
