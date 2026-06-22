import { posts } from "../posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { TweetEmbed } from "../tweet-embed";
import { siteConfig } from "../../site-config";
import type { BlogImage } from "../posts";

const tweetEmbedPattern = /\{\{tweet:([^}]+)\}\}/g;
const markdownPattern = /[#*_>`[\]()]/g;

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

function getPostDescription(content: string) {
  return content
    .replace(tweetEmbedPattern, "")
    .replace(markdownPattern, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 155);
}

function getMetadataImage(image: BlogImage) {
  return {
    url: image.src,
    alt: image.alt,
    ...(image.width ? { width: image.width } : {}),
    ...(image.height ? { height: image.height } : {}),
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPost(params.slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  const description = post.excerpt ?? getPostDescription(post.content);
  const socialImage =
    post.socialImage ?? post.headerImage ?? siteConfig.defaultSocialImage;
  const canonicalPath = `/blog/${post.slug}/`;

  return {
    title: post.title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    authors: [{ name: siteConfig.name }],
    openGraph: {
      title: post.title,
      description,
      url: canonicalPath,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.date,
      images: [getMetadataImage(socialImage)],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      creator: siteConfig.twitterHandle,
      images: [socialImage.src],
    },
  };
}

function renderPostContent(content: string) {
  const blocks: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of content.matchAll(tweetEmbedPattern)) {
    const matchIndex = match.index ?? 0;
    const text = content.slice(lastIndex, matchIndex);

    if (text.trim()) {
      blocks.push(<ReactMarkdown key={`text-${lastIndex}`}>{text}</ReactMarkdown>);
    }

    blocks.push(
      <TweetEmbed key={`tweet-${matchIndex}`} url={match[1].trim()} />
    );

    lastIndex = matchIndex + match[0].length;
  }

  const remainingText = content.slice(lastIndex);

  if (remainingText.trim()) {
    blocks.push(
      <ReactMarkdown key={`text-${lastIndex}`}>{remainingText}</ReactMarkdown>
    );
  }

  return blocks;
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-none">
      {post.headerImage ? (
        <figure className="mb-10 overflow-hidden rounded-lg">
          <img
            src={post.headerImage.src}
            alt={post.headerImage.alt}
            width={post.headerImage.width}
            height={post.headerImage.height}
            className="h-auto w-full object-cover"
          />
        </figure>
      ) : null}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <time className="text-sm text-gray-500">{post.date}</time>
      </header>
      <div className="prose prose-lg max-w-none font-serif prose-p:mt-0 prose-p:mb-[1.1em] prose-p:leading-[1.6]">
        {renderPostContent(post.content)}
      </div>
    </article>
  );
}
