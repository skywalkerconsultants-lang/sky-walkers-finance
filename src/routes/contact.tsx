import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PagePieces";
import { MessageCircle, Mail, Phone, Clock, Globe2, User } from "lucide-react";
import dubaiArt from "@/assets/dubai-art.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sky Walkers Consultancy — UAE Accounting & Tax" },
      { name: "description", content: "Get in touch with Sky Walkers Consultancy in Dubai for accounting, VAT, corporate tax, payroll and business setup support." },
      { property: "og:title", content: "Contact — Sky Walkers Consultancy" },
      { property: "og:description", content: "Reach our Dubai team via WhatsApp, phone or email." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const details = [
  { icon: User, label: "Contact Person", v: "Taiyabji Dahodwala" },
  { icon: MessageCircle, label: "WhatsApp", v: "+971 55 310 4053", href: "https://wa.me/971553104053" },
  { icon: Phone, label: "Phone", v: "+971 55 310 4053", href: "tel:+971553104053" },
  { icon: Mail, label: "Email", v: "skywalkerconsultants@gmail.com", href: "mailto:skywalkerconsultants@gmail.com" },
  { icon: Globe2, label: "Presence", v: "UAE • India — serving clients globally" },
  { icon: Clock, label: "Hours", v: "Mon — Sat, 9:00 — 18:00 (GST)" },
];

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Let's talk about your finances"
        subtitle="Reach out — we usually reply within a few business hours." />

      <section className="py-10 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            {details.map(({ icon: Icon, label, v, href }) => {
              const inner = (
                <>
                  <span className="inline-flex w-10 h-10 sm:w-11 sm:h-11 items-center justify-center rounded-xl bg-accent text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">{label}</div>
                    <div className="font-display font-semibold text-sm sm:text-base break-words">{v}</div>
                  </div>
                </>
              );
              return href ? (
                <a key={label} href={href} className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 card-hover">
                  {inner}
                </a>
              ) : (
                <div key={label} className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
                  {inner}
                </div>
              );
            })}
          </div>

          <a href="https://wa.me/971553104053" target="_blank" rel="noreferrer"
            className="mt-5 sm:mt-6 inline-flex w-full justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold shadow-glow hover:opacity-90 transition-smooth">
            <MessageCircle className="w-4 h-4" /> Message us on WhatsApp
          </a>
        </div>

        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-card">
            <img src={dubaiArt} alt="Dubai skyline — Sky Walkers global presence" loading="lazy" width={1600} height={900}
              className="w-full h-[220px] sm:h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0_0)]/85 via-[oklch(0.15_0_0)]/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-12">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-white backdrop-blur">
                <Globe2 className="w-3.5 h-3.5 text-primary" /> Global presence
              </span>
              <h2 className="mt-3 sm:mt-4 font-display font-bold text-lg sm:text-4xl text-white drop-shadow-lg max-w-xl">
                A UAE-facing team, supported across the UAE & India
              </h2>
              <p className="mt-2 sm:mt-3 text-white/85 text-xs sm:text-base max-w-2xl drop-shadow">
                Our UAE advisory team is backed by experienced accountants and qualified professionals across the
                UAE and India — giving clients responsive, around-the-clock support wherever they operate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
