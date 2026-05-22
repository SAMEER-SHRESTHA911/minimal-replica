import Hero from "@/components/Hero";
import TextSection from "@/components/TextSection";
import ProductGrid from "@/components/ProductGrid";
import BannerSection from "@/components/BannerSection";
import { products, banners } from "@/data/products";

export default function Home() {
  return (
    <>
      <Hero />

      <TextSection />

      <ProductGrid products={products.slice(0, 4)} />

      <BannerSection banner={banners[0]} />

      <ProductGrid products={products.slice(4, 8)} />

      <BannerSection banner={banners[1]} />

      <ProductGrid products={products.slice(8, 10).concat(products.slice(0, 2))} />

      <BannerSection banner={banners[2]} />

      <ProductGrid products={products.slice(2, 6)} />
    </>
  );
}
