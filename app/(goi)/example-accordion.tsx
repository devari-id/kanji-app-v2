import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { JapaneseExample } from "@/lib/gemini-service";

const items = [
  {
    value: "item-1",
    trigger: "How do I reset my password?",
    content:
      "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
  },
  {
    value: "item-2",
    trigger: "Can I change my subscription plan?",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
  },
  {
    value: "item-3",
    trigger: "What payment methods do you accept?",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
];

export default function ExampleAccordion({
  examples,
}: {
  examples: JapaneseExample[];
}) {
  const updatedExamples = examples.map((e, i) => ({
    ...e,
    value: `item-${i}`,
  }));
  return (
    <Accordion multiple className="max-w-max text-xl">
      {updatedExamples.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className="text-xl">
            {item.indonesian}
          </AccordionTrigger>
          <AccordionContent className="text-xl">
            <div>{item.japanese}</div>
            <div>{item.english}</div>
            <div>{item.romaji}</div>
            <div className="flex items-center gap-x-4 justify-end">
              <Button className="font-bold">Save</Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
