export default function TextSection() {
  return (
    <section className="py-s md:py-m grid-layout bg-white relative">
      <div className="col-span-full md:col-span-6 md:col-start-4 text-center">
        <p className="text-s leading-relaxed">
          <strong>Introducing about:blank // flatlist eyewear<br />&apos;NOT FOR EVERYONE&apos; for spring:summer &apos;26</strong>
        </p>
        <p className="text-xs mt-xs text-grey-45">Exclusively available online.</p>
        <div className="mt-s">
          <a href="/" className="inline-flex items-center justify-center border border-grey-15 text-xs px-xs py-xxs hover:opacity-70 transition-opacity">
            shop:now
          </a>
        </div>
      </div>
    </section>
  );
}
