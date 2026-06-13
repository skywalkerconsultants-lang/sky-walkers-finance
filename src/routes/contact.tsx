import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PagePieces";
import { MessageCircle, Mail, Phone, Clock, Globe2 } from "lucide-react";
import { useState } from "react";
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

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Let's talk about your finances"
        subtitle="Reach out — we usually reply within a few business hours." />

      <section className="py-12 sm:py-20">
        <div className="container mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MessageCircle, label: "WhatsApp", v: "+971 55 310 4053", href: "https://wa.me/971553104053" },
              { icon: Phone, label: "Phone", v: "+971 55 310 4053", href: "tel:+971553104053" },
              { icon: Mail, label: "Email", v: "skywalkerconsultants@gmail.com", href: "mailto:skywalkerconsultants@gmail.com" },
              { icon: Globe2, label: "Presence", v: "UAE • India — serving clients globally" },
              { icon: Clock, label: "Hours", v: "Mon — Sat, 9:00 — 18:00 (GST)" },
            ].map(({ icon: Icon, label, v, href }) => (
              <a key={label} href={href ?? "#"} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 card-hover">
                <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-accent text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">{label}</div>
                  <div className="font-display font-semibold break-words">{v}</div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-card space-y-5"
          >
            <h2 className="font-display font-bold text-xl sm:text-2xl">Send us a message</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" name="name" />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" />
            </div>
            <div>
              <label className="text-sm font-medium">How can we help?</label>
              <textarea required rows={5}
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <button type="submit"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold shadow-glow hover:opacity-90 transition-smooth">
              <MessageCircle className="w-4 h-4" />
              {sent ? "Thanks — we'll be in touch" : "Send message"}
            </button>
          </form>
        </div>

        <div className="container mx-auto max-w-6xl px-5 lg:px-8 mt-10 sm:mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-card">
            <img src={dubaiArt} alt="Dubai skyline — Sky Walkers global presence" loading="lazy" width={1600} height={900}
              className="w-full h-[260px] sm:h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0_0)]/85 via-[oklch(0.15_0_0)]/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
                <Globe2 className="w-3.5 h-3.5 text-primary" /> Global presence
              </span>
              <h2 className="mt-4 font-display font-bold text-xl sm:text-4xl text-white drop-shadow-lg max-w-xl">
                A UAE-facing team, supported across the UAE & India
              </h2>
              <p className="mt-3 text-white/85 text-sm sm:text-base max-w-2xl drop-shadow">
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

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input id={name} name={name} type={type} required
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
