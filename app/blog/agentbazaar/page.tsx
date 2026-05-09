import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "The browser is becoming optional — AgentBazaar | Vinayak Pandey",
  description:
    "AgentBazaar is a mock shoe store with no human-facing UI. A proof-of-concept for agentic e-commerce — Claude shops, carts, and checks out on your behalf.",
  openGraph: {
    title: "The browser is becoming optional",
    description:
      "AgentBazaar is a mock shoe store with no human-facing UI. A proof-of-concept for agentic e-commerce — Claude shops, carts, and checks out on your behalf.",
    url: "https://geekyvinayak.tech/blog/agentbazaar",
    type: "article",
    publishedTime: "2026-05-09",
  },
  alternates: {
    canonical: "https://geekyvinayak.tech/blog/agentbazaar",
  },
};

export default function AgentBazaarBlog() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <main>
        <div className="max-w-[760px] mx-auto px-6 py-24 text-[#e5e5e5] leading-relaxed text-base">

          {/* HEADER */}
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#888] mb-6">
            // Vision · Build log · May 9, 2026
          </p>
          <h1 className="text-[56px] max-sm:text-[38px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#fafafa] mb-6">
            The browser is becoming optional.
          </h1>
          <p className="text-xl max-sm:text-lg leading-[1.5] text-[#b8b8b8] mb-8">
            The next billion users of the internet won&apos;t be human. They&apos;ll be
            agents — booking, buying, comparing, transacting on our behalf.
            Every storefront on Earth is about to need a second front door.
          </p>
          <p className="text-xl max-sm:text-lg leading-[1.5] text-[#b8b8b8] mb-8">
            I built one. It&apos;s open source. Here&apos;s what it means.
          </p>

          <div className="flex gap-3 flex-wrap my-10">
            <a
              href="https://github.com/geekyvinayak/agentbazaar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-[22px] py-3 rounded bg-[#fafafa] text-[#0a0a0a] border border-[#fafafa] text-sm font-medium hover:bg-[#d5d5d5] transition-colors no-underline"
            >
              ⭐ Star on GitHub
            </a>
            <a
              href="https://github.com/geekyvinayak/agentbazaar#install"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-[22px] py-3 rounded bg-transparent text-[#fafafa] border border-[#2a2a2a] text-sm font-medium hover:border-[#555] transition-colors no-underline"
            >
              → Try the demo
            </a>
          </div>

          <hr className="h-px bg-[#1f1f1f] my-12 border-none" />

          {/* THE THESIS */}
          <h2 className="text-[28px] max-sm:text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#fafafa] mt-16 mb-4">
            The thesis
          </h2>
          <p className="mb-5 text-[#c8c8c8]">
            For thirty years, e-commerce has optimized for the human eye. Hero
            images. A/B-tested CTAs. Pixel-perfect checkout flows. Hundreds of
            hours go into the presentation layer of every storefront.
          </p>
          <p className="mb-5 text-[#c8c8c8]">
            That entire stack is about to become a fallback.
          </p>
          <p className="mb-5 text-[#c8c8c8]">
            In two years, your customer is more likely to be a piece of software
            than a person. They will have asked an agent — Claude, ChatGPT,
            Gemini, an Indian alternative we haven&apos;t built yet — to handle the
            transaction. The agent doesn&apos;t see your hero image. It doesn&apos;t care
            about your fonts. It wants{" "}
            <strong className="text-[#fafafa] font-medium">
              structured, predictable, semantically-rich endpoints
            </strong>{" "}
            it can call confidently.
          </p>

          <blockquote className="border-l-2 border-[#fafafa] pl-5 py-1 my-8 text-[#d8d8d8] text-[17px] not-italic">
            Storefronts of the future will compete on how well their APIs talk
            to agents — not how pretty their checkout looks.
          </blockquote>

          <p className="mb-5 text-[#c8c8c8]">
            This isn&apos;t speculation. OpenAI + Stripe shipped the Agentic Commerce
            Protocol (ACP) in late 2025. Google + Shopify shipped UCP. Anthropic
            shipped plugins and skills. The plumbing is being laid down right
            now, in the open, and the next phase is adoption.
          </p>
          <p className="mb-5 text-[#c8c8c8]">
            Every platform — Shopify, Magento, WooCommerce, and India&apos;s
            homegrown stack like{" "}
            <code className="font-mono text-[0.875em]">Dukaan</code>,{" "}
            <code className="font-mono text-[0.875em]">Shiprocket</code>, and{" "}
            <code className="font-mono text-[0.875em]">Instamojo</code> — will
            need to ship an agent layer. Stores that don&apos;t will lose customers
            they never knew arrived.
          </p>

          <hr className="h-px bg-[#1f1f1f] my-12 border-none" />

          {/* THE DEMO */}
          <h2 className="text-[28px] max-sm:text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#fafafa] mt-16 mb-4">
            AgentBazaar — proof of concept
          </h2>
          <p className="mb-5 text-[#c8c8c8]">
            A mock shoe store with no human-facing UI. Just an API. Plus a
            Claude skill that knows how to use it.
          </p>
          <p className="mb-5 text-[#c8c8c8]">
            You say{" "}
            <em>&ldquo;buy me running shoes under ₹4000, size 9.&rdquo;</em> Claude
            searches, ranks, presents three options, modifies the cart on
            request, takes a delivery address, places the order, and confirms
            via email. The whole flow happens in chat. No webpage clicked. No
            form filled.
          </p>

          <video
            src="/agentbazaar-demo.mp4"
            className="w-full rounded border border-[#222] my-8"
            controls
            playsInline
          />

          <hr className="h-px bg-[#1f1f1f] my-12 border-none" />

          {/* HOW IT WORKS */}
          <h2 className="text-[28px] max-sm:text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#fafafa] mt-16 mb-4">
            How it works
          </h2>
          <p className="mb-5 text-[#c8c8c8]">Four pieces, no magic.</p>

          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 my-6">
            <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded p-6">
              <div className="font-mono text-[11px] text-[#777] uppercase tracking-[0.1em] mb-2">
                01 · The Storefront
              </div>
              <div className="text-sm text-[#e5e5e5] leading-relaxed">
                A Node + Express server with six endpoints.{" "}
                <code className="font-mono text-[0.875em]">/manifest</code>{" "}
                describes every available action — it&apos;s the homepage, but for
                agents.
              </div>
            </div>
            <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded p-6">
              <div className="font-mono text-[11px] text-[#777] uppercase tracking-[0.1em] mb-2">
                02 · The Catalog
              </div>
              <div className="text-sm text-[#e5e5e5] leading-relaxed">
                Twenty-five mock shoes. Real-looking brands, prices in INR,
                sizing, availability. Drop-in replaceable with a real product
                feed.
              </div>
            </div>
            <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded p-6">
              <div className="font-mono text-[11px] text-[#777] uppercase tracking-[0.1em] mb-2">
                03 · The Skill
              </div>
              <div className="text-sm text-[#e5e5e5] leading-relaxed">
                A Claude plugin built from{" "}
                <code className="font-mono text-[0.875em]">SKILL.md</code>.
                Teaches Claude when to discover, search, cart, modify, checkout
                — and how to stay in character as a concierge.
              </div>
            </div>
            <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded p-6">
              <div className="font-mono text-[11px] text-[#777] uppercase tracking-[0.1em] mb-2">
                04 · The Confirmation
              </div>
              <div className="text-sm text-[#e5e5e5] leading-relaxed">
                Real order confirmation emails via Gmail SMTP land in your inbox
                seconds after checkout. Mock store, real plumbing.
              </div>
            </div>
          </div>

          <p className="mb-5 text-[#c8c8c8] mt-8">
            The architectural insight:{" "}
            <strong className="text-[#fafafa] font-medium">
              the manifest is the homepage
            </strong>
            . Agents don&apos;t browse — they discover. A single endpoint that lists
            capabilities, parameters, and policies makes the whole store
            extensible. Add an action tomorrow, and every agent that talks to
            your store learns it without a code change.
          </p>

          <hr className="h-px bg-[#1f1f1f] my-12 border-none" />

          {/* TRY IT */}
          <h2 className="text-[28px] max-sm:text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#fafafa] mt-16 mb-4">
            Try it in 60 seconds
          </h2>
          <p className="mb-5 text-[#c8c8c8]">
            You&apos;ll need{" "}
            <a
              href="https://claude.ai/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fafafa] no-underline border-b border-[#444] hover:border-[#fafafa] transition-colors"
            >
              Claude Code
            </a>{" "}
            — Anthropic&apos;s terminal client. Don&apos;t have it? The video shows the
            full flow.
          </p>

          <div className="flex gap-5 my-6 items-start">
            <div className="shrink-0 w-8 h-8 border border-[#2a2a2a] rounded-full flex items-center justify-center font-mono text-sm text-[#888]">
              1
            </div>
            <div>
              <strong className="text-[#fafafa] font-medium block mb-1">
                Install Claude Code
              </strong>
              <pre className="bg-[#111] border border-[#1f1f1f] rounded px-5 py-4 font-mono text-sm text-[#e5e5e5] overflow-x-auto my-4 whitespace-pre">
                npm install -g @anthropic-ai/claude-code
              </pre>
            </div>
          </div>

          <div className="flex gap-5 my-6 items-start">
            <div className="shrink-0 w-8 h-8 border border-[#2a2a2a] rounded-full flex items-center justify-center font-mono text-sm text-[#888]">
              2
            </div>
            <div>
              <strong className="text-[#fafafa] font-medium block mb-1">
                Add the AgentBazaar marketplace
              </strong>
              <pre className="bg-[#111] border border-[#1f1f1f] rounded px-5 py-4 font-mono text-sm text-[#e5e5e5] overflow-x-auto my-4 whitespace-pre">{`/plugin marketplace add https://github.com/geekyvinayak/agentbazaar.git\n/plugin install agentbazaar-shop@agentbazaar`}</pre>
            </div>
          </div>

          <div className="flex gap-5 my-6 items-start">
            <div className="shrink-0 w-8 h-8 border border-[#2a2a2a] rounded-full flex items-center justify-center font-mono text-sm text-[#888]">
              3
            </div>
            <div>
              <strong className="text-[#fafafa] font-medium block mb-1">
                Just ask
              </strong>
              <pre className="bg-[#111] border border-[#1f1f1f] rounded px-5 py-4 font-mono text-sm text-[#e5e5e5] overflow-x-auto my-4 whitespace-pre">{`> Buy me running shoes under ₹4000, size 9.`}</pre>
            </div>
          </div>

          <hr className="h-px bg-[#1f1f1f] my-12 border-none" />

          {/* WHO SHOULD CARE */}
          <h2 className="text-[28px] max-sm:text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#fafafa] mt-16 mb-4">
            Who should care
          </h2>

          <table className="w-full border-collapse my-6 text-sm">
            <thead>
              <tr>
                <th className="text-left px-3 py-[14px] border-b border-[#1f1f1f] font-mono text-[11px] text-[#888] uppercase tracking-[0.1em] font-medium">
                  If you are
                </th>
                <th className="text-left px-3 py-[14px] border-b border-[#1f1f1f] font-mono text-[11px] text-[#888] uppercase tracking-[0.1em] font-medium">
                  What this means for you
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["A founder building e-commerce", "Your agent layer is your next moat. Start now."],
                ["A product manager", "Half your roadmap is about to be agents, not pages."],
                ["A platform (Shopify, etc.)", "Whoever ships first-class agent SDKs wins the next decade."],
                ["An investor", "The infra layer for agentic commerce is wide open."],
                ["An engineer", "Fork this template. Make your own store agent-buyable."],
              ].map(([role, meaning]) => (
                <tr key={role}>
                  <td className="px-3 py-[14px] border-b border-[#1f1f1f] text-[#c8c8c8]">{role}</td>
                  <td className="px-3 py-[14px] border-b border-[#1f1f1f] text-[#c8c8c8]">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <hr className="h-px bg-[#1f1f1f] my-12 border-none" />

          {/* WHAT'S NEXT */}
          <h2 className="text-[28px] max-sm:text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#fafafa] mt-16 mb-4">
            What&apos;s next
          </h2>
          <p className="mb-5 text-[#c8c8c8]">
            AgentBazaar is intentionally minimal — it&apos;s a template, not a
            product. The roadmap I&apos;m thinking about:
          </p>
          <ul className="list-none p-0 my-4">
            {[
              ["ACP / UCP compliance", "make the manifest speak the emerging standards natively."],
              ["Real payment rails", "Razorpay test mode integration, then UPI deep links sent to messaging apps."],
              ["Multi-agent", "same store, skills for ChatGPT, Gemini, custom MCPs."],
              ["Reference adapters", "drop-in modules for Shopify and WooCommerce so existing stores can ship an agent layer in a day."],
            ].map(([title, desc]) => (
              <li
                key={title}
                className="py-3 border-b border-[#1a1a1a] text-[#c8c8c8] text-sm last:border-none"
              >
                <strong className="text-[#fafafa] font-medium">{title}</strong>
                {" "}— {desc}
              </li>
            ))}
          </ul>

          <hr className="h-px bg-[#1f1f1f] my-12 border-none" />

          {/* CTA */}
          <h2 className="text-[28px] max-sm:text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#fafafa] mt-16 mb-4">
            Build with me
          </h2>
          <p className="mb-5 text-[#c8c8c8]">
            The repo is MIT-licensed. Star it if the thesis resonates. Fork it
            if you&apos;re building. Open an issue if you&apos;re skeptical — those are
            usually the most useful conversations.
          </p>

          <div className="flex gap-3 flex-wrap my-10">
            <a
              href="https://github.com/geekyvinayak/agentbazaar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-[22px] py-3 rounded bg-[#fafafa] text-[#0a0a0a] border border-[#fafafa] text-sm font-medium hover:bg-[#d5d5d5] transition-colors no-underline"
            >
              ⭐ github.com/geekyvinayak/agentbazaar
            </a>
            <a
              href="https://agentbazaar.onrender.com/manifest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-[22px] py-3 rounded bg-transparent text-[#fafafa] border border-[#2a2a2a] text-sm font-medium hover:border-[#555] transition-colors no-underline"
            >
              → Live API manifest
            </a>
          </div>

          <div className="font-mono text-xs text-[#666] mt-16 pt-8 border-t border-[#1a1a1a]">
            Built solo over a weekend · MIT licensed · Open to contributions and ideas
            <br />
            By{" "}
            <a
              href="https://geekyvinayak.tech"
              className="text-[#fafafa] no-underline border-b border-[#444] hover:border-[#fafafa] transition-colors"
            >
              Vinayak
            </a>
            {" "}·{" "}
            <a
              href="https://github.com/geekyvinayak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fafafa] no-underline border-b border-[#444] hover:border-[#fafafa] transition-colors"
            >
              @geekyvinayak
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
