export default function Hero() {
  return (
    <section className="sticky top-0 h-dvh md:h-[90vh] overflow-hidden -mt-[calc(var(--nav-h)+var(--banner-h))] -z-1">
      <picture className="absolute inset-0 -z-1">
        <source
          media="(min-width: 768px)"
          srcSet="https://images.pexels.com/photos/16582072/pexels-photo-16582072.jpeg?auto=compress&cs=tinysrgb&w=2000"
        />
        <img
          src="https://images.pexels.com/photos/16582072/pexels-photo-16582072.jpeg?auto=compress&cs=tinysrgb&w=1000"
          alt="about:blank"
          className="size-full object-cover"
          loading="eager"
        />
      </picture>
      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 grid-layout items-end pb-s md:items-center md:pb-0">
        <div className="col-span-full md:col-span-6 xl:col-span-4 text-white">
          <h1 className="text-[1.8rem] leading-[1.1] md:text-l font-moderat">not for everyone</h1>
          <p className="text-balance mt-xxs text-xs">about:blank // flatlist eyewear</p>
        </div>

        <div className="col-span-full md:col-span-4 xl:col-span-3 md:col-start-9 xl:col-start-10 md:self-center md:text-right text-white mb-s md:mb-0">
          <p className="font-moderat text-xs">exclusively available online:</p>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-white text-white text-xs px-xs py-xxs mt-xxxs hover:opacity-80 transition-opacity"
          >
            shop:now
          </a>
        </div>
      </div>
    </section>
  );
}
