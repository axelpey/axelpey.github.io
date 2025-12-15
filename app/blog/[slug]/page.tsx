import { posts } from "../posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-none">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <time className="text-sm text-gray-500">{post.date}</time>
      </header>
      <div className="whitespace-pre-wrap font-serif text-lg leading-relaxed text-justify">
        {post.content}
      </div>
    </article>
  );
}
