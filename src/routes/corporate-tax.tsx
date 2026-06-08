import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/ServiceTemplate";

export const Route = createFileRoute("/corporate-tax")({
  head: () => ({
    meta: [
      { title: "UAE Corporate Tax Registration & Filing Services | Sky Walkers" },
      { name: "description", content: "UAE corporate tax support: registration, assessment, filing, tax planning and ongoing compliance for SMEs, startups and free zone companies." },
      { property: "og:title", content: "UAE Corporate Tax Services — Sky Walkers" },
      { property: "og:description", content: "Corporate tax registration, assessment, filing and compliance under UAE CT law." },
      { property: "og:url", content: "/corporate-tax" },
    ],
    links: [{ rel: "canonical", href: "/corporate-tax" }],
  }),
  component: () => (
    <ServiceTemplate
      eyebrow="Corporate Tax"
      title="UAE Corporate Tax Registration & Filing Services"
      subtitle="Stay compliant with UAE Corporate Tax through expert registration, assessment, filing and planning support."
      blocks={[
        {
          eyebrow: "What we deliver",
          title: "End-to-end corporate tax support",
          items: [
            { name: "Corporate Tax Registration", desc: "Register your business correctly with the FTA." },
            { name: "Corporate Tax Assessment", desc: "Evaluate your taxable position and obligations." },
            { name: "Corporate Tax Filing", desc: "Accurate and timely annual CT returns." },
            { name: "Tax Planning", desc: "Optimize your structure within the law." },
            { name: "Compliance Support", desc: "Ongoing guidance to remain compliant." },
          ],
        },
      ]}
      faqs={[
        { q: "Who needs to register for corporate tax?", a: "Most UAE businesses must register for corporate tax, including free zone companies, subject to applicable rules and thresholds." },
        { q: "What is the corporate tax rate?", a: "A standard rate applies above the taxable income threshold, with relief available for qualifying small businesses and free zone entities." },
        { q: "When are corporate tax returns due?", a: "Returns are filed annually within the period set by the FTA following your financial year end." },
      ]}
    />
  ),
});
