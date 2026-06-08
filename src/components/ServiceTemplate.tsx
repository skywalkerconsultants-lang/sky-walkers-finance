import { CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, PageCTA } from "@/components/PagePieces";
import { FaqSection } from "@/components/FaqSection";
import { Reveal } from "@/components/Reveal";

export type ServiceBlock = {
  eyebrow: string;
  title: string;
  intro?: string;
  items: { name: string; desc?: string }[];
  dark?: boolean;
};

export function ServiceTemplate({
  eyebrow,
  title,
  subtitle,
  blocks,
  process,
  platforms,
  faqs,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  blocks: ServiceBlock[];
  process?: { step: string; label: string }[];
  platforms?: string[];
  faqs?: { q: string; a: string }[];
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

      {blocks.map((block, bi) => (
        <section
          key={bi}
          className={`py-24 ${block.dark ? "bg-[oklch(0.15_0_0)] text-white" : bi % 2 ? "bg-accent/50" : ""}`}
        >
          <div className="container mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">{block.eyebrow}</span>
              <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl">{block.title}</h2>
              {block.intro && (
                <p className={`mt-4 text-lg ${block.dark ? "text-white/70" : "text-muted-foreground"}`}>{block.intro}</p>
              )}
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {block.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 60}>
                  <div
                    className={`card-hover h-full rounded-2xl border p-6 ${
                      block.dark ? "border-white/10 bg-white/5" : "border-border bg-card shadow-card"
                    }`}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <h3 className="mt-4 font-display font-semibold text-lg">{item.name}</h3>
                    {item.desc && (
                      <p className={`mt-2 text-sm leading-relaxed ${block.dark ? "text-white/60" : "text-muted-foreground"}`}>
                        {item.desc}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {process && (
        <section className="py-24 bg-accent/50">
          <div className="container mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Process</span>
              <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl">How we work</h2>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {process.map((p, i) => (
                <Reveal key={p.label} delay={i * 80}>
                  <div className="rounded-2xl border border-border bg-card p-6 h-full card-hover">
                    <div className="font-display font-bold text-3xl text-primary">{String(i + 1).padStart(2, "0")}</div>
                    <div className="mt-3 font-display font-semibold">{p.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {platforms && (
        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-5 lg:px-8 text-center">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Platforms</span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl">Tools we work with</h2>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {platforms.map((name) => (
                <div key={name} className="rounded-2xl border border-border bg-card py-7 font-display font-semibold card-hover">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs && <FaqSection items={faqs} />}

      <PageCTA title="Let's simplify your accounting & compliance" subtitle="Professional accounting, tax, and reporting solutions designed for modern businesses." />
    </SiteLayout>
  );
}


