import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, PageCTA } from "@/components/PagePieces";
import { Reveal } from "@/components/Reveal";
import { ExternalLink } from "lucide-react";
import ogResources from "@/assets/og-resources.jpg.asset.json";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources Hub — UAE Tax, VAT, Accounting & Reporting | Sky Walkers" },
      { name: "description", content: "Curated guides and official UAE resources on corporate tax, VAT filing, accounting, financial reporting, business setup and CPA support." },
      { property: "og:title", content: "Resources Hub — Sky Walkers Consultancy" },
      { property: "og:description", content: "Guides, checklists and official UAE links on tax, VAT, accounting and reporting." },
      { property: "og:url", content: "/resources" },
      { property: "og:image", content: ogResources.url },
      { name: "twitter:image", content: ogResources.url },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const categories = [
  "Corporate Tax", "VAT", "Accounting", "Financial Reporting", "Business Setup", "CPA Support",
];

type Resource = { title: string; cat: string; url: string; desc: string };

const articles: Resource[] = [
  {
    title: "UAE Corporate Tax — Official FTA Portal",
    cat: "Corporate Tax",
    url: "https://tax.gov.ae/en/taxes/corporate.tax.aspx",
    desc: "The Federal Tax Authority's official corporate tax hub. Covers the 9% standard rate, the AED 375,000 taxable income threshold, who must register, filing timelines and the latest legislative updates for UAE businesses.",
  },
  {
    title: "Corporate Tax Registration on EmaraTax",
    cat: "Corporate Tax",
    url: "https://eservices.tax.gov.ae/",
    desc: "EmaraTax is the FTA's online platform where every taxable person registers for and files corporate tax. Use it to create your profile, submit registration, and manage returns and payments.",
  },
  {
    title: "Small Business Relief — FTA Decisions",
    cat: "Corporate Tax",
    url: "https://tax.gov.ae/en/legislation.and.cabinet.decisions.aspx",
    desc: "Official FTA legislation and cabinet decisions, including Small Business Relief which lets qualifying businesses under the revenue threshold elect to be treated as having no taxable income for a tax period.",
  },
  {
    title: "UAE VAT — Official FTA Portal",
    cat: "VAT",
    url: "https://tax.gov.ae/en/taxes/vat.aspx",
    desc: "Everything on the UAE's 5% VAT: mandatory vs voluntary registration thresholds, taxable supplies, zero-rated and exempt categories, return periods and penalties for non-compliance.",
  },
  {
    title: "VAT Returns & Filing Guide",
    cat: "VAT",
    url: "https://tax.gov.ae/en/services/vat.return.filing.aspx",
    desc: "Step-by-step FTA guidance on preparing and filing periodic VAT returns through EmaraTax, including how to calculate output and input VAT and meet filing deadlines.",
  },
  {
    title: "Accounting Records & Bookkeeping Requirements",
    cat: "Accounting",
    url: "https://tax.gov.ae/en/legislation.and.cabinet.decisions.aspx",
    desc: "What records UAE businesses must keep and for how long, per FTA legislation. Accurate, reconciled books are the foundation for both VAT and corporate tax compliance — and for clean management reporting.",
  },
  {
    title: "IFRS Accounting Standards (Official List)",
    cat: "Financial Reporting",
    url: "https://www.ifrs.org/issued-standards/list-of-standards/",
    desc: "The official list of issued IFRS Accounting Standards used across the UAE. The framework behind your P&L, balance sheet and cash flow — and the basis for credible, comparable financial reporting.",
  },
  {
    title: "Setting Up a Business in the UAE",
    cat: "Business Setup",
    url: "https://u.ae/en/information-and-services/business/starting-a-business",
    desc: "The UAE Government's official guide to mainland and free zone company formation — licensing, ownership rules, visas and the approvals needed to start trading.",
  },
  {
    title: "Free Zone Company Setup Overview",
    cat: "Business Setup",
    url: "https://u.ae/en/information-and-services/business/free-zones",
    desc: "How UAE free zones work, the benefits they offer, and the qualifying-income rules that determine free zone corporate tax treatment.",
  },
  {
    title: "Offshore Accounting Support for CPA Firms",
    cat: "CPA Support",
    url: "/cpa-support",
    desc: "How CPA and accounting firms use our offshore team for bookkeeping, cleanup projects, month-end close and reporting support. Explore our scalable engagement models.",
  },
];

function ResourcesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Resources Hub" title="Guides & insights for UAE businesses"
        subtitle="Curated explainers and official UAE links on corporate tax, VAT, accounting, financial reporting, business setup and CPA support." />

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

      {/* RESOURCES */}
      <section className="pb-24">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl">Resources & official links</h2>
            <p className="mt-2 text-muted-foreground">Trusted references and detailed guides — each links straight to the source.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((p, i) => {
              const external = p.url.startsWith("http");
              return (
                <Reveal key={p.title} delay={i * 40}>
                  <a
                    href={p.url}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="card-hover group h-full block rounded-2xl border border-border bg-card p-7"
                  >
                    <div className="text-xs text-primary font-semibold uppercase tracking-wider">{p.cat}</div>
                    <h3 className="mt-3 font-display font-semibold text-lg leading-snug">{p.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {external ? "Visit resource" : "Get in touch"}
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <PageCTA />
    </SiteLayout>
  );
}
