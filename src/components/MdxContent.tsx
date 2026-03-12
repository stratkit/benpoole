import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => (
    <h2 className="font-heading text-2xl font-bold text-[#f1f5f9] mt-12 mb-4" {...props} />
  ),
  h3: (props) => (
    <h3 className="font-heading text-xl font-semibold text-[#f1f5f9] mt-10 mb-3" {...props} />
  ),
  p: (props) => <p className="text-[#cbd5e1] leading-relaxed mb-6" {...props} />,
  a: (props) => (
    <a className="text-[#06b6d4] hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  ul: (props) => <ul className="text-[#cbd5e1] leading-relaxed mb-6 ml-6 list-disc space-y-2" {...props} />,
  ol: (props) => <ol className="text-[#cbd5e1] leading-relaxed mb-6 ml-6 list-decimal space-y-2" {...props} />,
  li: (props) => <li className="text-[#cbd5e1]" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-[#06b6d4] pl-6 my-6 italic text-[#94a3b8]" {...props} />
  ),
  code: (props) => (
    <code className="bg-[#1e293b] text-[#06b6d4] px-1.5 py-0.5 rounded text-sm" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-[#0f172a] border border-[#1e293b] rounded-lg p-4 overflow-x-auto mb-6 text-sm leading-relaxed" {...props} />
  ),
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={props.src ?? ""}
      alt={props.alt ?? ""}
      className="rounded-lg my-6 w-full"
    />
  ),
  hr: () => <hr className="border-[#3b4f6b]/30 my-10" />,
  strong: (props) => <strong className="text-[#f1f5f9] font-semibold" {...props} />,
};

export default function MdxContent({ source }: { source: string }) {
  return (
    <div className="prose-blog [&>h2:first-child]:mt-0">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [
              [rehypePrettyCode, { theme: "one-dark-pro", keepBackground: false }],
            ],
          },
        }}
      />
    </div>
  );
}
