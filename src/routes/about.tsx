import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, PageCTA } from "@/components/PagePieces";
import founderImg from "@/assets/founder.jpg";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sky Walkers Consultancy — UAE Accounting & Tax Partner" },
      { name: "description", content: "Founded by Taiyab Dahodwala with 15+ years of UAE accounting and finance expertise. Modern, affordable accounting for SMEs and startups." },
      { property: "og:title", content: "About — Sky Walkers Consultancy" },
      { property: "og:description", content: "Modern UAE finance consultancy built on 15+ years of accounting and tax expertise." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About us" title="A modern UAE finance partner"
        subtitle="Sky Walkers Consultancy helps ambitious UAE businesses stay compliant, organised and decision-ready." />

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
            <img src={founderImg} alt="Founder Taiyab Dahodwala" loading="lazy" width={1024} height={1024} className="relative rounded-2xl shadow-card w-full" />
          </div>
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Founder story</span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl">Taiyab Dahodwala</h2>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>With 15+ years across accounting, VAT, corporate tax and financial operations in Dubai, Taiyab founded Sky Walkers Consultancy to bring boutique consulting standards to UAE SMEs at startup-friendly prices.</p>
              <p>Today, the firm partners with founders, finance leaders and business owners across the Emirates — combining deep local knowledge with modern cloud-first workflows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/60">
        <div className="container mx-auto max-w-6xl px-5 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Mission", d: "Make modern, reliable finance accessible to every UAE business." },
            { icon: Eye, title: "Vision", d: "Be the most trusted finance partner for ambitious SMEs in the region." },
            { icon: Heart, title: "Values", d: "Clarity, integrity, technology and genuine partnership in every engagement." },
          ].map(({ icon: Icon, title, d }) => (
            <div key={title} className="rounded-2xl bg-card border border-border p-7 card-hover">
              <Icon className="w-6 h-6 text-primary" />
              <h3 className="mt-4 font-display font-semibold text-xl">{title}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <PageCTA />
    </SiteLayout>
  );
}
