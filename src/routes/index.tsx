import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CtaButtons } from "@/components/PagePieces";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { FaqSection } from "@/components/FaqSection";
import { SoftwareMarquee } from "@/components/SoftwareMarquee";
import {
  Calculator, FileCheck2, Receipt, Users2, Building2,
  ArrowRight, Eraser, BarChart3, Briefcase,
  Rocket, ShoppingBag, Truck, Globe2, Megaphone, Cloud, Stethoscope,
  Utensils, Home as HomeIcon, Store, ShieldCheck,
  CheckCircle2, BadgePercent, Globe,
} from "lucide-react";
import dubaiHero from "@/assets/dubai-hero.jpg";
import logo from "@/assets/skywalker-logo.png.asset.json";
import ogHome from "@/assets/og-home.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sky Walkers — Smart Accounting, Tax & Reporting for Growing Businesses" },
      { name: "description", content: "UAE accounting, VAT filing, corporate tax, payroll, book cleanup and management reporting for SMEs, startups, free zone companies and CPA firms." },
      { property: "og:title", content: "Sky Walkers Consultancy — UAE Accounting & Tax Partner" },
      { property: "og:description", content: "Smart accounting, tax and financial reporting solutions for growing UAE businesses and CPA firms." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: ogHome.url },
      { name: "twitter:image", content: ogHome.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { end: 15, suffix: "+", label: "Years UAE Experience" },
  { end: 100, suffix: "+", label: "Businesses Supported" },
  { end: 1000, suffix: "+", label: "Financial Reports Delivered" },
  { end: 4, suffix: "+", label: "Accounting Platforms" },
];

const mainServices = [
  {
    icon: Calculator, title: "Accounting & Bookkeeping", to: "/accounting",
    desc: "Accurate daily books, reconciliations and clear monthly reporting — the foundation of every compliant business.",
  },
  {
    icon: Receipt, title: "VAT Filing Services", to: "/vat",
    desc: "Registration, periodic returns and full UAE VAT compliance handled end-to-end, on time, every time.",
  },
  {
    icon: FileCheck2, title: "Corporate Tax Filing", to: "/corporate-tax",
    desc: "Registration, assessment, filing and ongoing corporate tax compliance aligned with FTA requirements.",
  },
];

const moreServices = [
  { icon: Eraser, title: "Book Cleanup & Catch-Up", points: ["Backlog & catch-up bookkeeping", "Account reconciliations", "Record rebuild & corrections"] },
  { icon: Users2, title: "Payroll & WPS", points: ["Monthly payroll processing", "WPS-compliant disbursement", "Payslips & leave records"] },
  { icon: BarChart3, title: "Management Reporting", points: ["P&L, balance sheet & cash flow", "KPI dashboards", "Monthly performance reviews"] },
  { icon: ShieldCheck, title: "Compliance & Advisory", points: ["VAT & corporate tax advisory", "Regulatory compliance checks", "Ongoing finance guidance"] },
  { icon: Building2, title: "Business Setup Advisory", points: ["Mainland & free zone setup", "Licensing guidance", "Structuring advice"] },
  { icon: Briefcase, title: "CPA Firm Support", points: ["Offshore bookkeeping", "Cleanup projects", "Month-end close support"] },
];

const trustStrip = [
  "QuickBooks", "Zoho Books", "Xero", "Tally", "UAE Compliance",
  "Financial Reporting", "Tax Advisory", "VAT Filing", "Corporate Tax",
  "Payroll & WPS", "Free Zone Setup", "Management Reporting",
];

const steps = [
  { label: "Business Discovery", desc: "We understand your business, goals and current setup." },
  { label: "Financial Review", desc: "We assess your books, compliance status and gaps." },
  { label: "Implementation", desc: "We set up systems, processes and clean records." },
  { label: "Monthly Compliance", desc: "We keep your accounting and filings on track." },
  { label: "Growth Support", desc: "We deliver insights to support smarter decisions." },
];

const industries = [
  { icon: Rocket, name: "Startups" },
  { icon: Briefcase, name: "SMEs" },
  { icon: Truck, name: "Trading Companies" },
  { icon: Globe2, name: "Free Zone Companies" },
  { icon: ShoppingBag, name: "Ecommerce Businesses" },
  { icon: Megaphone, name: "Digital Marketing Agencies" },
  { icon: Cloud, name: "SaaS Companies" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Utensils, name: "Restaurants" },
  { icon: HomeIcon, name: "Real Estate" },
  { icon: Store, name: "CPA Firms" },
];

