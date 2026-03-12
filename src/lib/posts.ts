import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export interface PostMeta {
  title: string;
  date: string;
  tags: string[];
  description: string;
  image?: string;
  readingTime: string;
  slug: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      tags: data.tags ?? [],
      description: data.description ?? "",
      image: data.image,
      readingTime: stats.text,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    meta: {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      tags: data.tags ?? [],
      description: data.description ?? "",
      image: data.image,
      readingTime: stats.text,
    } as PostMeta,
    content,
  };
}
