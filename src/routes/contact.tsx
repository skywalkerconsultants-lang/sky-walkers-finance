import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PagePieces";
import { MessageCircle, Mail, Phone, Clock, Globe2, User, Copy, Check, PhoneCall } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/track";
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

const PHONE = "+971 55 310 4053";
const PHONE_RAW = "+971553104053";
const EMAIL = "skywalkerconsultants@gmail.com";

const services = [
  "Accounting & Bookkeeping",
  "VAT Filing",
  "Corporate Tax Filing",
  "Book Cleanup & Catch-Up",
  "Payroll & WPS",
  "Management Reporting",
  "Business Setup Advisory",
  "CPA Firm Support",
  "General enquiry",
];

function ContactPage() {
  const [service, setService] = useState(services[0]);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const waMessage = encodeURIComponent(
    `Hi Sky Walkers, I'd like to enquire about ${service}. Please share more details.`,
  );
  const waHref = `https://wa.me/${PHONE_RAW.replace("+", "")}?text=${waMessage}`;

  const copy = async (value: string, which: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(value);
      if (which === "email") { setCopiedEmail(true); setTimeout(() => setCopiedEmail(false), 1800); }
      else { setCopiedPhone(true); setTimeout(() => setCopiedPhone(false), 1800); }
    } catch { /* clipboard unavailable */ }
  };

  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Let's talk about your finances"
        subtitle="Reach out — we usually reply within a few business hours." />

      <section className="py-10 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* WhatsApp CTA with service picker */}
          <div className="rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-card">
            <label htmlFor="svc" className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
              What do you need help with?
            </label>
            <select
              id="svc"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <a href={waHref} target="_blank" rel="noreferrer"
              onClick={() => trackWhatsAppClick(service, "contact_service_picker")}
              className="mt-4 inline-flex w-full justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold shadow-glow hover:opacity-90 transition-smooth">
              <MessageCircle className="w-4 h-4" /> Message us on WhatsApp about {service}
            </a>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Opens WhatsApp with your enquiry pre-filled.
            </p>
          </div>

          {/* Contact details */}
          <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2">
            {/* Contact person */}
            <div className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
              <span className="inline-flex w-10 h-10 sm:w-11 sm:h-11 items-center justify-center rounded-xl bg-accent text-primary shrink-0">
                <User className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">Contact Person</div>
                <div className="font-display font-semibold text-sm sm:text-base break-words">Taiyabji Dahodwala</div>
              </div>
            </div>

            {/* Phone — click to call + copy */}
            <div className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
              <span className="inline-flex w-10 h-10 sm:w-11 sm:h-11 items-center justify-center rounded-xl bg-accent text-primary shrink-0">
                <Phone className="w-5 h-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">Phone</div>
                <div className="font-display font-semibold text-sm sm:text-base break-words">{PHONE}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <a href={`tel:${PHONE_RAW}`} className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1.5 text-xs font-semibold hover:bg-primary/20 transition-smooth">
                    <PhoneCall className="w-3.5 h-3.5" /> Call
                  </a>
                  <button type="button" onClick={() => copy(PHONE_RAW, "phone")}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:border-primary hover:text-primary transition-smooth">
                    {copiedPhone ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
                  </button>
                </div>
              </div>
            </div>

            {/* Email — mailto + copy */}
            <div className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 sm:col-span-2">
              <span className="inline-flex w-10 h-10 sm:w-11 sm:h-11 items-center justify-center rounded-xl bg-accent text-primary shrink-0">
                <Mail className="w-5 h-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">Email</div>
                <div className="font-display font-semibold text-sm sm:text-base break-all">{EMAIL}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1.5 text-xs font-semibold hover:bg-primary/20 transition-smooth">
                    <Mail className="w-3.5 h-3.5" /> Email us
                  </a>
                  <button type="button" onClick={() => copy(EMAIL, "email")}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:border-primary hover:text-primary transition-smooth">
                    {copiedEmail ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
                  </button>
                </div>
              </div>
            </div>

            {/* Presence */}
            <div className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
              <span className="inline-flex w-10 h-10 sm:w-11 sm:h-11 items-center justify-center rounded-xl bg-accent text-primary shrink-0">
                <Globe2 className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">Presence</div>
                <div className="font-display font-semibold text-sm sm:text-base break-words">UAE • India — serving clients globally</div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
              <span className="inline-flex w-10 h-10 sm:w-11 sm:h-11 items-center justify-center rounded-xl bg-accent text-primary shrink-0">
                <Clock className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">Hours</div>
                <div className="font-display font-semibold text-sm sm:text-base break-words">Mon — Sat, 9:00 — 18:00 (GST)</div>
              </div>
            </div>
          </div>
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