const caseStudies = [
  { tag: "Featured — Fair, Work-Based Pricing", text: "We don't charge inflated flat fees. You pay only for the actual scope of work your business needs — so growing companies get premium accounting at a fraction of typical agency costs, without compromising on quality.", featured: true },
  { tag: "Ecommerce Business", text: "Streamlined month-end closing and strengthened VAT and corporate tax compliance for faster, cleaner reporting.", featured: false },
  { tag: "Digital Marketing Agency", text: "Implemented accounting workflows and management reporting to support faster decision-making.", featured: false },
  { tag: "UK-Based Trust Client", text: "Cleaned and reclassified a large backlog of accounting entries while providing reliable ongoing bookkeeping support for years.", featured: false },
];



const faqs = [
  { q: "What accounting services do you provide?", a: "We provide end-to-end bookkeeping and accounting, VAT registration and filing, corporate tax registration and filing, payroll & WPS processing, management reporting, book cleanup and catch-up accounting, business setup advisory and CPA firm support. Engagements can be monthly retainers or one-off projects depending on what your business needs." },
  { q: "Do you support free zone and mainland companies?", a: "Yes. We support both mainland and free zone businesses across the UAE — including SRTIP, DMCC, IFZA, Meydan, RAKEZ and other free zones — and we tailor compliance and reporting to your specific licence and activity." },
  { q: "Which accounting software do you work with?", a: "QuickBooks Online, Zoho Books, Xero, Odoo, Tally Prime and Excel-based systems, plus reporting tools like Power BI. If you already use a platform, we work inside it; if not, we'll recommend and set up the right fit for your size and budget." },
  { q: "How does your pricing work?", a: "We charge based on the actual volume and complexity of work your business requires — not a one-size-fits-all flat fee. This keeps costs fair for small and growing businesses while still delivering premium-quality accounting and compliance. Share your requirements and we'll give you a transparent quote." },
  { q: "Do you provide book cleanup and catch-up accounting?", a: "Yes. This is one of our specialities — backlog bookkeeping, account reconciliations, reclassification of incorrect entries and full record rebuilds to get your books accurate and audit-ready." },
  { q: "How often will I receive reports?", a: "Most clients receive monthly management reports — profit & loss, balance sheet, cash flow and KPI summaries — but we can also deliver quarterly or custom reporting cycles based on your decision-making needs." },
  { q: "Can you help with UAE corporate tax and VAT compliance?", a: "Yes. We handle VAT registration, periodic VAT returns, corporate tax registration, assessment and filing, and ongoing compliance aligned with FTA requirements, so you stay penalty-free and on time." },
  { q: "Do you provide outsourced support to CPA and accounting firms?", a: "Yes. We provide white-label offshore support to CPA firms — bookkeeping, cleanup projects, month-end close assistance and reporting — so firms can scale capacity without expanding in-house headcount." },
  { q: "Do you work with international and global clients?", a: "Yes. We support UAE-based businesses as well as international founders and firms operating in the UAE and abroad, with a delivery team across multiple jurisdictions for reliable, around-the-clock turnaround." },
  { q: "How do we get started?", a: "Schedule a quick consultation. We'll assess your current setup and requirements, then recommend a suitable engagement model and transparent quote — usually within a few business hours." },
];

const trustBadges = [
  "15+ Years UAE Experience",
  "VAT & Corporate Tax Specialists",
  "Accounting & Book Cleanup Experts",
  "CPA Support Services",
];

