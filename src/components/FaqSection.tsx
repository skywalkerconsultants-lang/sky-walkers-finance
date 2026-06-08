import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";

export function FaqSection({
  items,
  title = "Frequently asked questions",
}: {
  items: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">FAQ</span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl">{title}</h2>
        </Reveal>
        <Reveal className="mt-8">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-base font-display font-semibold py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
