import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

/**
 * Title component for rendering large display text with predefined variants
 *
 * @component
 * @example
 * ```tsx
 * <Title variant="hero">Hero Title</Title>
 * <Title variant="page" as="h1">Page Title</Title>
 * <Title variant="subtitle">Subtitle Text</Title>
 * ```
 *
 * @param {TitleVariant} variant - Title style variant (default: "page")
 * @param {TitleElement} as - HTML element to render as
 * @param {boolean} asChild - Use Radix Slot for composition
 * @param {string} className - Additional CSS classes
 */

// Variant type definitions
type TitleVariant =
  | "hero"       // 72px - Largest display title
  | "page"       // 48px - Page title
  | "subtitle";  // 32px - Subtitle

type TitleElement = "h1" | "h2" | "h3" | "div" | "span";

interface TitleProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TitleVariant;
  as?: TitleElement;
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
}

const titleVariants: Record<TitleVariant, string> = {
  hero: "text-[length:var(--font-size-title-hero)] leading-[var(--line-height-title-hero)] font-[var(--font-weight-bold)] text-[color:var(--color-text-emphasis)] tracking-[var(--letter-spacing-title-hero)]",
  page: "text-[length:var(--font-size-title-page)] leading-[var(--line-height-title-page)] font-[var(--font-weight-bold)] text-[color:var(--color-text-emphasis)] tracking-[var(--letter-spacing-title-page)]",
  subtitle: "text-[length:var(--font-size-subtitle)] leading-[var(--line-height-subtitle)] font-[var(--font-weight-semibold)] text-[color:var(--color-text-emphasis)] tracking-[var(--letter-spacing-subtitle)]",
};

const defaultElements: Record<TitleVariant, TitleElement> = {
  hero: "h1",
  page: "h1",
  subtitle: "h2",
};

export const Title = React.forwardRef<HTMLElement, TitleProps>(
  ({ variant = "page", as, asChild, className, children, ...props }, ref) => {
    const Component = asChild ? Slot : (as || defaultElements[variant]);

    return (
      <Component
        ref={ref}
        className={cn(titleVariants[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Title.displayName = "Title";