function Home() {
  return (
    <SiteLayout>
      {/* SECTION 1 — HERO (Glass logo orbit) */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 text-white overflow-hidden">
        {/* Dubai skyline background — more visible, lighter blur */}
        <div className="absolute inset-0">
          <img src={dubaiHero} alt="Dubai skyline" width={1920} height={1080}
            className="w-full h-full object-cover scale-105 blur-[2px]" />
          <div className="absolute inset-0 bg-[oklch(0.15_0_0)]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0_0)]/85 via-[oklch(0.15_0_0)]/45 to-transparent" />
        </div>
        <div className="container mx-auto max-w-7xl px-5 lg:px-8 relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              UAE • Accounting, Tax & Financial Reporting
            </div>
            <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight drop-shadow-lg">
              Smart Accounting, Tax & <span className="text-primary">Financial Reporting</span> Solutions for Growing Businesses
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed drop-shadow">
              Helping UAE businesses, startups, free zone companies and CPA firms stay compliant, organized
              and growth-ready through accounting, VAT filing, corporate tax, payroll, book cleanup and
              management reporting services.
            </p>
            <div className="mt-8">
              <CtaButtons light />
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/90">
              {trustBadges.map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center items-center min-h-[340px] animate-fade-up">
            {/* Orbiting glow rings */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-primary/30 animate-spin-slow">
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow" />
            </div>
            <div className="absolute w-[280px] h-[280px] rounded-full border border-white/20 animate-spin-rev">
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/80" />
            </div>
            <div className="absolute w-72 h-72 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
            {/* Floating frosted-glass logo card */}
            <div className="relative animate-float-soft w-full max-w-sm rounded-3xl bg-white/95 backdrop-blur border border-white/40 shadow-glow p-10 sm:p-12">
              <img src={logo.url} alt="Sky Walkers Consultancy logo" width={660} height={372}
                className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1B — ANIMATED TRUST STRIP */}
      <section className="border-y border-border bg-accent/40 py-5 overflow-hidden">
        <div className="relative flex">
          <div className="marquee gap-10 pr-10">
            {[...trustStrip, ...trustStrip].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm font-display font-semibold text-foreground/70 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1C — PRICE BANNER */}
      <section className="py-6">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-primary text-primary-foreground px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-glow">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <BadgePercent className="w-8 h-8 shrink-0" />
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl">Services starting from a minimum of AED 99.00</div>
                <div className="text-sm text-primary-foreground/90">Best services at the lowest price in Dubai for small & medium businesses.</div>
              </div>
            </div>
            <a href="https://wa.me/971553104053" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition-smooth whitespace-nowrap">
              Get a quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>


      {/* SECTION 2 — STATS */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Trusted by growing businesses</span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl">Numbers that build confidence</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-card p-8 text-center card-hover">
                  <div className="font-display font-bold text-4xl sm:text-5xl text-primary">
                    <CountUp end={s.end} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — SERVICES */}
      <section id="services" className="py-24">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Services</span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl">End-to-End Financial Solutions</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Three core services we deliver best — backed by a full suite of supporting solutions for UAE businesses.
            </p>
          </Reveal>

          {/* 3 MAIN SERVICES */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mainServices.map(({ icon: Icon, title, desc, to }, i) => (
              <Reveal key={title} delay={i * 50}>
                <a href={to} className="card-hover group h-full block rounded-2xl border border-border bg-card p-8 shadow-card">
                  <div className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-accent text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-smooth">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-xl">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          {/* MORE SERVICES — with data instead of "learn more" */}
          <Reveal className="mt-16 mb-6">
            <h3 className="font-display font-bold text-2xl">More services we provide</h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {moreServices.map(({ icon: Icon, title, points }, i) => (
              <Reveal key={title} delay={i * 50}>
                <div className="card-hover h-full rounded-2xl border border-border bg-card p-7 shadow-card flex flex-col">
                  <div className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="mt-5 font-display font-semibold text-lg">{title}</h4>
                  <ul className="mt-3 space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW WE WORK */}
      <section className="py-24 bg-[oklch(0.15_0_0)] text-white">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">How we work</span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl">A clear path from chaos to clarity</h2>
          </Reveal>
          <div className="mt-14 relative">
            <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {steps.map((s, i) => (
                <Reveal key={s.label} delay={i * 140} className="group relative">
                  <div className="relative inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground font-display font-bold shadow-glow transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-110">
                    <span className="absolute inset-0 rounded-2xl bg-primary/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-lg transition-colors duration-300 group-hover:text-primary">{s.label}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — INDUSTRIES */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Industries</span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl">Industries we serve</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map(({ icon: Icon, name }, i) => (
              <Reveal key={name} delay={i * 40}>
                <div className="card-hover h-full rounded-2xl border border-border p-6 bg-card flex flex-col items-start gap-4">
                  <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="font-display font-semibold">{name}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — SUCCESS STORIES */}
      <section className="py-24 bg-accent/50">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Real business results</span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl">Best services at the lowest price in Dubai</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We prioritise the key services we deliver best — giving small and medium businesses premium quality
              at the lowest price in Dubai.
            </p>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {caseStudies.map((c, i) => (
              <Reveal key={c.tag} delay={i * 70}>
                <div className={`card-hover h-full rounded-2xl border p-8 shadow-card ${c.featured ? "sm:col-span-2 border-primary/40 bg-gradient-primary text-primary-foreground" : "border-border bg-card"}`}>
                  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${c.featured ? "bg-white/20 text-primary-foreground" : "bg-accent text-primary"}`}>
                    {c.tag}
                  </span>
                  <p className={`mt-4 leading-relaxed ${c.featured ? "text-xl sm:text-2xl font-display font-semibold" : "text-lg text-foreground/80"}`}>{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — SOFTWARE */}
      <SoftwareMarquee />

      {/* SECTION 9 — FAQ */}
      <FaqSection items={faqs} />

      {/* SECTION 10 — FINAL CTA */}
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[oklch(0.15_0_0)] text-white p-10 sm:p-16">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                  Let's Simplify Your Accounting & Compliance
                </h2>
                <p className="mt-4 text-white/70 text-lg max-w-lg">
                  Professional accounting, tax, and reporting solutions designed for modern businesses.
                </p>
                <div className="mt-7 flex items-center gap-3 text-sm text-white/60">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  Supported by a qualified global accounting team across multiple jurisdictions.
                </div>
              </div>
              <div className="lg:justify-self-end">
                <CtaButtons light />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
