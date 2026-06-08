import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/ServiceTemplate";

export const Route = createFileRoute("/vat")({
  head: () => ({
    meta: [
      { title: "VAT Filing Services UAE — Registration & Returns | Sky Walkers" },
      { name: "description", content: "Full UAE VAT support: registration, return filing, VAT health checks, advisory, deregistration and ongoing compliance monitoring." },
      { property: "og:title", content: "VAT Filing Services UAE — Sky Walkers" },
      { property: "og:description", content: "End-to-end UAE VAT registration, filing, advisory and compliance monitoring." },
      { property: "og:url", content: "/vat" },
    ],
    links: [{ rel: "canonical", href: "/vat" }],
  }),
  component: () => (
    <ServiceTemplate
      eyebrow="VAT Services"
      title="VAT Filing Services UAE"
      subtitle="End-to-end VAT support that keeps your business compliant with UAE Federal Tax Authority requirements."
      blocks={[
        {
          eyebrow: "What we deliver",
          title: "Complete VAT compliance",
          items: [
            { name: "VAT Registration", desc: "Hassle-free FTA registration for your business." },
            { name: "VAT Return Filing", desc: "Accurate, on-time periodic VAT returns." },
            { name: "VAT Health Check", desc: "Review your VAT position and fix gaps." },
            { name: "VAT Advisory", desc: "Expert guidance on complex VAT scenarios." },
            { name: "VAT Deregistration", desc: "Smooth deregistration when eligible." },
            { name: "VAT Compliance Monitoring", desc: "Ongoing checks to avoid penalties." },
          ],
        },
      ]}
      faqs={[
        { q: "Who needs to register for VAT in the UAE?", a: "Businesses with taxable supplies above the mandatory threshold must register; voluntary registration is also available above a lower threshold." },
        { q: "How often are VAT returns filed?", a: "VAT returns are typically filed quarterly or monthly depending on your FTA assignment." },
        { q: "What happens if I miss a deadline?", a: "Late filing or payment leads to FTA penalties. Our compliance monitoring helps you stay ahead of every deadline." },
      ]}
    />
  ),
});
