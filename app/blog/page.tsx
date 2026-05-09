import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog | Vinayak Pandey",
  description:
    "Thoughts on agentic commerce, developer tools, and building in public — by Vinayak Pandey.",
  openGraph: {
    title: "Blog | Vinayak Pandey",
    description:
      "Thoughts on agentic commerce, developer tools, and building in public.",
    url: "https://geekyvinayak.tech/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://geekyvinayak.tech/blog",
  },
};

const posts = [
  {
    slug: "agentbazaar",
    title: "The browser is becoming optional.",
    date: "May 9, 2026",
    description:
      "AgentBazaar is a mock shoe store with no human-facing UI. A proof-of-concept showing every storefront needs a second front door — one built for AI agents.",
    tags: ["agentic commerce", "claude", "open source"],
  },
];

export default function BlogIndex() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <main>
        <div className="max-w-[760px] mx-auto px-6 py-24 text-[#e5e5e5]">

          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#888] mb-6">
            // Writing
          </p>
          <h1 className="text-[42px] max-sm:text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#fafafa] mb-4">
            Blog
          </h1>
          <p className="text-lg text-[#888] mb-16">
            Thoughts on building things, agentic commerce, and shipping in public.
          </p>

          <hr className="h-px bg-[#1f1f1f] border-none mb-0" />

          <ul className="list-none p-0 m-0">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-2 py-10 border-b border-[#1f1f1f] no-underline transition-colors"
                >
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="font-mono text-xs text-[#666]">{post.date}</span>
                    <div className="flex gap-2 flex-wrap">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#555] border border-[#222] rounded px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-[#fafafa] tracking-[-0.01em] group-hover:text-[#ccc] transition-colors m-0">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#888] leading-relaxed m-0">
                    {post.description}
                  </p>
                  <span className="font-mono text-xs text-[#555] group-hover:text-[#999] transition-colors mt-1">
                    Read →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {posts.length === 0 && (
            <p className="text-[#666] font-mono text-sm py-16 text-center">
              // nothing here yet
            </p>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
}
