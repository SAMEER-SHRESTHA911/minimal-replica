export default function LoginPage() {
  return (
    <div className="bg-white relative py-s md:py-m">
      <div className="grid-layout gap-y-s">
        <div className="col-span-full md:col-span-1" />

        <div className="col-span-full md:col-span-5 flex flex-col gap-s">
          <div className="flex items-center gap-1 text-xxs text-grey-45">
            <a href="/account/login" className="hover:opacity-70">/</a>
            <span className="text-grey-45">login</span>
          </div>
          <div>
            <a href="/account/register" className="text-xxs underline hover:opacity-70">create an account</a>
          </div>

          <h1 className="text-m font-moderat">login</h1>

          <form className="flex flex-col gap-xs max-w-sm">
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
            <button
              type="submit"
              className="w-full border border-grey-15 text-xs py-xxs bg-transparent cursor-pointer hover:opacity-70"
            >
              login
            </button>
          </form>

          <div className="flex flex-col gap-xxs text-xxs">
            <a href="#" className="underline hover:opacity-70">forgot your password?</a>
            <a href="/account/register" className="underline hover:opacity-70">create an account</a>
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
