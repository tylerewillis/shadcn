import * as React from "react";
import {
  Accordion as ShadcnAccordion,
  AccordionItem as ShadcnAccordionItem,
  AccordionTrigger as ShadcnAccordionTrigger,
  AccordionContent as ShadcnAccordionContent
} from "@/components/shadcn/accordion";
import { ReactNode } from "react";

type AccordionVariants = "default" | "background";

interface CustomAccordionProps {
  variant?: AccordionVariants;
  children?: ReactNode;
  [key: string]: any;
}

function accordionStyles(variant: AccordionVariants) {
  switch (variant) {
    case "background":
      return "";
    default:
      return "";
  }
}

function itemStyles(variant: AccordionVariants) {
  switch (variant) {
    case "background":
      return "";
    default:
      return "";
  }
}

function triggerStyles(variant: AccordionVariants) {
  switch (variant) {
    case "background":
      return "bg-blue-300 p-4";
    default:
      return "";
  }
}

function contentStyles(variant: AccordionVariants) {
  switch (variant) {
    case "background":
      return "bg-gray-200 p-4";
    default:
      return "";
  }
}

const Accordion = ({ variant = "default", ...props }: CustomAccordionProps) => (
  <ShadcnAccordion className={accordionStyles(variant)} {...props}>
    {React.Children.map(props.children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { variant });
      }
      return child;
    })}
  </ShadcnAccordion>
);

const AccordionItem = ({ variant = "default", className, children, ...props }: CustomAccordionProps) => (
  <ShadcnAccordionItem className={`${itemStyles(variant)} ${className}`} {...props}>
    {React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { variant });
      }
      return child;
    })}
  </ShadcnAccordionItem>
);

const AccordionTrigger = ({ variant = "default", className, ...props }: CustomAccordionProps) => (
  <ShadcnAccordionTrigger className={`${triggerStyles(variant)} ${className}`} {...props} />
);

const AccordionContent = ({ variant = "default", className, ...props }: CustomAccordionProps) => (
  <ShadcnAccordionContent className={`${contentStyles(variant)} ${className}`} {...props} />
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
