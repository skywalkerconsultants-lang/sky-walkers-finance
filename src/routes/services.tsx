import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, PageCTA } from "@/components/PagePieces";
import { Reveal } from "@/components/Reveal";
import {
  Calculator, Eraser, Receipt, FileCheck2, Users2, BarChart3,
  Building2, Briefcase, ShieldCheck, ArrowRight,
} from "lucide-react";
import ogServices from "@/assets/og-services.jpg.asset.json";
import dubaiArt from "@/assets/dubai-art.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Accounting, VAT, Corporate Tax & Reporting | Sky Walkers" },
      { name: "description", content: "End-to-end financial solutions for UAE and global businesses: accounting, book cleanup, VAT filing, corporate tax, payroll & WPS, management reporting, compliance advisory and CPA firm support." },
      { property: "og:title", content: "Services — Sky Walkers Consultancy" },
      { property: "og:description", content: "Accounting, VAT, corporate tax, payroll, reporting and CPA support for UAE businesses." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: ogServices.url },
      { name: "twitter:image", content: ogServices.url },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Accounting & Tax Services — Sky Walkers Consultancy",
          itemListElement: [
            "Accounting & Bookkeeping", "Book Cleanup & Catch-Up Accounting", "VAT Filing Services",
            "Corporate Tax Filing", "Payroll & WPS", "Management Reporting",
            "Compliance & Advisory", "Business Setup Advisory", "CPA Firm Support",
          ].map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Calculator, title: "Accounting & Bookkeeping", desc: "Accurate, cloud-based books with monthly reporting.", to: "/accounting" },
  { icon: Eraser, title: "Book Cleanup & Catch-Up Accounting", desc: "Organize, reconcile and rebuild accurate records.", to: "/book-cleanup" },
  { icon: Receipt, title: "VAT Filing Services", desc: "Registration, returns and full UAE VAT compliance.", to: "/vat" },
  { icon: FileCheck2, title: "Corporate Tax Filing", desc: "Registration, assessment, filing and compliance.", to: "/corporate-tax" },
  { icon: Users2, title: "Payroll & WPS", desc: "End-to-end payroll and WPS-compliant disbursement.", to: "/payroll" },
  { icon: BarChart3, title: "Management Reporting", desc: "P&L, cash flow, KPI dashboards and analysis.", to: "/management-reporting" },
  { icon: LineChart, title: "Virtual CFO Services", desc: "Budgeting, forecasting and financial strategy.", to: "/virtual-cfo" },
  { icon: Building2, title: "Business Setup Advisory", desc: "Mainland and free zone formation guidance.", to: "/business-setup" },
  { icon: Briefcase, title: "CPA Firm Support", desc: "Offshore bookkeeping, cleanup and close support.", to: "/cpa-support" },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Services" title="End-to-End Financial Solutions"
        subtitle="One trusted partner for accounting, tax, reporting and CPA support across the UAE — backed by a qualified global accounting team." />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc, to }, i) => (
            <Reveal key={title} delay={i * 50}>
              <div className="card-hover group h-full rounded-2xl border border-border bg-card p-7 shadow-card flex flex-col">
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-accent text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-smooth">
                  <Icon className="w-6 h-6" />
                </span>
                <h2 className="mt-5 font-display font-semibold text-xl">{title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
                <a href={to} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <PageCTA title="Let's simplify your accounting & compliance" subtitle="Professional accounting, tax, and reporting solutions designed for modern businesses." />
    </SiteLayout>
  );
}
