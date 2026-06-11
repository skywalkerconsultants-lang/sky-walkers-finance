import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/ServiceTemplate";

export const Route = createFileRoute("/business-setup")({
  head: () => ({
    meta: [
      { title: "Business Setup Advisory in UAE | Sky Walkers Consultancy" },
      { name: "description", content: "UAE business setup advisory — mainland and free zone company formation, licensing guidance, structuring, bank account setup and tax registration support." },
      { property: "og:title", content: "Business Setup Advisory in UAE — Sky Walkers" },
      { property: "og:description", content: "Mainland and free zone company formation guidance for new UAE businesses." },
      { property: "og:url", content: "/business-setup" },
    ],
    links: [{ rel: "canonical", href: "/business-setup" }],
  }),
  component: () => (
    <ServiceTemplate
      eyebrow="Business Setup Advisory"
      title="Business Setup Advisory in the UAE"
      subtitle="Start your UAE business the right way — with the correct structure, licence and compliance foundation."
      blocks={[
        {
          eyebrow: "What we deliver",
          title: "From idea to incorporated",
          intro: "Guidance through every step of setting up a compliant UAE company.",
          items: [
            { name: "Mainland Setup", desc: "Guidance on mainland company formation and licensing." },
            { name: "Free Zone Setup", desc: "Free zone selection, formation and qualifying-income guidance." },
            { name: "Licensing Guidance", desc: "Choose the right activities and licence type." },
            { name: "Company Structuring", desc: "Ownership and structure advice for tax efficiency." },
            { name: "Bank Account Support", desc: "Guidance on corporate bank account opening." },
            { name: "Tax Registration", desc: "VAT and corporate tax registration on EmaraTax." },
          ],
        },
        {
          eyebrow: "Benefits",
          title: "Why it matters",
          dark: true,
          items: [
            { name: "Right First Time", desc: "Avoid costly restructuring later." },
            { name: "Compliant From Day One", desc: "Set up with tax and accounting in place." },
            { name: "Faster Launch", desc: "Clear steps that get you trading sooner." },
          ],
        },
      ]}
      process={[
        { step: "01", label: "Consultation" },
        { step: "02", label: "Structure & Licence" },
        { step: "03", label: "Formation" },
        { step: "04", label: "Banking & Tax" },
        { step: "05", label: "Ongoing Support" },
      ]}
      faqs={[
        { q: "Should I set up mainland or free zone?", a: "It depends on your activities, clients and ownership goals. We assess your needs and recommend the structure that fits best." },
        { q: "Do you help with tax registration after setup?", a: "Yes. We handle VAT and corporate tax registration and keep you compliant from day one." },
      ]}
    />
  ),
});
