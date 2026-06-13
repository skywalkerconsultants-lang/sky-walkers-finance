import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

type Tool = { name: string; slug?: string; mono?: string; color: string };

// Real brand logos via Simple Icons CDN (brand-coloured SVGs).
// Tools without a reliable Simple Icons slug use a coloured monogram. Any logo
// that fails to load also falls back to the monogram automatically.
const tools: Tool[] = [
  { name: "QuickBooks", slug: "quickbooks", mono: "QB", color: "#2CA01C" },
  { name: "Xero", slug: "xero", mono: "X", color: "#13B5EA" },
  { name: "Zoho Books", slug: "zoho", mono: "Z", color: "#E42527" },
  { name: "Odoo", slug: "odoo", mono: "O", color: "#714B67" },
  { name: "Stripe", slug: "stripe", mono: "S", color: "#635BFF" },
  { name: "Tally Prime", mono: "T", color: "#1C75BC" },
  { name: "Power BI", mono: "BI", color: "#E6A817" },
  { name: "Excel", mono: "X", color: "#217346" },
  { name: "PowerPoint", mono: "P", color: "#C43E1C" },
  { name: "WPS Office", mono: "W", color: "#008060" },
  { name: "FTA EmaraTax", mono: "ET", color: "#C8102E" },
  { name: "Mashreq Neo", mono: "M", color: "#F47920" },
];

function Monogram({ mono, color }: { mono?: string; color: string }) {
  return (
    <span
      className="inline-flex w-9 h-9 items-center justify-center rounded-xl font-display font-bold text-white text-sm shrink-0"
      style={{ backgroundColor: color }}
      aria-hidden
    >
      {mono}
    </span>
  );
}

function Badge({ name, slug, mono, color }: Tool) {
  const [failed, setFailed] = useState(false);
  const showImg = slug && !failed;
  return (
    <div className="card-hover inline-flex select-none items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 shadow-card whitespace-nowrap">
      {showImg ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`}
          alt={`${name} logo`}
          width={28}
          height={28}
          loading="lazy"
          draggable={false}
          onError={() => setFailed(true)}
          className="w-7 h-7 shrink-0 pointer-events-none"
        />
      ) : (
        <Monogram mono={mono} color={color} />
      )}
      <span className="font-display font-semibold text-base">{name}</span>
    </div>
  );
}


export function SoftwareMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const paused = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  // Gentle auto-scroll that loops seamlessly; pauses while hovering/dragging.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const tick = () => {
      if (el && !paused.current && !dragging.current) {
        el.scrollLeft += 0.6;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    dragging.current = true;
    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el || !dragging.current) return;
    el.scrollLeft = startScroll.current - (e.clientX - startX.current);
    const half = el.scrollWidth / 2;
    if (el.scrollLeft >= half) el.scrollLeft -= half;
    if (el.scrollLeft < 0) el.scrollLeft += half;
  };
  const endDrag = () => { dragging.current = false; };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-5 lg:px-8 text-center">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Software expertise</span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl">Tools & platforms we work with</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From accounting and payroll to UAE tax filing, payments and reporting — drag to explore the platforms
            your business already relies on.
          </p>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => { paused.current = false; }}
        className="mt-12 flex gap-5 overflow-x-auto px-5 lg:px-8 cursor-grab active:cursor-grabbing no-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {[...tools, ...tools].map((t, i) => (
          <Badge key={`${t.name}-${i}`} {...t} />
        ))}
      </div>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}
