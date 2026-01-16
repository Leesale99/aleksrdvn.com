import { Text, Heading, Title } from '@/components/atoms';

export default function TypographyPage() {
  return (
    <main className="min-h-screen p-8 md:p-16 lg:p-24">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <Title variant="page">Typography System</Title>
          <Text variant="body" className="text-[color:var(--color-text-subtle)]">
            A comprehensive typography system built with design tokens from Figma.
          </Text>
        </div>

        {/* Title Variants */}
        <section className="space-y-8">
          <Heading variant="heading">Title Components</Heading>
          <Text variant="bodySmall" className="text-[color:var(--color-text-subtle)]">
            Large display typography for hero sections and page titles
          </Text>

          <div className="space-y-6">
            <div className="space-y-2">
              <Text variant="bodySmall" className="text-[color:var(--color-text-muted)] uppercase tracking-wider">
                Hero (72px)
              </Text>
              <Title variant="hero">The quick brown fox</Title>
            </div>

            <div className="space-y-2">
              <Text variant="bodySmall" className="text-[color:var(--color-text-muted)] uppercase tracking-wider">
                Page (48px)
              </Text>
              <Title variant="page">The quick brown fox jumps</Title>
            </div>

            <div className="space-y-2">
              <Text variant="bodySmall" className="text-[color:var(--color-text-muted)] uppercase tracking-wider">
                Subtitle (32px)
              </Text>
              <Title variant="subtitle">The quick brown fox jumps over</Title>
            </div>
          </div>
        </section>

        {/* Heading Variants */}
        <section className="space-y-8">
          <Heading variant="heading">Heading Components</Heading>
          <Text variant="bodySmall" className="text-[color:var(--color-text-subtle)]">
            Semantic heading elements for content structure
          </Text>

          <div className="space-y-6">
            <div className="space-y-2">
              <Text variant="bodySmall" className="text-[color:var(--color-text-muted)] uppercase tracking-wider">
                Heading (24px)
              </Text>
              <Heading variant="heading">The quick brown fox jumps over the lazy dog</Heading>
            </div>

            <div className="space-y-2">
              <Text variant="bodySmall" className="text-[color:var(--color-text-muted)] uppercase tracking-wider">
                Subheading (20px)
              </Text>
              <Heading variant="subheading">The quick brown fox jumps over the lazy dog</Heading>
            </div>
          </div>
        </section>

        {/* Text Variants */}
        <section className="space-y-8">
          <Heading variant="heading">Text Components</Heading>
          <Text variant="bodySmall" className="text-[color:var(--color-text-subtle)]">
            Body text variants for content and UI elements
          </Text>

          <div className="space-y-6">
            <div className="space-y-2">
              <Text variant="bodySmall" className="text-[color:var(--color-text-muted)] uppercase tracking-wider">
                Body (16px)
              </Text>
              <Text variant="body">
                The quick brown fox jumps over the lazy dog. This is the default body text used throughout the application.
              </Text>
            </div>

            <div className="space-y-2">
              <Text variant="bodySmall" className="text-[color:var(--color-text-muted)] uppercase tracking-wider">
                Body Strong (16px Bold)
              </Text>
              <Text variant="bodyStrong">
                The quick brown fox jumps over the lazy dog. This is bold body text for emphasis.
              </Text>
            </div>

            <div className="space-y-2">
              <Text variant="bodySmall" className="text-[color:var(--color-text-muted)] uppercase tracking-wider">
                Body Emphasis (16px Italic)
              </Text>
              <Text variant="bodyEmphasis">
                The quick brown fox jumps over the lazy dog. This is italic body text for emphasis.
              </Text>
            </div>

            <div className="space-y-2">
              <Text variant="bodySmall" className="text-[color:var(--color-text-muted)] uppercase tracking-wider">
                Body Link (16px Underlined)
              </Text>
              <Text variant="bodyLink">
                The quick brown fox jumps over the lazy dog. This is link text with hover effects.
              </Text>
            </div>

            <div className="space-y-2">
              <Text variant="bodySmall" className="text-[color:var(--color-text-muted)] uppercase tracking-wider">
                Body Small (14px)
              </Text>
              <Text variant="bodySmall">
                The quick brown fox jumps over the lazy dog. This is small body text for secondary content.
              </Text>
            </div>

            <div className="space-y-2">
              <Text variant="bodySmall" className="text-[color:var(--color-text-muted)] uppercase tracking-wider">
                Body Code (16px Monospace)
              </Text>
              <Text variant="bodyCode">
                const quickBrownFox = &quot;jumps over the lazy dog&quot;;
              </Text>
            </div>
          </div>
        </section>

        {/* Color Variants */}
        <section className="space-y-8">
          <Heading variant="heading">Text Color Variants</Heading>
          <Text variant="bodySmall" className="text-[color:var(--color-text-subtle)]">
            Design system color tokens for text
          </Text>

          <div className="space-y-4">
            <Text variant="body" className="text-[color:var(--color-text-emphasis)]">
              Text Emphasis - Highest contrast
            </Text>
            <Text variant="body" className="text-[color:var(--color-text-default)]">
              Text Default - Standard text color
            </Text>
            <Text variant="body" className="text-[color:var(--color-text-subtle)]">
              Text Subtle - Secondary information
            </Text>
            <Text variant="body" className="text-[color:var(--color-text-muted)]">
              Text Muted - Tertiary information
            </Text>
            <Text variant="body" className="text-[color:var(--color-text-disabled)]">
              Text Disabled - Disabled state
            </Text>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="space-y-8">
          <Heading variant="heading">Real-World Examples</Heading>

          <div className="space-y-6">
            {/* Article Example */}
            <div className="space-y-4 p-6 rounded-[var(--radius-lg)] bg-[color:var(--color-background-subtle)] border border-[color:var(--color-border-default)]">
              <Title variant="subtitle">Article Title Example</Title>
              <Text variant="bodySmall" className="text-[color:var(--color-text-subtle)]">
                Published on January 15, 2026 • 5 min read
              </Text>
              <Text variant="body">
                This is an example of how the typography system works together in a real article layout.
                The title uses the subtitle variant, metadata uses small text with subtle color, and the
                body content uses the standard body variant.
              </Text>
              <Text variant="bodyLink">Read more →</Text>
            </div>

            {/* Card Example */}
            <div className="space-y-3 p-6 rounded-[var(--radius-lg)] bg-[color:var(--color-background-subtle)] border border-[color:var(--color-border-default)]">
              <Heading variant="subheading">Card Heading</Heading>
              <Text variant="body">
                This card demonstrates the subheading component paired with body text, creating a clear
                visual hierarchy.
              </Text>
              <Text variant="bodySmall" className="text-[color:var(--color-text-muted)]">
                Supporting text in small variant with muted color
              </Text>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
