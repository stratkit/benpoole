import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | Ben Poole",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-honeycomb pt-24 pb-6">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#06b6d4] font-medium text-sm tracking-widest uppercase mb-4">
            Blog
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-4 leading-tight">
            Opinions build features. Research builds a Product.
          </h1>
          <p className="text-[#94a3b8] text-xl">
            Perspectives on AI, product, leadership, and the messy middle of
            getting things done.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-grid pt-8 pb-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          {posts.length === 0 ? (
            <div className="bg-[#1e293b] border border-[#3b4f6b]/20 rounded-xl p-8 text-center">
              <p className="text-[#94a3b8]">Posts coming soon.</p>
              <p className="text-[#94a3b8] mt-4 text-sm">
                Until then, check out my articles on{" "}
                <a
                  href="https://linkedin.com/in/benpoole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#06b6d4] hover:underline font-medium"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          ) : (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="bg-[#1e293b] border border-[#3b4f6b]/20 rounded-xl p-6 hover:border-[#06b6d4]/30 transition-colors">
                  <div className="flex flex-col md:flex-row gap-6">
                    {post.image && (
                      <div className="shrink-0 md:w-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={192}
                          height={108}
                          className="rounded-lg object-cover w-full md:w-48 h-auto"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h2 className="font-heading text-xl font-bold text-[#f1f5f9] group-hover:text-[#06b6d4] transition-colors mb-2">
                        {post.title}
                      </h2>
                      <div className="flex items-center gap-3 text-sm text-[#94a3b8] mb-3">
                        <time>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                        <span>&middot;</span>
                        <span>{post.readingTime}</span>
                      </div>
                      <p className="text-[#cbd5e1] text-sm leading-relaxed mb-4">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-[#06b6d4]/10 text-[#06b6d4]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
