import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  Calculator, FileCheck2, Receipt, Users2, Building2, LineChart,
  ShieldCheck, Cloud, Award, Sparkles, ArrowRight, MessageCircle,
  CalendarDays, ShoppingBag, Rocket, Utensils, Briefcase, Truck,
  Store, Globe2,
} from "lucide-react";
import heroImg from "@/assets/hero-dashboard.jpg";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sky Walkers Consultancy — Smart Accounting & Tax for UAE Businesses" },
      { name: "description", content: "Affordable accounting, VAT filing, corporate tax, payroll and business setup in the UAE. 15+ years experience helping startups, SMEs and free zone companies." },
      { property: "og:title", content: "Sky Walkers Consultancy — UAE Accounting & Tax Partner" },
      { property: "og:description", content: "Modern, affordable accounting and tax compliance for UAE startups, SMEs and free zone companies." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Calculator, title: "Accounting & Bookkeeping", desc: "Daily bookkeeping, reconciliation, MIS reporting and financial management." },
  { icon: Receipt, title: "VAT Filing Services", desc: "VAT registration, filing, reconciliation and full UAE VAT compliance." },
  { icon: FileCheck2, title: "Corporate Tax Filing", desc: "Corporate tax registration, filing, advisory and ongoing compliance." },
  { icon: Users2, title: "Payroll & WPS", desc: "Employee payroll processing and WPS management end-to-end." },
  { icon: Building2, title: "Business Setup", desc: "Mainland and free zone company formation, licensing and PRO support." },
  { icon: LineChart, title: "CFO & Advisory", desc: "Budgeting, forecasting, business insights and strategic financial planning." },
];

const whyUs = [
  { icon: Award, k: "15+", t: "Years UAE Experience", d: "Strong practical exposure to accounting and taxation in Dubai." },
  { icon: Sparkles, k: "SME", t: "Affordable Solutions", d: "Flexible service packages designed for startups and growing businesses." },
  { icon: Cloud, k: "Cloud", t: "Modern Systems", d: "Technology-driven workflows on QuickBooks, Zoho, Xero and Tally." },
  { icon: ShieldCheck, k: "Pro", t: "Qualified Finance Team", d: "Experienced professionals supporting compliance and reporting." },
];

const industries = [
  { icon: Rocket, name: "Startups" },
  { icon: Briefcase, name: "SMEs" },
  { icon: ShoppingBag, name: "Ecommerce" },
  { icon: Truck, name: "Trading Companies" },
  { icon: Globe2, name: "Free Zone Companies" },
  { icon: Sparkles, name: "Agencies" },
  { icon: Utensils, name: "Restaurants" },
  { icon: Store, name: "Professional Services" },
];

const trustItems = [
  "QuickBooks", "Zoho Books", "Xero", "Tally",
  "UAE Compliance", "Financial Reporting", "Tax Advisory",
  "VAT Registered", "Corporate Tax Ready",
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 bg-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="container mx-auto max-w-7xl px-5 lg:px-8 relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              UAE • VAT & Corporate Tax Specialists
            </div>
            <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Smart & Affordable <span className="text-primary">Accounting Solutions</span> for UAE Businesses
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              Helping startups, SMEs, free zone companies and growing businesses manage
              accounting, VAT filing, corporate tax compliance, payroll and business setup with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/971500000000" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-glow hover:opacity-90 transition-smooth">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <a href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[oklch(0.15_0_0)] px-6 py-3.5 text-sm font-semibold hover:bg-white/90 transition-smooth">
                <CalendarDays className="w-4 h-4" /> Schedule Meeting
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/70">
              {["15+ Years UAE Experience","VAT & Corporate Tax Experts","Cloud Accounting Specialists","SME-Focused Solutions"].map(t => (
                <div key={t} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
            <img src={heroImg} alt="UAE accounting dashboard preview" width={1280} height={1280}
              className="relative rounded-2xl border border-white/10 shadow-glow w-full h-auto" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/60 py-6 overflow-hidden">
        <div className="marquee gap-12 px-6 text-sm font-medium text-muted-foreground">
          {[...trustItems, ...trustItems].map((t, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap">
              {t} <span className="w-1 h-1 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Services</span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl">
              End-to-end finance for modern UAE businesses
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From day-to-day bookkeeping to corporate tax — we run your numbers so you can run your business.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-hover group rounded-2xl border border-border bg-card p-7 shadow-card">
                <div className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-accent text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-smooth">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-[oklch(0.15_0_0)] text-white">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Why us</span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl">
              Built for the way modern UAE businesses operate.
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-lg">
              We blend deep local expertise with cloud-first workflows — so compliance feels effortless
              and your finances stay decision-ready.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyUs.map(({ icon: Icon, k, t, d }) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-primary/50 transition-smooth">
                <Icon className="w-6 h-6 text-primary" />
                <div className="mt-4 font-display font-bold text-2xl">{k}</div>
                <div className="font-semibold mt-1">{t}</div>
                <p className="mt-2 text-sm text-white/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Industries</span>
              <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl">Industries we serve</h2>
            </div>
            <p className="text-muted-foreground sm:max-w-sm">
              Tailored finance playbooks for the sectors driving the UAE economy.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map(({ icon: Icon, name }) => (
              <div key={name} className="card-hover rounded-2xl border border-border p-6 bg-card flex flex-col items-start gap-4">
                <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="w-5 h-5" />
                </span>
                <div className="font-display font-semibold">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-24 bg-accent/60">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
            <img src={founderImg} alt="Taiyab Dahodwala, Founder" loading="lazy" width={1024} height={1024}
              className="relative rounded-2xl shadow-card w-full h-auto" />
          </div>
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Meet the founder</span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl">Taiyab Dahodwala</h2>
            <p className="mt-1 text-muted-foreground">Founder — 15+ years UAE accounting & finance experience</p>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                With over 15 years of professional experience in Dubai across accounting, VAT, corporate tax,
                and financial operations, Taiyab established Sky Walkers Consultancy to provide modern,
                reliable and affordable accounting solutions for UAE businesses.
              </p>
              <p>
                Backed by a qualified finance team with practical industry expertise, the firm supports
                startups and SMEs with efficient compliance and financial management solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOFTWARE */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Software expertise</span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl">Modern cloud accounting platforms</h2>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {["QuickBooks","Zoho Books","Xero","Tally"].map(name => (
              <div key={name} className="rounded-2xl border border-border bg-card py-8 font-display font-semibold text-lg card-hover">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="py-24">
        <div className="container mx-auto max-w-6xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[oklch(0.15_0_0)] text-white p-10 sm:p-16">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                  Let's simplify your business compliance.
                </h2>
                <p className="mt-4 text-white/70 text-lg max-w-lg">
                  Professional accounting and tax solutions tailored for modern UAE businesses.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a href="https://wa.me/971500000000" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold shadow-glow hover:opacity-90 transition-smooth">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
                <a href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[oklch(0.15_0_0)] px-6 py-3.5 font-semibold hover:bg-white/90 transition-smooth">
                  <CalendarDays className="w-4 h-4" /> Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
