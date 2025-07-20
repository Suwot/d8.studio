# Project Structure

## File Organization
```
/
├── index.html          # Main landing page (single-page application)
├── styles.css          # Complete stylesheet
├── .git/              # Git repository
├── .kiro/             # Kiro configuration and steering
│   └── steering/      # AI assistant guidance documents
└── .vscode/           # VS Code workspace settings
```

## HTML Structure
The `index.html` follows a single-page layout with semantic sections:

### Page Sections (in order)
1. **Header** - Fixed navigation with logo and menu
2. **Hero** - Full-screen intro with call-to-action
3. **Studio** (#studio) - Features and amenities showcase
4. **Rental** (#rental) - Pricing plans and options
5. **Services** (#services) - Additional photography/video services
6. **Reviews** (#reviews) - Client testimonials and ratings
7. **Contact** (#contact) - Contact information and booking

### HTML Conventions
- Semantic HTML5 elements (`<header>`, `<section>`, `<nav>`)
- BEM-like CSS class naming (`.section-title`, `.pricing-card`)
- Accessibility considerations (alt text, semantic markup)
- Russian language content (`lang="ru"`)

## CSS Architecture

### Component Organization
- **Reset & Base** - Global styles and typography
- **Layout Components** - Header, sections, containers
- **UI Components** - Buttons, cards, badges
- **Section-Specific** - Hero, studio, pricing, services, reviews
- **Responsive** - Mobile-first media queries

### Naming Conventions
- Component-based: `.pricing-card`, `.service-header`
- Modifier classes: `.btn-primary`, `.featured`
- State classes: `:hover`, `:focus` pseudo-classes
- Consistent prefixes for related elements

### Design System
- **Spacing**: Consistent padding/margin scale (8px, 16px, 24px, 32px, etc.)
- **Colors**: Stone/gray palette with semantic naming
- **Typography**: Serif font hierarchy with weight variations
- **Border Radius**: Consistent rounded corners (16px, 24px, 50px)

## Content Structure
- **Russian Language**: All content in Russian
- **Professional Tone**: Elegant, premium positioning
- **SEO Optimized**: Semantic markup and meta tags
- **Mobile Responsive**: Breakpoints at 768px and 480px

## Asset Management
- **Images**: External Unsplash URLs (no local assets)
- **Icons**: Inline SVG elements
- **Fonts**: System font stack (ui-serif, Georgia)
- **No Dependencies**: Pure HTML/CSS implementation