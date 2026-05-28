import { ReactNode } from "react";
import { MessageCircle } from "lucide-react";

export function PageHero({
  eyebrow, title, subtitle, children,
}: { eyebrow: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative pt-32 pb-20 bg-hero text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="container mx-auto max-w-5xl px-5 lg:px-8 relative text-center animate-fade-up">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">{eyebrow}</span>
        <h1 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">{title}</h1>
        {subtitle && <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

export function PageCTA({ title = "Ready to get started?", subtitle = "Speak with our team — get a quick consultation today." }: { title?: string; subtitle?: string }) {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-5xl px-5 lg:px-8">
        <div className="rounded-3xl bg-accent p-10 sm:p-14 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <a href="https://wa.me/971500000000" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold shadow-glow hover:opacity-90 transition-smooth">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
