export default function AboutUsPage() {
  return (
    <>
      {/* Hero — sticky 90vh with image + about:us heading */}
      <section
        className="relative -mt-[calc(var(--nav-h)+var(--banner-h))] sticky top-0 h-[90vh] -z-1 overflow-hidden"
        style={{ color: '#fff' }}
      >
        <img
          src="https://images.pexels.com/photos/5325768/pexels-photo-5325768.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="absolute inset-0 size-full object-cover -z-1"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="grid-layout absolute inset-0 pb-s md:pb-0 items-end md:items-center">
          <div className="font-moderat col-span-5 md:col-span-6 xl:col-span-4">
            <h1 className="text-[1.8rem] md:text-l">about:us</h1>
          </div>
        </div>
      </section>

      {/* Text 1 — brand origin */}
      <section className="bg-white relative grid-layout py-s md:py-l" style={{ color: '#000' }}>
        <div className="gap-s col-span-full grid md:col-span-6 md:col-start-4">
          <div className="text-xs leading-relaxed space-y-s">
            <p>We started about:blank in 2021 to create contemporary menswear for our friends and community. It began with a single silhouette &mdash; our signature cropped, boxy tee &mdash; which we shared with artists and DJs around the world.</p>
            <p>Through editorial storytelling, focused product, and a commitment to quality, the brand grew quickly. The goal has always been to elevate the everyday through considered materials and sharp design.</p>
          </div>
          <div className="flex gap-s">
            <a className="border border-black px-s py-xs text-xs hover:bg-black hover:text-white transition-colors" href="/collections/new-in">see our latest collection</a>
          </div>
        </div>
      </section>

      {/* Banners 1 — 2 fashion editorial images */}
      <section className="bg-white relative grid gap-0.5 *:w-full md:grid-cols-2 md:px-0.5">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <img src="https://images.pexels.com/photos/9821877/pexels-photo-9821877.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="" className="size-full object-cover" loading="lazy" />
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto">
          <img src="https://images.pexels.com/photos/1343522/pexels-photo-1343522.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="" className="size-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* Text 2 — East London studio */}
      <section className="bg-white relative grid-layout py-s md:py-l" style={{ color: '#000' }}>
        <div className="gap-s col-span-full grid md:col-span-6 md:col-start-4">
          <div className="text-xs leading-relaxed">
            <p>Now based in a former Victorian paper factory in East London, we're a growing team shaping a community-first approach to menswear &mdash; built on limited drops, product innovation, and pieces designed to live with you over time.</p>
          </div>
        </div>
      </section>

      {/* Banners 2 — 2 editorial/lifestyle images */}
      <section className="bg-white relative grid gap-0.5 *:w-full md:grid-cols-2 md:px-0.5">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <img src="https://images.pexels.com/photos/4681539/pexels-photo-4681539.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="" className="size-full object-cover" loading="lazy" />
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto">
          <img src="https://images.pexels.com/photos/19198606/pexels-photo-19198606.png?auto=compress&cs=tinysrgb&w=1000" alt="" className="size-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* Text 3 — community */}
      <section className="bg-white relative grid-layout py-s md:py-l" style={{ color: '#000' }}>
        <div className="gap-s col-span-full grid md:col-span-6 md:col-start-4">
          <div className="text-xs leading-relaxed">
            <p>We create clothes with and for our community &mdash; getting live feedback from our various group channels to continuously improve and evolve. We lock our site on drop days so that our community can have exclusive access to products that typically sell out.</p>
          </div>
        </div>
      </section>

      {/* Banners 3 — 2 fashion/product images */}
      <section className="bg-white relative grid gap-0.5 *:w-full md:grid-cols-2 md:px-0.5">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <img src="https://images.pexels.com/photos/15367479/pexels-photo-15367479.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="" className="size-full object-cover" loading="lazy" />
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto">
          <img src="https://images.pexels.com/photos/12946487/pexels-photo-12946487.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="" className="size-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* Text 2 — East London studio */}
      <section className="bg-white relative grid-layout py-s md:py-l" style={{ color: '#000' }}>
        <div className="gap-s col-span-full grid md:col-span-6 md:col-start-4">
          <div className="text-xs leading-relaxed">
            <p>Now based in a former Victorian paper factory in East London, we're a growing team shaping a community-first approach to menswear &mdash; built on limited drops, product innovation, and pieces designed to live with you over time.</p>
          </div>
        </div>
      </section>

      {/* Banners 2 — 2 editorial/lifestyle images */}
      <section className="bg-white relative grid gap-0.5 *:w-full md:grid-cols-2 md:px-0.5">
        <div className="stack size-full">
          <img src="https://images.pexels.com/photos/4681539/pexels-photo-4681539.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="" className="size-full object-cover" loading="lazy" />
        </div>
        <div className="stack size-full">
          <img src="https://images.pexels.com/photos/19198606/pexels-photo-19198606.png?auto=compress&cs=tinysrgb&w=1000" alt="" className="size-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* Text 3 — community */}
      <section className="bg-white relative grid-layout py-s md:py-l" style={{ color: '#000' }}>
        <div className="gap-s col-span-full grid md:col-span-6 md:col-start-4">
          <div className="text-xs leading-relaxed">
            <p>We create clothes with and for our community &mdash; getting live feedback from our various group channels to continuously improve and evolve. We lock our site on drop days so that our community can have exclusive access to products that typically sell out.</p>
          </div>
        </div>
      </section>

      {/* Banners 3 — 2 fashion/product images */}
      <section className="bg-white relative grid gap-0.5 *:w-full md:grid-cols-2 md:px-0.5">
        <div className="stack size-full">
          <img src="https://images.pexels.com/photos/15367479/pexels-photo-15367479.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="" className="size-full object-cover" loading="lazy" />
        </div>
        <div className="stack size-full">
          <img src="https://images.pexels.com/photos/12946487/pexels-photo-12946487.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="" className="size-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* Text 4 — credit */}
      <section className="bg-white relative grid-layout py-s md:py-l" style={{ color: '#000' }}>
        <div className="gap-s col-span-full grid md:col-span-6 md:col-start-4">
          <div className="text-xs leading-relaxed">
            <p>Site designed and developed by <a href="https://noplans.studio/" target="_blank" className="underline hover:no-underline">No Plans</a> studio.</p>
          </div>
        </div>
      </section>
    </>
  );
}
