# Technology Stack

## Frontend Architecture
- **Type**: Static HTML/CSS website
- **Language**: HTML5 with semantic markup
- **Styling**: Pure CSS3 (no frameworks)
- **Responsive**: Mobile-first responsive design
- **Browser Support**: Modern browsers with CSS Grid and Flexbox

## Build System
- **Deployment**: Static file hosting (no build process required)
- **Assets**: Direct file references (images, fonts)
- **No bundling**: Direct CSS and HTML files

## Styling Approach
- **CSS Architecture**: Component-based organization
- **Design System**: Custom CSS variables and utility classes
- **Typography**: ui-serif font stack (Georgia fallback)
- **Color Palette**: Neutral tones (grays, stones) with accent colors
- **Layout**: CSS Grid and Flexbox for responsive layouts

## Key CSS Features
- CSS Grid for complex layouts (pricing cards, feature grids)
- Flexbox for component alignment
- CSS transforms and transitions for hover effects
- Backdrop-filter for glass morphism effects
- CSS gradients for visual depth
- Custom properties for consistent spacing and colors

## Performance Considerations
- Optimized images (external Unsplash URLs)
- Minimal CSS with efficient selectors
- No JavaScript dependencies
- Fast loading static assets

## Development Commands
```bash
# No build process - direct file editing
# Serve locally for development
python -m http.server 8000
# or
npx serve .
```

## File Structure
- `index.html` - Main page with all sections
- `styles.css` - Complete stylesheet
- Assets referenced externally (Unsplash images)