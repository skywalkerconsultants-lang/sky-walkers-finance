import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/ServiceTemplate";

export const Route = createFileRoute("/accounting")({
  head: () => ({
    meta: [
      { title: "Professional Accounting Services for UAE Businesses | Sky Walkers" },
      { name: "description", content: "Reliable accounting support — bookkeeping, reconciliations, financial statements, month-end closing and management reporting for UAE businesses." },
      { property: "og:title", content: "Accounting Services — Sky Walkers Consultancy" },
      { property: "og:description", content: "Reliable accounting support that keeps your business compliant, organized and ready for growth." },
      { property: "og:url", content: "/accounting" },
    ],
    links: [{ rel: "canonical", href: "/accounting" }],
  }),
  component: () => (
    <ServiceTemplate
      eyebrow="Accounting Services"
      title="Professional Accounting Services for UAE Businesses"
      subtitle="Reliable accounting support that keeps your business compliant, organized, and ready for growth."
      blocks={[
        {
          eyebrow: "What we deliver",
          title: "Complete accounting management",
          intro: "Accurate, up-to-date books maintained by a qualified global accounting team.",
          items: [
            { name: "Bookkeeping", desc: "Accurate daily recording of all financial transactions." },
            { name: "Bank Reconciliations", desc: "Matched and reconciled bank and ledger balances." },
            { name: "Accounts Payable", desc: "Vendor bills, payments and supplier ledger management." },
            { name: "Accounts Receivable", desc: "Invoicing, collections and customer ledger tracking." },
            { name: "Financial Statements", desc: "P&L, balance sheet and cash flow preparation." },
            { name: "General Ledger Maintenance", desc: "Clean, well-structured chart of accounts." },
            { name: "Month-End Closing", desc: "Timely closing with reconciliations and reviews." },
            { name: "Management Reporting", desc: "Insightful reports for confident decision-making." },
          ],
        },
        {
          eyebrow: "Benefits",
          title: "Why it matters for your business",
          dark: true,
          items: [
            { name: "Better Financial Visibility", desc: "Always know where your business stands." },
            { name: "Improved Compliance", desc: "Stay aligned with UAE regulations year-round." },
            { name: "Reduced Errors", desc: "Clean records and rigorous reconciliations." },
            { name: "Informed Decision Making", desc: "Data-driven reports for smarter choices." },
            { name: "Time Savings", desc: "Focus on growth while we handle the numbers." },
          ],
        },
      ]}
      platforms={["QuickBooks", "Zoho Books", "Xero", "Tally", "Excel Models"]}
      process={[
        { step: "01", label: "Discovery" },
        { step: "02", label: "Setup" },
        { step: "03", label: "Review" },
        { step: "04", label: "Monthly Reporting" },
        { step: "05", label: "Continuous Support" },
      ]}
      faqs={[
        { q: "Do you work inside my existing accounting software?", a: "Yes. We work directly in QuickBooks, Zoho Books, Xero, Tally Prime or Excel-based systems. If you don't have one yet, we recommend and set up the right platform for your size and budget." },
        { q: "How quickly can you take over our bookkeeping?", a: "Most onboarding is completed within a few business days after we review your current books and access. Backlogs are handled in parallel through our catch-up service." },
        { q: "Will I get monthly financial statements?", a: "Yes — profit & loss, balance sheet and cash flow, plus a short summary of what the numbers mean, delivered every month." },
        { q: "Is my financial data kept confidential and secure?", a: "Absolutely. Access is restricted to your engagement team, and we work within your platform's secure environment with role-based permissions." },
      ]}
    />
  ),
});
