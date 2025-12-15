import Link from "next/link";
import { posts } from "./posts";

export default function BlogIndex() {
  // Sort posts by date descending
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
      </header>

      <div className="space-y-4">
        {sortedPosts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <h2 className="text-xl font-medium group-hover:underline decoration-1 underline-offset-4">
                  {post.title}
                </h2>
                <span className="text-sm text-gray-500 shrink-0">
                  {post.date}
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
