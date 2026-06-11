import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/ServiceTemplate";

export const Route = createFileRoute("/payroll")({
  head: () => ({
    meta: [
      { title: "Payroll & WPS Services in UAE | Sky Walkers Consultancy" },
      { name: "description", content: "WPS-compliant payroll processing in the UAE — salary calculation, payslips, gratuity, leave tracking and on-time SIF disbursement for SMEs and free zone companies." },
      { property: "og:title", content: "Payroll & WPS Services in UAE — Sky Walkers" },
      { property: "og:description", content: "Accurate, WPS-compliant payroll processing and disbursement for UAE businesses." },
      { property: "og:url", content: "/payroll" },
    ],
    links: [{ rel: "canonical", href: "/payroll" }],
  }),
  component: () => (
    <ServiceTemplate
      eyebrow="Payroll & WPS"
      title="Payroll & WPS Services for UAE Businesses"
      subtitle="Accurate, on-time, WPS-compliant payroll so your team is paid right and your business stays compliant."
      blocks={[
        {
          eyebrow: "What we deliver",
          title: "End-to-end payroll management",
          intro: "From salary calculation to WPS disbursement — handled accurately every month.",
          items: [
            { name: "Salary Processing", desc: "Accurate monthly salary and overtime calculation." },
            { name: "WPS / SIF Files", desc: "Wage Protection System-compliant SIF generation and submission." },
            { name: "Payslips", desc: "Professional digital payslips for every employee." },
            { name: "Gratuity & EOSB", desc: "End-of-service benefit and gratuity calculations." },
            { name: "Leave & Attendance", desc: "Leave balances, accruals and attendance records." },
            { name: "Additions & Deductions", desc: "Bonuses, allowances, loans and deductions handled cleanly." },
          ],
        },
        {
          eyebrow: "Benefits",
          title: "Why it matters",
          dark: true,
          items: [
            { name: "MOHRE Compliance", desc: "Stay aligned with UAE labour and WPS requirements." },
            { name: "On-Time Pay", desc: "Employees paid accurately and on schedule, every cycle." },
            { name: "Less Admin", desc: "We handle the calculations and filings for you." },
          ],
        },
      ]}
      platforms={["QuickBooks", "Zoho Books", "Excel Models", "Bank WPS Portals"]}
      process={[
        { step: "01", label: "Setup" },
        { step: "02", label: "Data Collection" },
        { step: "03", label: "Processing" },
        { step: "04", label: "WPS Disbursement" },
        { step: "05", label: "Reporting" },
      ]}
      faqs={[
        { q: "What is WPS and do you handle it?", a: "The Wage Protection System is the UAE's mandatory salary payment system. We prepare and submit WPS-compliant SIF files so salaries are paid through approved channels." },
        { q: "Can you calculate gratuity and end-of-service benefits?", a: "Yes. We calculate gratuity and end-of-service benefits in line with UAE labour law." },
      ]}
    />
  ),
});
