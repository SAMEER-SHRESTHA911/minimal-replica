import type { Banner } from '@/data/products';

export default function BannerSection({ banner }: { banner: Banner }) {
  return (
    <section className="grid-layout pb-s bg-white relative">
      <div className="col-span-full relative">
        <img src={banner.src} alt={banner.alt} className="w-full object-cover aspect-[4/3] md:aspect-[21/9] max-h-[50vh]" loading="lazy" />
        {banner.title && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/10">
            <h3 className="text-m font-moderat">{banner.title}</h3>
            {banner.subtitle && <p className="text-xs mt-xxs opacity-80">{banner.subtitle}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
