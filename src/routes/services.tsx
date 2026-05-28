import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, PageCTA } from "@/components/PagePieces";
import { Calculator, FileCheck2, Receipt, Users2, Building2, LineChart, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Accounting, VAT, Corporate Tax & Payroll | Sky Walkers" },
      { name: "description", content: "End-to-end accounting and tax services for UAE businesses: bookkeeping, VAT filing, corporate tax, payroll, business setup and CFO advisory." },
      { property: "og:title", content: "Services — Sky Walkers Consultancy" },
      { property: "og:description", content: "Accounting, VAT, corporate tax, payroll, business setup and CFO advisory for UAE businesses." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Calculator, title: "Accounting & Bookkeeping", overview: "Accurate, IFRS-aligned books maintained on cloud platforms with monthly MIS reporting.", points: ["Daily bookkeeping", "Bank & ledger reconciliation", "Monthly MIS reports", "Year-end financials"] },
  { icon: Receipt, title: "VAT Filing Services", overview: "Full VAT lifecycle — from registration to quarterly filing and reconciliation with FTA.", points: ["VAT registration & deregistration", "Quarterly VAT returns", "VAT reconciliation", "FTA audit support"] },
  { icon: FileCheck2, title: "Corporate Tax Filing", overview: "Corporate tax compliance covering registration, advisory, and annual filing under UAE CT law.", points: ["CT registration", "Annual CT return filing", "Transfer pricing advisory", "Free zone CT advisory"] },
  { icon: Users2, title: "Payroll & WPS", overview: "End-to-end payroll processing with WPS-compliant salary disbursement.", points: ["Monthly payroll runs", "WPS file generation", "Leave & gratuity tracking", "Payslip distribution"] },
  { icon: Building2, title: "Business Setup", overview: "Mainland, free zone and offshore company formation with full PRO support.", points: ["Trade licensing", "Free zone setup", "Mainland LLC formation", "Visa & PRO services"] },
  { icon: LineChart, title: "CFO & Advisory", overview: "Fractional CFO services delivering forecasting, budgeting and financial strategy.", points: ["Budgeting & forecasting", "Cash flow planning", "KPI dashboards", "Board reporting"] },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Services" title="End-to-end accounting & tax solutions"
        subtitle="One trusted partner for accounting, VAT, corporate tax, payroll, business setup and CFO advisory across the UAE." />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8 grid gap-6 lg:grid-cols-2">
          {services.map(({ icon: Icon, title, overview, points }) => (
            <div key={title} className="card-hover rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="flex items-center gap-4">
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="w-6 h-6" />
                </span>
                <h2 className="font-display font-semibold text-xl">{title}</h2>
              </div>
              <p className="mt-5 text-muted-foreground leading-relaxed">{overview}</p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                {points.map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <PageCTA />
    </SiteLayout>
  );
}
