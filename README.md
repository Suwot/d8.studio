# D8 Studio Website

Clean, modular website build system.

## Structure

```
├── build/                  # 🎯 PRODUCTION FILES
│   ├── index.html          # Final HTML file
│   ├── styles.css          # Final CSS file
│   └── images/             # Website images
├── sections/               # HTML sections (clean HTML only)
│   ├── header.html
│   ├── hero.html
│   ├── services.html
│   ├── interior-showcase.html
│   ├── location-benefits.html
│   ├── reviews.html
│   ├── contact.html
│   └── footer.html
├── assets/css/             # Base CSS
│   └── main.css
├── images/                 # Source images
└── build.js               # Build script
```

## Usage

### To build the website:
```bash
node build.js
```

### To view the website:
Open `build/index.html` in your browser

## How it works

1. **Sections**: Each HTML section contains only clean HTML (no embedded CSS/JS)
2. **Single CSS**: All styles are in one `styles.css` file
3. **Single JS**: Minimal functionality in one `script.js` file
4. **Simple Build**: Concatenates HTML sections into production file

## Build Output

- **HTML**: `build/index.html` (clean structure)
- **CSS**: `build/styles.css` (all styles combined)
- **JS**: `build/script.js` (minimal functionality)
- **Images**: `build/images/` (organized by category)

## Development Workflow

1. Edit individual sections in `/sections/` folder (pure HTML)
2. Edit styles in `styles.css` (all styles in one file)
3. Edit functionality in `script.js` (minimal JS)
4. Run `node build.js` to generate production files
5. Test with `build/index.html`

## Adding YClients Widget

Replace booking buttons in sections with your YClients widget code, then rebuild.

Booking buttons are in:
- `sections/header.html`
- `sections/hero.html` 
- `sections/services.html`
- `sections/interior-showcase.html`
- `sections/contact.html`