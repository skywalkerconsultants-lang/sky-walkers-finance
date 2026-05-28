import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PagePieces";
import { MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

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

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: MessageCircle, label: "WhatsApp", v: "+971 50 000 0000", href: "https://wa.me/971500000000" },
              { icon: Phone, label: "Phone", v: "+971 4 000 0000" },
              { icon: Mail, label: "Email", v: "hello@skywalkers.ae", href: "mailto:hello@skywalkers.ae" },
              { icon: MapPin, label: "Office", v: "Business Bay, Dubai, UAE" },
              { icon: Clock, label: "Hours", v: "Mon — Sat, 9:00 — 18:00" },
            ].map(({ icon: Icon, label, v, href }) => (
              <a key={label} href={href ?? "#"} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 card-hover">
                <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-accent text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">{label}</div>
                  <div className="font-display font-semibold">{v}</div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-card space-y-5"
          >
            <h2 className="font-display font-bold text-2xl">Send us a message</h2>
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
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold shadow-glow hover:opacity-90 transition-smooth">
              <MessageCircle className="w-4 h-4" />
              {sent ? "Thanks — we'll be in touch" : "Send message"}
            </button>
          </form>
        </div>

        <div className="container mx-auto max-w-6xl px-5 lg:px-8 mt-14">
          <div className="rounded-3xl overflow-hidden border border-border shadow-card">
            <iframe
              title="Office location"
              src="https://www.google.com/maps?q=Business+Bay+Dubai&output=embed"
              className="w-full h-[380px] border-0"
              loading="lazy"
            />
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
