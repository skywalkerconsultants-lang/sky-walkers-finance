import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, PageCTA } from "@/components/PagePieces";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — UAE Tax, VAT & Accounting Guides | Sky Walkers" },
      { name: "description", content: "Practical guides on UAE corporate tax, VAT filing, accounting best practices and SME compliance." },
      { property: "og:title", content: "Resources — Sky Walkers Consultancy" },
      { property: "og:description", content: "Free, practical guides on UAE corporate tax, VAT and SME finance." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const categories = [
  {
    name: "UAE Corporate Tax",
    posts: [
      "UAE Corporate Tax Explained",
      "Who Needs Corporate Tax Registration?",
      "Corporate Tax Penalties UAE",
    ],
  },
  {
    name: "VAT Filing",
    posts: [
      "VAT Registration Process UAE",
      "VAT Filing Deadlines",
      "Common VAT Mistakes",
    ],
  },
  {
    name: "Accounting",
    posts: [
      "Why SMEs Need Bookkeeping",
      "Financial Reporting for Startups",
      "Cash Flow Management Tips",
    ],
  },
];

function ResourcesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Resources" title="Guides & insights for UAE businesses"
        subtitle="Plain-English explainers on corporate tax, VAT, and modern accounting practices." />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8 space-y-14">
          {categories.map(cat => (
            <div key={cat.name}>
              <div className="flex items-end justify-between mb-6">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl">{cat.name}</h2>
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Latest</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.posts.map(p => (
                  <article key={p} className="card-hover rounded-2xl border border-border bg-card p-7">
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{cat.name}</div>
                    <h3 className="mt-3 font-display font-semibold text-lg leading-snug">{p}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">A practical guide for UAE founders and finance teams.</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read article <ArrowRight className="w-4 h-4" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageCTA />
    </SiteLayout>
  );
}
