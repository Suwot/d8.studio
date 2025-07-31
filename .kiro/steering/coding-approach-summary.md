# D8 Studio - Clean Coding Approach Summary

## Architecture Philosophy

**Single Source of Truth**: All styles consolidated in one `styles.css` file, no scattered CSS across multiple files or embedded in HTML sections.

**Modular HTML Sections**: Each website section is a separate, clean HTML file containing only semantic markup - no embedded CSS or JavaScript.

**Minimal JavaScript**: Single `script.js` file with only essential functionality - no bloated frameworks or unnecessary complexity.

## File Structure

```
├── /sections/          # Pure HTML sections (no CSS/JS)
├── styles.css         # ALL styles in one file
├── script.js          # Minimal functionality
├── build.js           # Simple concatenation script
└── /build/            # Production files
```

## Build Process

1. **HTML Concatenation**: Extracts content from `<body>` tags in each section file and combines into single HTML
2. **Asset Copying**: Copies `styles.css`, `script.js`, and `images/` to build directory
3. **No Processing**: No minification, compilation, or complex transformations - just clean concatenation

## CSS Organization

- **Base Styles**: Reset, typography, containers
- **Components**: Buttons, cards, forms with consistent naming
- **Sections**: Specific styles for header, hero, services, etc.
- **Utilities**: Spacing, colors, responsive helpers
- **Responsive**: Mobile-first approach with clear breakpoints

## Key Principles

- **No Duplication**: Each style defined once, reused everywhere
- **Consistent Naming**: Clear, semantic class names following BEM-like patterns
- **Clean Separation**: HTML structure, CSS presentation, JS behavior completely separated
- **Production Ready**: Build output is immediately deployable without additional processing

## Missing Styles Resolution

When styles appear broken:
1. Check if classes exist in `styles.css`
2. Verify all styles are in the main file (not scattered in `assets/` folders)
3. Rebuild with `node build.js` to copy updated styles
4. Ensure consistent class naming between HTML sections and CSS

This approach prioritizes maintainability, simplicity, and clean separation of concerns over complex build systems.