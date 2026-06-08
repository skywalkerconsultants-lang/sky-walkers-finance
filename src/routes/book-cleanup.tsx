import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/ServiceTemplate";

export const Route = createFileRoute("/book-cleanup")({
  head: () => ({
    meta: [
      { title: "Book Cleanup & Catch-Up Accounting Services | Sky Walkers" },
      { name: "description", content: "Behind on bookkeeping? We organize, reconcile and rebuild accurate financial records with historical cleanup and multi-year catch-up bookkeeping." },
      { property: "og:title", content: "Book Cleanup & Catch-Up Accounting — Sky Walkers" },
      { property: "og:description", content: "We help businesses organize, reconcile and rebuild accurate financial records." },
      { property: "og:url", content: "/book-cleanup" },
    ],
    links: [{ rel: "canonical", href: "/book-cleanup" }],
  }),
  component: () => (
    <ServiceTemplate
      eyebrow="Book Cleanup"
      title="Book Cleanup & Catch-Up Accounting Services"
      subtitle="Behind on bookkeeping? We help businesses organize, reconcile, and rebuild accurate financial records."
      blocks={[
        {
          eyebrow: "What's included",
          title: "Get your books accurate again",
          intro: "From messy ledgers to multi-year backlogs — we rebuild reliable financial records.",
          items: [
            { name: "Historical Cleanup", desc: "Organize and correct past financial data." },
            { name: "Reconciliation Corrections", desc: "Fix mismatched bank and ledger balances." },
            { name: "Chart of Accounts Review", desc: "Restructure for clarity and accuracy." },
            { name: "VAT Adjustments", desc: "Correct VAT errors and align with filings." },
            { name: "Financial Statement Corrections", desc: "Restate accurate financial statements." },
            { name: "Multi-Year Catch-Up Bookkeeping", desc: "Bring years of backlog fully up to date." },
          ],
        },
      ]}
      process={[
        { step: "01", label: "Assessment" },
        { step: "02", label: "Data Gathering" },
        { step: "03", label: "Cleanup & Reconcile" },
        { step: "04", label: "Review & Restate" },
        { step: "05", label: "Ongoing Support" },
      ]}
      faqs={[
        { q: "How far back can you clean up?", a: "We handle multi-year catch-up bookkeeping, including backlogs spanning several financial years." },
        { q: "Will cleanup affect my VAT filings?", a: "Yes — we identify and correct VAT discrepancies and align your records with submitted returns." },
        { q: "Can you maintain books afterwards?", a: "Absolutely. Many clients move to our ongoing monthly bookkeeping after the cleanup is complete." },
      ]}
    />
  ),
});
