import { blogPosts } from "@/data/blog";

export default function BlogIndexPage() {
  return (
    <div className="bg-white">
      <div className="grid-layout py-s md:py-m">
        <div className="col-span-full text-center">
          <h1 className="font-moderat text-m">about:blank news</h1>
          <p className="text-xs text-grey-45 mt-xxs">our brand journal:</p>
        </div>
      </div>

      <div className="grid-layout pb-s md:pb-m">
        <div className="col-span-full grid grid-cols-2 md:grid-cols-3 gap-x-card-gap gap-y-s">
          {blogPosts.map((post) => (
            <a key={post.id} href={`/blogs/news/${post.slug}`} className="group block">
              <div className="aspect-[3/4] bg-placeholder overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h2 className="font-moderat text-xs mt-0.5">{post.title}</h2>
              <p className="text-xxs text-grey-45 mt-px">{post.date}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
