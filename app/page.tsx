import Button from "@/components/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion"
import { Combobox } from "@/components/shadcn/combobox"
import { Sheet } from "@/components/sheet"

export default function Home() {
  return (
    <div className="space-y-4 p-12">
      <Button>Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="destructive">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="link">Click me</Button>
      <Button variant="custom1">Click me</Button>
      <Button variant="custom2">Click me</Button>
      <Button variant="custom3">Click me</Button>

      <hr />

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible variant="background">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <hr />

      <Combobox />

      <hr />

      <Sheet />

    </div>
  )
}
