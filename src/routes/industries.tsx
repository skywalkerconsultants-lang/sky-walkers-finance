import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, PageCTA } from "@/components/PagePieces";
import { Rocket, Briefcase, ShoppingBag, Truck, Globe2, Sparkles, Utensils, Store } from "lucide-react";
import ogIndustries from "@/assets/og-industries.jpg.asset.json";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — UAE Accounting Specialists | Sky Walkers" },
      { name: "description", content: "Specialised accounting & tax expertise for UAE startups, SMEs, ecommerce, trading companies, free zones, restaurants and professional services." },
      { property: "og:title", content: "Industries — Sky Walkers Consultancy" },
      { property: "og:description", content: "Industry-specific finance playbooks for the sectors driving the UAE economy." },
      { property: "og:url", content: "/industries" },
      { property: "og:image", content: ogIndustries.url },
      { name: "twitter:image", content: ogIndustries.url },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: Rocket, name: "Startups", d: "Lean accounting stacks, runway tracking and investor-ready reporting." },
  { icon: Briefcase, name: "SMEs", d: "Affordable monthly retainers covering accounting, VAT and tax." },
  { icon: ShoppingBag, name: "Ecommerce", d: "Multi-channel reconciliation, COGS tracking and Shopify/Amazon books." },
  { icon: Truck, name: "Trading Companies", d: "Import/export accounting, inventory and landed-cost tracking." },
  { icon: Globe2, name: "Free Zone Companies", d: "Free zone CT advisory, qualifying income analysis and filings." },
  { icon: Sparkles, name: "Agencies", d: "Project-based revenue recognition, retainers and billing controls." },
  { icon: Utensils, name: "Restaurants", d: "POS integration, daily sales reporting and food-cost analytics." },
  { icon: Store, name: "Professional Services", d: "Time-based billing, WIP tracking and partner reporting." },
];

function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Industries" title="Built for the sectors driving the UAE"
        subtitle="Tailored finance playbooks — not generic templates — for the businesses we serve." />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map(({ icon: Icon, name, d }) => (
            <div key={name} className="card-hover rounded-2xl border border-border bg-card p-7">
              <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-accent text-primary">
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="mt-5 font-display font-semibold text-lg">{name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <PageCTA title="Not sure which fits?" subtitle="Tell us about your business — we'll recommend the right setup." />
    </SiteLayout>
  );
}
