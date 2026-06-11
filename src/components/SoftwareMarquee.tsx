import { Reveal } from "@/components/Reveal";

type Tool = { name: string; mono: string; color: string };

// Brand-accented software badges — symbols/monograms in each tool's brand colour.
const tools: Tool[] = [
  { name: "QuickBooks", mono: "qb", color: "#2CA01C" },
  { name: "Xero", mono: "X", color: "#13B5EA" },
  { name: "Zoho Books", mono: "Z", color: "#E42527" },
  { name: "Odoo", mono: "O", color: "#714B67" },
  { name: "WPS", mono: "W", color: "#008060" },
  { name: "FTA EmaraTax", mono: "ET", color: "#C8102E" },
  { name: "Stripe", mono: "S", color: "#635BFF" },
  { name: "Tally Prime", mono: "T", color: "#1C75BC" },
  { name: "Mashreq Neo", mono: "M", color: "#F47920" },
  { name: "Power BI", mono: "BI", color: "#E6A817" },
  { name: "PowerPoint", mono: "P", color: "#C43E1C" },
  { name: "Excel", mono: "XL", color: "#217346" },
];

function Badge({ name, mono, color }: Tool) {
  return (
    <div className="card-hover inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 shadow-card whitespace-nowrap">
      <span
        className="inline-flex w-10 h-10 items-center justify-center rounded-xl font-display font-bold text-white text-sm shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden
      >
        {mono}
      </span>
      <span className="font-display font-semibold text-base">{name}</span>
    </div>
  );
}

export function SoftwareMarquee() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-5 lg:px-8 text-center">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Software expertise</span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl">Tools & platforms we work with</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From accounting and payroll to UAE tax filing, payments and reporting — we work across the platforms
            your business already relies on.
          </p>
        </Reveal>
      </div>

      {/* Row 1 — left */}
      <div className="marquee-pause relative mt-12">
        <div className="marquee gap-5 pr-5">
          {[...tools, ...tools].map((t, i) => (
            <Badge key={`a-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2 — right (reverse) */}
      <div className="marquee-pause relative mt-5">
        <div className="marquee-reverse gap-5 pr-5">
          {[...tools.slice().reverse(), ...tools.slice().reverse()].map((t, i) => (
            <Badge key={`b-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}
