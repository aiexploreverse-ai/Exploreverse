# Exploreverse Design System

## Overview
Modern, tech-focused design system inspired by GitHub and Next.js, featuring a blue/purple gradient aesthetic that conveys professionalism and innovation.

## Color Palette

### Primary Colors (Blue/Indigo)
- **Primary 500**: `#6366f1` - Main brand color
- **Primary 600**: `#4f46e5` - Hover states
- **Primary 700**: `#4338ca` - Active states
- Range: 50-950 for full spectrum

### Secondary Colors (Purple)
- **Secondary 500**: `#a855f7` - Secondary brand color
- **Secondary 600**: `#9333ea` - Hover states
- Range: 50-950 for full spectrum

### Accent Colors
- **Accent Blue**: `#3b82f6`
- **Accent Purple**: `#8b5cf6`
- **Accent Indigo**: `#6366f1`

### Neutral Colors
- **Text Primary**: Neutral 900 (`#171717`)
- **Text Secondary**: Neutral 600 (`#525252`)
- **Background**: White / Neutral 50
- Range: 50-950 for full spectrum

## Typography

### Font Families
- **Sans-serif**: Inter (or system fallback)
- **Monospace**: Geist Mono

### Type Scale
- **Heading 1**: 3.5rem (56px) - Hero titles
- **Heading 2**: 2.5rem (40px) - Section headers
- **Heading 3**: 2rem (32px) - Subsections
- **Heading 4**: 1.5rem (24px) - Card titles
- **Body**: 1rem (16px) - Default text
- **Small**: 0.875rem (14px) - Captions

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Spacing Scale

Based on 8px grid system:
- **4**: 1rem (16px)
- **6**: 1.5rem (24px)
- **8**: 2rem (32px)
- **12**: 3rem (48px)
- **16**: 4rem (64px)
- **24**: 6rem (96px)

Custom additions:
- **18**: 4.5rem (72px)
- **88**: 22rem (352px)
- **100**: 25rem (400px)

## Border Radius

- **sm**: 0.25rem (4px) - Small elements
- **md**: 0.5rem (8px) - Buttons, inputs
- **lg**: 0.75rem (12px) - Cards
- **xl**: 1rem (16px) - Large cards
- **2xl**: 1.5rem (24px) - Hero sections
- **4xl**: 2rem (32px) - Special elements

## Shadows

### Elevation System
- **Soft**: `0 2px 8px rgba(99, 102, 241, 0.08)` - Subtle elevation
- **Medium**: `0 4px 16px rgba(99, 102, 241, 0.12)` - Card hover
- **Hard**: `0 8px 32px rgba(99, 102, 241, 0.16)` - Modals
- **Glow**: `0 0 24px rgba(99, 102, 241, 0.25)` - Interactive elements

## Gradients

### Primary Gradient
```css
linear-gradient(135deg, #6366f1 0%, #a855f7 100%)
```
Use for: Primary buttons, hero backgrounds, accent elements

### Secondary Gradient
```css
linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)
```
Use for: Alternative CTAs, hover states

## Components

### Buttons

#### Primary Button
- Background: Primary gradient
- Text: White
- Padding: 0.75rem 1.5rem
- Border radius: 0.5rem
- Hover: Scale 1.05 + glow shadow
- Transition: 300ms

#### Secondary Button
- Background: White
- Text: Primary 600
- Border: 2px Primary 500
- Padding: 0.75rem 1.5rem
- Hover: Background Primary 50

### Cards
- Background: White
- Padding: 1.5rem
- Border radius: 1rem
- Shadow: Soft (default), Medium (hover)
- Transition: 300ms

### Text Gradient
Apply gradient to text for emphasis:
```css
.gradient-text {
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Icons

### Icon Library
**Lucide React** - Beautiful, consistent icon set

### Icon Sizes
- Small: 16px
- Medium: 24px
- Large: 32px
- XLarge: 48px

### Usage
```tsx
import { Sparkles } from 'lucide-react';

<Sparkles className="w-6 h-6 text-primary-500" />
```

## Layout

### Container
- Max width: 80rem (1280px)
- Padding: 1rem (mobile), 1.5rem (tablet), 2rem (desktop)

### Grid System
Use Tailwind's responsive grid:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

## Best Practices

1. **Consistency**: Use design tokens from Tailwind config
2. **Accessibility**: Maintain WCAG AA contrast ratios
3. **Performance**: Optimize images and use modern formats
4. **Responsive**: Mobile-first approach
5. **Animation**: Subtle, purposeful transitions (300ms default)

## Implementation in Tailwind

All design tokens are configured in `tailwind.config.ts`:
- Extended color palette
- Custom spacing
- Custom shadows
- Custom gradients
- Typography settings

Use utility classes or the `@apply` directive for component styles.

## Example Usage

```tsx
// Hero section with gradient
<section className="bg-gradient-primary text-white py-24">
  <h1 className="text-5xl font-bold">
    Welcome to <span className="gradient-text">Exploreverse</span>
  </h1>
  <button className="btn-primary">Get Started</button>
</section>

// Feature card
<div className="card hover:shadow-medium">
  <Sparkles className="w-8 h-8 text-primary-500 mb-4" />
  <h3 className="text-xl font-semibold mb-2">Amazing Feature</h3>
  <p className="text-neutral-600">Description of the feature...</p>
</div>
```
