import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, PageCTA } from "@/components/PagePieces";
import { Reveal } from "@/components/Reveal";
import {
  Calculator, Eraser, Receipt, FileCheck2, Users2, BarChart3,
  LineChart, Building2, Briefcase, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Accounting, VAT, Corporate Tax & Reporting | Sky Walkers" },
      { name: "description", content: "End-to-end financial solutions for UAE businesses: accounting, book cleanup, VAT, corporate tax, payroll, management reporting, virtual CFO and CPA firm support." },
      { property: "og:title", content: "Services — Sky Walkers Consultancy" },
      { property: "og:description", content: "Accounting, VAT, corporate tax, payroll, reporting and CPA support for UAE businesses." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Calculator, title: "Accounting & Bookkeeping", desc: "Accurate, cloud-based books with monthly reporting.", to: "/accounting" },
  { icon: Eraser, title: "Book Cleanup & Catch-Up Accounting", desc: "Organize, reconcile and rebuild accurate records.", to: "/book-cleanup" },
  { icon: Receipt, title: "VAT Filing Services", desc: "Registration, returns and full UAE VAT compliance.", to: "/vat" },
  { icon: FileCheck2, title: "Corporate Tax Filing", desc: "Registration, assessment, filing and compliance.", to: "/corporate-tax" },
  { icon: Users2, title: "Payroll & WPS", desc: "End-to-end payroll and WPS-compliant disbursement.", to: "/services" },
  { icon: BarChart3, title: "Management Reporting", desc: "P&L, cash flow, KPI dashboards and analysis.", to: "/management-reporting" },
  { icon: LineChart, title: "Virtual CFO Services", desc: "Budgeting, forecasting and financial strategy.", to: "/services" },
  { icon: Building2, title: "Business Setup Advisory", desc: "Mainland and free zone formation guidance.", to: "/services" },
  { icon: Briefcase, title: "CPA Firm Support", desc: "Offshore bookkeeping, cleanup and close support.", to: "/services" },
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
