import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

/**
 * Text component for rendering body text with predefined variants
 * 
 * @component
 * @example
 * ```tsx
 * <Text variant="body">Default text</Text>
 * <Text variant="bodyStrong">Bold text</Text>
 * <Text variant="bodyCode">const code = true;</Text>
 * ```
 * 
 * @param {TextVariant} variant - Text style variant (default: "body")
 * @param {TextElement} as - HTML element to render as
 * @param {boolean} asChild - Use Radix Slot for composition
 * @param {string} className - Additional CSS classes
 */

// Variant type definitions
type TextVariant = 
  | "body"          // Default 16px
  | "bodyStrong"    // Bold
  | "bodyEmphasis"  // Italic
  | "bodyLink"      // Underline
  | "bodySmall"     // 14px
  | "bodyCode"      // Monospace
  | "input";        // Input style

type TextElement = "p" | "span" | "div" | "label" | "code";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: TextElement;
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
}

const textVariants: Record<TextVariant, string> = {
  body: "text-[length:var(--font-size-body)] leading-[var(--line-height-body)] font-[var(--font-weight-regular)] text-[color:var(--color-text-default)]",
  bodyStrong: "text-[length:var(--font-size-body)] leading-[var(--line-height-body)] font-[var(--font-weight-bold)] text-[color:var(--color-text-default)]",
  bodyEmphasis: "text-[length:var(--font-size-body)] leading-[var(--line-height-body)] font-[var(--font-weight-regular)] italic text-[color:var(--color-text-default)]",
  bodyLink: "text-[length:var(--font-size-body)] leading-[var(--line-height-body)] font-[var(--font-weight-regular)] underline text-[color:var(--color-text-default)] hover:text-[color:var(--color-text-emphasis)] transition-colors cursor-pointer",
  bodySmall: "text-[length:var(--font-size-body-small)] leading-[var(--line-height-body-small)] font-[var(--font-weight-regular)] text-[color:var(--color-text-default)]",
  bodyCode: "text-[length:var(--font-size-body)] leading-[var(--line-height-body)] font-[family-name:var(--font-family-mono)] text-[color:var(--color-text-default)] bg-[color:var(--color-background-muted)] px-1 py-0.5 rounded-[var(--radius-sm)]",
  input: "text-[length:var(--font-size-body)] leading-[var(--line-height-body)] font-[var(--font-weight-regular)] text-[color:var(--color-text-default)]",
};

const defaultElements: Record<TextVariant, TextElement> = {
  body: "p",
  bodyStrong: "span",
  bodyEmphasis: "span",
  bodyLink: "span",
  bodySmall: "span",
  bodyCode: "code",
  input: "span",
};

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ variant = "body", as, asChild, className, children, ...props }, ref) => {
    const Component = asChild ? Slot : (as || defaultElements[variant]);
    
    return (
      <Component
        ref={ref}
        className={cn(textVariants[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";
