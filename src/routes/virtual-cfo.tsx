import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/ServiceTemplate";

export const Route = createFileRoute("/virtual-cfo")({
  head: () => ({
    meta: [
      { title: "Virtual CFO Services in UAE | Sky Walkers Consultancy" },
      { name: "description", content: "Outsourced Virtual CFO services for UAE startups and SMEs — budgeting, forecasting, cash flow planning, financial strategy and investor-ready reporting." },
      { property: "og:title", content: "Virtual CFO Services in UAE — Sky Walkers" },
      { property: "og:description", content: "Strategic financial leadership without the cost of a full-time CFO." },
      { property: "og:url", content: "/virtual-cfo" },
    ],
    links: [{ rel: "canonical", href: "/virtual-cfo" }],
  }),
  component: () => (
    <ServiceTemplate
      eyebrow="Virtual CFO"
      title="Virtual CFO Services for Growing UAE Businesses"
      subtitle="Strategic financial leadership and forward planning — without the cost of a full-time CFO."
      blocks={[
        {
          eyebrow: "What we deliver",
          title: "Financial strategy on demand",
          intro: "A finance partner who helps you plan, fund and grow with confidence.",
          items: [
            { name: "Budgeting", desc: "Build realistic budgets aligned with your goals." },
            { name: "Forecasting", desc: "Forward-looking revenue and expense projections." },
            { name: "Cash Flow Planning", desc: "Protect liquidity and runway with proactive planning." },
            { name: "Financial Strategy", desc: "Pricing, margins and growth decisions backed by data." },
            { name: "Fundraising Support", desc: "Investor-ready models, decks and metrics." },
            { name: "Board & Investor Reporting", desc: "Clear performance reporting for stakeholders." },
          ],
        },
        {
          eyebrow: "Benefits",
          title: "Why it matters",
          dark: true,
          items: [
            { name: "Smarter Decisions", desc: "Data-driven guidance at every turn." },
            { name: "Better Cash Control", desc: "Always know your runway and obligations." },
            { name: "Growth Ready", desc: "Plan, fund and scale with a clear roadmap." },
          ],
        },
      ]}
      platforms={["Excel Models", "Power BI", "QuickBooks", "Zoho Books"]}
      process={[
        { step: "01", label: "Discovery" },
        { step: "02", label: "Financial Review" },
        { step: "03", label: "Planning" },
        { step: "04", label: "Execution" },
        { step: "05", label: "Ongoing Advisory" },
      ]}
      faqs={[
        { q: "Is a Virtual CFO right for my business?", a: "If you need strategic financial guidance, forecasting and reporting but aren't ready for a full-time CFO, a Virtual CFO gives you that expertise flexibly." },
        { q: "Can you help with fundraising?", a: "Yes. We prepare investor-ready financial models, projections and the metrics investors expect to see." },
      ]}
    />
  ),
});
