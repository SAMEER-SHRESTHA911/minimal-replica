export default function RegisterPage() {
  return (
    <div className="bg-white relative py-s md:py-m">
      <div className="grid-layout gap-y-s">
        <div className="col-span-full md:col-span-1" />

        <div className="col-span-full md:col-span-5 flex flex-col gap-s">
          <div className="flex items-center gap-1 text-xxs text-grey-45">
            <a href="/account/login" className="hover:opacity-70">/</a>
            <a href="/account/login" className="hover:opacity-70">login</a>
            <span>/</span>
            <span className="text-grey-45">create an account</span>
          </div>

          <h1 className="text-m font-moderat">create an account</h1>

          <p className="text-xs text-grey-45 max-w-sm">
            Join our community to get the latest news and updates.
          </p>

          <ul className="flex flex-col gap-xxs text-xxs list-disc list-inside max-w-sm">
            <li>Priority access to new drops</li>
            <li>Eligible to exclusive events and gifting</li>
            <li>Easily track your orders and returns</li>
            <li>Priority access to sales</li>
            <li>Pre-access to sales</li>
          </ul>

          <form className="flex flex-col gap-xs max-w-sm">
            <input
              type="text"
              placeholder="first name"
              className="w-full border border-grey-15 p-xxs text-xs outline-none bg-transparent"
            />
            <input
              type="text"
              placeholder="last name"
              className="w-full border border-grey-15 p-xxs text-xs outline-none bg-transparent"
            />
            <input
              type="email"
              placeholder="email"
              className="w-full border border-grey-15 p-xxs text-xs outline-none bg-transparent"
            />
            <input
              type="password"
              placeholder="password"
              className="w-full border border-grey-15 p-xxs text-xs outline-none bg-transparent"
            />
            <p className="text-xxxs text-grey-45">
              By submitting this form you accept our <a href="#" className="underline">Privacy Policy</a>
            </p>
            <button
              type="submit"
              className="w-full border border-grey-15 text-xs py-xxs bg-transparent cursor-pointer hover:opacity-70"
            >
              create an account
            </button>
          </form>

          <div className="text-xxs">
            already have an account? <a href="/account/login" className="underline hover:opacity-70">login</a>
          </div>
        </div>

        <div className="col-span-full md:col-span-1" />

        <div className="col-span-full md:col-span-4 flex flex-col gap-xs border-t md:border-t-0 md:border-l border-grey-15 pt-s md:pt-0 md:pl-gutter">
          <h2 className="text-xs font-moderat">become a member</h2>
          <p className="text-xxs font-moderat">only a:b | members get early access:</p>
          <ul className="flex flex-col gap-xxs text-xxs text-grey-45 list-disc list-inside">
            <li>early access to all drops</li>
            <li>a first look at new collections</li>
            <li>limited edition product</li>
            <li>14-day returns</li>
          </ul>
          <form className="flex flex-col gap-xs mt-xs max-w-sm">
            <input
              type="email"
              placeholder="email"
              className="w-full border border-grey-15 p-xxs text-xs outline-none bg-transparent"
            />
            <input
              type="tel"
              placeholder="phone number"
              className="w-full border border-grey-15 p-xxs text-xs outline-none bg-transparent"
            />
            <button
              type="submit"
              className="w-full border border-grey-15 text-xs py-xxs bg-transparent cursor-pointer hover:opacity-70"
            >
              sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
