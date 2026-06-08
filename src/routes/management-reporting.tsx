import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/ServiceTemplate";

export const Route = createFileRoute("/management-reporting")({
  head: () => ({
    meta: [
      { title: "Management Reporting & Financial Analysis | Sky Walkers" },
      { name: "description", content: "Management reporting and financial analysis: P&L, balance sheet, cash flow, budget vs actual, KPI dashboards, forecasting and board reporting." },
      { property: "og:title", content: "Management Reporting & Financial Analysis — Sky Walkers" },
      { property: "og:description", content: "Decision-ready reporting and analysis for growing businesses." },
      { property: "og:url", content: "/management-reporting" },
    ],
    links: [{ rel: "canonical", href: "/management-reporting" }],
  }),
  component: () => (
    <ServiceTemplate
      eyebrow="Management Reporting"
      title="Management Reporting & Financial Analysis"
      subtitle="Turn your numbers into insight with decision-ready reports tailored to your business."
      blocks={[
        {
          eyebrow: "Deliverables",
          title: "Reporting that drives decisions",
          intro: "Clear, accurate reports delivered on a schedule that suits your business.",
          items: [
            { name: "Profit & Loss", desc: "Track revenue, costs and profitability." },
            { name: "Balance Sheet", desc: "Understand your financial position." },
            { name: "Cash Flow Statement", desc: "Monitor liquidity and cash movement." },
            { name: "Budget vs Actual", desc: "Compare performance against plans." },
            { name: "KPI Dashboards", desc: "Visual metrics that matter most." },
            { name: "Financial Analysis", desc: "Deep insight into business drivers." },
            { name: "Business Performance Reviews", desc: "Periodic reviews with recommendations." },
            { name: "Forecasting", desc: "Forward-looking financial projections." },
            { name: "Board Reporting", desc: "Investor and board-ready report packs." },
          ],
        },
      ]}
      faqs={[
        { q: "How often do you deliver reports?", a: "Reporting can be monthly, quarterly, or customized based on your business requirements." },
        { q: "Can you build custom KPI dashboards?", a: "Yes — we design dashboards using Excel and Power BI tailored to the metrics that drive your business." },
      ]}
    />
  ),
});
