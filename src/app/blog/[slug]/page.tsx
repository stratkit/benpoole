import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import MdxContent from "@/components/MdxContent";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getPostBySlug(slug);
  return {
    title: `${meta.title} | Ben Poole`,
    description: meta.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta, content } = getPostBySlug(slug);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-honeycomb py-12">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="text-[#06b6d4] text-sm font-medium hover:underline mb-6 inline-block"
          >
            &larr; All posts
          </Link>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-[#f1f5f9] leading-tight mb-4">
            {meta.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#94a3b8]">
            <time>
              {new Date(meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>&middot;</span>
            <span>{meta.readingTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-[#06b6d4]/10 text-[#06b6d4]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-grid pt-8 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <MdxContent source={content} />
          <div className="mt-16 pt-8 border-t border-[#3b4f6b]/30">
            <Link
              href="/blog"
              className="text-[#06b6d4] text-sm font-medium hover:underline"
            >
              &larr; Back to all posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
