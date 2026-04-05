'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

/**
 * Accordion 컴포넌트 예제
 */
export function AccordionDemo() {
  return (
    <div className="space-y-6">
      {/* Basic Accordion */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Accordion</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that you can customize.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default animations that you can customize.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* FAQ Accordion */}
      <div>
        <h3 className="text-lg font-semibold mb-4">FAQ Section</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="faq-1">
            <AccordionTrigger>What is this product?</AccordionTrigger>
            <AccordionContent>
              This is a comprehensive UI component library built with React and
              Tailwind CSS.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>How do I get started?</AccordionTrigger>
            <AccordionContent>
              Simply clone the repository and follow the setup instructions in
              the documentation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>Is it free?</AccordionTrigger>
            <AccordionContent>
              Yes, all components are free and open source.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>Can I customize the components?</AccordionTrigger>
            <AccordionContent>
              Absolutely! All components are designed to be easily customizable
              using Tailwind CSS.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Multiple Open Items */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Multiple Items Open</h3>
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>Feature 1</AccordionTrigger>
            <AccordionContent>Details about feature 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Feature 2</AccordionTrigger>
            <AccordionContent>Details about feature 2</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Feature 3</AccordionTrigger>
            <AccordionContent>Details about feature 3</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
