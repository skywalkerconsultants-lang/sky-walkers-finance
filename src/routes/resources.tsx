import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, PageCTA } from "@/components/PagePieces";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Download, FileText } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources Hub — UAE Tax, VAT, Accounting & Reporting | Sky Walkers" },
      { name: "description", content: "Practical guides on UAE corporate tax, VAT filing, accounting, financial reporting, business setup and CPA support — plus free downloadable toolkits." },
      { property: "og:title", content: "Resources Hub — Sky Walkers Consultancy" },
      { property: "og:description", content: "Guides, checklists and toolkits on UAE tax, VAT, accounting and reporting." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const categories = [
  "Corporate Tax", "VAT", "Accounting", "Financial Reporting", "Business Setup", "CPA Support",
];

const articles = [
  { title: "UAE Corporate Tax Explained for SMEs", cat: "Corporate Tax" },
  { title: "How to Prepare for Corporate Tax Filing", cat: "Corporate Tax" },
  { title: "VAT Filing Checklist for UAE Businesses", cat: "VAT" },
  { title: "Common VAT Mistakes Businesses Make", cat: "VAT" },
  { title: "Accounting Best Practices for Startups", cat: "Accounting" },
  { title: "Why Monthly Financial Reporting Matters", cat: "Financial Reporting" },
  { title: "Book Cleanup Guide for Growing Businesses", cat: "Accounting" },
  { title: "How to Choose the Right Accounting Software", cat: "Accounting" },
  { title: "Management Reporting for Better Decisions", cat: "Financial Reporting" },
  { title: "Financial KPIs Every Business Should Track", cat: "Financial Reporting" },
];

const downloads = [
  "UAE Corporate Tax Guide",
  "VAT Filing Checklist",
  "Accounting Health Check",
  "Month-End Closing Checklist",
  "SME Reporting Toolkit",
];

function ResourcesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Resources Hub" title="Guides & insights for UAE businesses"
        subtitle="Plain-English explainers on corporate tax, VAT, accounting, financial reporting, business setup and CPA support." />

      {/* CATEGORIES */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((c) => (
              <span key={c} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold card-hover">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="pb-8">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl">Featured articles</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((p, i) => (
              <Reveal key={p.title} delay={i * 40}>
                <article className="card-hover h-full rounded-2xl border border-border bg-card p-7 flex flex-col">
                  <div className="text-xs text-primary font-semibold uppercase tracking-wider">{p.cat}</div>
                  <h3 className="mt-3 font-display font-semibold text-lg leading-snug flex-1">{p.title}</h3>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read article <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FREE DOWNLOADS */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-8">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Free downloads</span>
            <h2 className="mt-3 font-display font-bold text-2xl sm:text-3xl">Lead magnets & toolkits</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {downloads.map((d, i) => (
              <Reveal key={d} delay={i * 50}>
                <div className="card-hover h-full rounded-2xl border border-border bg-accent/60 p-7">
                  <FileText className="w-7 h-7 text-primary" />
                  <h3 className="mt-4 font-display font-semibold text-lg">{d}</h3>
                  <a href="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    <Download className="w-4 h-4" /> Download
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </SiteLayout>
  );
}
