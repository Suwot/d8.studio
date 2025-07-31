# Design Document

## Overview

The D8 Studio website refactor will implement a modular architecture with clean, maintainable code while preserving the premium brand aesthetic. The design focuses on studio rental prominence, comprehensive interior showcase, and seamless user experience across all devices.

## Architecture

### Modular Section Architecture

```
/sections/
├── header.html          # Fixed navigation with logo and booking CTA
├── hero.html           # Single impactful hero with studio rental focus
├── services.html       # 4-card service hierarchy with rental prominence
├── interior-showcase.html # Image galleries from /images folders
├── location-benefits.html # Interactive map + key benefits grid
├── reviews.html        # Social proof with platform links
├── contact.html        # Primary booking focus with contact options
└── footer.html         # Minimal footer with essential links

/build/
└── index.html          # Production-ready assembled file

/assets/
├── css/
│   ├── base.css        # Reset, typography, containers
│   ├── components.css  # Buttons, cards, forms
│   ├── sections.css    # Section-specific styles
│   └── utilities.css   # Spacing, colors, responsive
└── images/             # Existing image structure
```

### Build Process

- **Development**: Individual section editing with live preview
- **Production**: Automated concatenation into single HTML + CSS files
- **Asset Management**: Proper image referencing for both environments

## Components and Interfaces

### Header Component
- **Sticky Navigation**: Fixed position with blur backdrop
- **Logo**: D8 Studio branding with hover effects
- **Navigation Links**: Smooth scroll to sections
- **Primary CTA**: "Забронировать студию" button (YClients integration)
- **Mobile Menu**: Hamburger menu for responsive design

### Hero Component
- **Single Hero Design**: Remove slider complexity
- **Headline**: "Студия с лучшими видами в Москве"
- **Subheadline**: "Арендуйте профессиональную студию на 13-м этаже с панорамными окнами, естественным светом и всеми удобствами. Идеально для съемок, встреч и творческой работы."
- **Primary CTA**: "Забронировать студию" (YClients widget)
- **Key Benefits**: 13-й этаж • Панорамные виды • Естественный свет
- **Background**: Best studio interior shot with overlay

### Services Component
- **4-Card Layout**: 4 items in a row on desktop (accent on rental), stack on mobile
- **Card Hierarchy**:
  1. **Studio Rental** (prominent): от 2,700₽/час, YClients CTA
  2. **Photo Shoots**: от 10,000₽, "Обсудить проект" CTA
  3. **Video Shoots**: от 20,000₽, "Обсудить проект" CTA
  4. **Additional Services**: "Обсудим с вами", "Написать в чат" CTA

### Interior Showcase Component
- **Gallery Categories**:
  - General studio interior (main gallery)
  - Interior details (close-up shots)
  - Equipment for rental (gear showcase)
  - Best picks (hero shots)
- **Layout**: Masonry/grid with lightbox functionality
- **Image Sources**: `/images/studio photos (best picks)/`, `/images/interior/`, `/images/equipment/`
- **CTA**: "Забронировать студию" after gallery

### Location Benefits Component
- **Split Layout**: Interactive map (left) + benefits grid (right)
- **Map Integration**: Google Maps with D8 Studio location
- **Benefits Grid**: 8 key advantages
  1. 13 этаж с панорамными видами
  2. Солнечная И закатная сторона
  3. Профессиональная гримерная
  4. Гардеробная с одеждой и аксессуарами
  5. Менеджер на месте
  6. 5 минут от МЦК ЗИЛ и метро Автозаводская
  7. Парковка доступна
  8. Бизнес-центр класса B+

### Reviews Component
- **Review Cards**: Selected best reviews with ratings
- **Platform Integration**: Links to 2GIS, Yandex Maps, Avito
- **Social Proof**: Highlight quantity and quality of reviews
- **Layout**: 3-column grid with platform badges

### Contact Component
- **Primary Focus**: Studio booking prominence
- **YClients Integration**: Modal or embedded booking widget
- **Contact Options**:
  - Primary: "Забронировать студию" (YClients)
  - Secondary: Telegram/WhatsApp quick connect
  - Service Inquiries: "Обсудить проект" forms
- **Contact Info**: Address, transport accessibility, hours

## Data Models

### Section Data Structure
```javascript
{
  id: "section-name",
  title: "Section Title",
  content: "HTML content",
  styles: "section-specific CSS",
  scripts: "section-specific JS",
  dependencies: ["required-components"]
}
```

### Service Card Model
```javascript
{
  title: "Service Name",
  description: "Service description",
  price: "от X₽",
  priority: "primary|secondary",
  cta: {
    text: "CTA Text",
    action: "booking|contact|discuss",
    integration: "yclients|telegram|whatsapp|form"
  }
}
```

### Image Gallery Model
```javascript
{
  category: "interior|equipment|best-picks",
  images: [
    {
      src: "path/to/image",
      alt: "Alt text",
      caption: "Optional caption"
    }
  ],
  layout: "masonry|grid|carousel"
}
```

## Error Handling

### Image Loading
- **Lazy Loading**: Progressive image loading for performance
- **Fallback Images**: Placeholder images for failed loads
- **Alt Text**: Comprehensive alt text for accessibility
- **Responsive Images**: Multiple sizes for different devices

### Form Validation
- **YClients Integration**: Handle booking widget errors gracefully
- **Contact Forms**: Client-side and server-side validation
- **Error Messages**: User-friendly error feedback
- **Success States**: Clear confirmation messages

### Mobile Responsiveness
- **Breakpoint Handling**: Graceful degradation across devices
- **Touch Interactions**: Proper touch targets and gestures
- **Performance**: Optimized loading for mobile connections
- **Fallbacks**: Progressive enhancement approach

## Testing Strategy

### Component Testing
- **Individual Sections**: Test each section in isolation
- **Integration Testing**: Test section combinations
- **Cross-browser Testing**: Chrome, Safari, Firefox, Edge
- **Device Testing**: Desktop, tablet, mobile viewports

### Performance Testing
- **Page Load Speed**: Target <3 seconds initial load
- **Image Optimization**: WebP format with fallbacks
- **CSS Optimization**: Minified and compressed styles
- **JavaScript Optimization**: Minimal JS footprint

### User Experience Testing
- **Booking Flow**: End-to-end booking process testing
- **Contact Forms**: All contact methods functionality
- **Navigation**: Smooth scrolling and section transitions
- **Accessibility**: WCAG 2.1 AA compliance

### Build Process Testing
- **Development Environment**: Section editing and preview
- **Production Build**: Automated assembly verification
- **Asset Management**: Image and CSS linking validation
- **Deployment**: Production environment testing

## Visual Design System

### Color Palette (Preserved from Current)
- **Primary**: #1c1917 (Dark brown)
- **Secondary**: #2c2c2c (Medium brown)
- **Accent**: #f5f5f4 (Light beige)
- **Text**: #57534e (Medium brown text)
- **Background**: Linear gradients with browns/beiges

### Typography (Preserved Hierarchy)
- **Primary Font**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Headings**: Font-weight 200-400, large sizes
- **Body Text**: Font-weight 300, readable sizes
- **CTAs**: Font-weight 500-600, medium sizes

### Glass Effects (Maintained)
- **Backdrop Blur**: blur(20px) for premium feel
- **Transparency**: rgba() values for layering
- **Borders**: Subtle rgba borders for definition
- **Shadows**: Soft shadows for depth

### Button System (Simplified)
- **Primary**: Dark background, light text (booking actions)
- **Secondary**: Light background, dark text (secondary actions)
- **Outline**: Transparent background, border (tertiary actions)
- **Glass**: Blur effects for overlay contexts