import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

/**
 * Heading component for rendering heading text with predefined variants
 *
 * @component
 * @example
 * ```tsx
 * <Heading variant="heading">Section Heading</Heading>
 * <Heading variant="subheading" as="h3">Subsection</Heading>
 * ```
 *
 * @param {HeadingVariant} variant - Heading style variant (default: "heading")
 * @param {HeadingElement} as - HTML element to render as
 * @param {boolean} asChild - Use Radix Slot for composition
 * @param {string} className - Additional CSS classes
 */

// Variant type definitions
type HeadingVariant =
  | "heading"        // 24px - h2
  | "subheading";    // 20px - h3

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: HeadingVariant;
  as?: HeadingElement;
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
}

const headingVariants: Record<HeadingVariant, string> = {
  heading: "text-[length:var(--font-size-heading)] leading-[var(--line-height-heading)] font-[var(--font-weight-semibold)] text-[color:var(--color-text-emphasis)] tracking-[var(--letter-spacing-normal)]",
  subheading: "text-[length:var(--font-size-subheading)] leading-[var(--line-height-subheading)] font-[var(--font-weight-semibold)] text-[color:var(--color-text-emphasis)] tracking-[var(--letter-spacing-normal)]",
};

const defaultElements: Record<HeadingVariant, HeadingElement> = {
  heading: "h2",
  subheading: "h3",
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ variant = "heading", as, asChild, className, children, ...props }, ref) => {
    const Component = asChild ? Slot : (as || defaultElements[variant]);

    return (
      <Component
        ref={ref}
        className={cn(headingVariants[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";
