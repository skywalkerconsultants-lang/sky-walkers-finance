import { ReactNode } from "react";
import { MessageCircle, CalendarDays } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/track";

const WHATSAPP = "https://wa.me/971553104053";

export function CtaButtons({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-glow hover:opacity-90 transition-smooth"
      >
        <CalendarDays className="w-4 h-4" /> Schedule Consultation
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackWhatsAppClick("General enquiry", "cta_button")}
        className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-smooth ${
          light
            ? "bg-white text-[oklch(0.15_0_0)] hover:bg-white/90"
            : "border border-border bg-card hover:border-primary"
        }`}
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp Us
      </a>
    </div>
  );
}

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
        <div className="mt-8 flex justify-center">
          <CtaButtons light />
        </div>
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
          <div className="mt-6 flex justify-center">
            <CtaButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
