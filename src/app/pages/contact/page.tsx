export default function ContactPage() {
  return (
    <div className="bg-white relative py-s md:py-m">
      <div className="grid-layout gap-y-s">
        <div className="col-span-full md:col-span-8 md:col-start-3 text-center">
          <h1 className="text-m font-moderat">contact</h1>
        </div>

        <div className="col-span-full md:col-span-6 md:col-start-4 text-xs leading-relaxed space-y-s">
          <p>
            For general enquiries, please email us at <a href="mailto:hello@about-blank.com" className="underline hover:opacity-70">hello@about-blank.com</a>
          </p>
          <p>
            For order-related questions, include your order number and we&apos;ll get back to you within 48 hours.
          </p>
          <p className="text-grey-45">
            about:blank London<br />
            Unit 4, 123 Hackney Road<br />
            London E2 8GY<br />
            United Kingdom
          </p>
          <div className="flex gap-s pt-xs">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">instagram</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">tiktok</a>
          </div>
        </div>
      </div>
    </div>
  );
}
