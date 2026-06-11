import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/ServiceTemplate";

export const Route = createFileRoute("/cpa-support")({
  head: () => ({
    meta: [
      { title: "Offshore Accounting & CPA Firm Support | Sky Walkers" },
      { name: "description", content: "Offshore accounting support for CPA and accounting firms — white-label bookkeeping, cleanup projects, month-end close and reporting support that scales with your firm." },
      { property: "og:title", content: "CPA Firm Support & Offshore Accounting — Sky Walkers" },
      { property: "og:description", content: "Scalable offshore bookkeeping, cleanup and close support for CPA and accounting firms." },
      { property: "og:url", content: "/cpa-support" },
    ],
    links: [{ rel: "canonical", href: "/cpa-support" }],
  }),
  component: () => (
    <ServiceTemplate
      eyebrow="CPA Firm Support"
      title="Offshore Accounting Support for CPA Firms"
      subtitle="A reliable extension of your team — white-label bookkeeping, cleanup and close support that scales on demand."
      blocks={[
        {
          eyebrow: "What we deliver",
          title: "Your offshore accounting team",
          intro: "Capacity, accuracy and turnaround that lets your firm take on more work.",
          items: [
            { name: "Offshore Bookkeeping", desc: "Ongoing bookkeeping support under your brand." },
            { name: "Cleanup Projects", desc: "Backlog cleanup and account reconstruction." },
            { name: "Month-End Close", desc: "Reconciliations and timely period close support." },
            { name: "Reporting Support", desc: "Financial statements and management reporting." },
            { name: "Reconciliations", desc: "Bank, credit card and ledger reconciliations." },
            { name: "Scalable Capacity", desc: "Flex up during busy season without hiring." },
          ],
        },
        {
          eyebrow: "Benefits",
          title: "Why firms partner with us",
          dark: true,
          items: [
            { name: "More Capacity", desc: "Take on more clients without adding headcount." },
            { name: "Faster Turnaround", desc: "Consistent delivery and quick response times." },
            { name: "Lower Cost", desc: "Premium quality at a fraction of in-house cost." },
          ],
        },
      ]}
      platforms={["QuickBooks", "Xero", "Zoho Books", "Tally", "Excel Models"]}
      process={[
        { step: "01", label: "Scoping" },
        { step: "02", label: "Onboarding" },
        { step: "03", label: "Delivery" },
        { step: "04", label: "Review" },
        { step: "05", label: "Scale" },
      ]}
      faqs={[
        { q: "Do you work under our firm's brand?", a: "Yes. We provide white-label offshore support that works seamlessly as an extension of your team." },
        { q: "Can you help during busy season?", a: "Absolutely. Our model is built to flex up capacity during peak periods without long-term overhead." },
      ]}
    />
  ),
});
