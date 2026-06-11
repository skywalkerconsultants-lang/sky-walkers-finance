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
        <Accordion type="single" collapsible className="mt-8 w-full">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 70}>
              <AccordionItem
                value={`item-${i}`}
                className="group rounded-xl border border-border bg-card my-3 px-5 transition-colors hover:border-primary/40 data-[state=open]:border-primary/50 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-base font-display font-semibold py-5 transition-colors hover:text-primary hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
