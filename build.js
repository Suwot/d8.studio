const fs = require("fs");

const sections = [
  "header.html",
  "hero.html",
  "services.html",
  "interior-showcase.html",
  "location-benefits.html",
  "reviews.html",
  "contact.html",
  "footer.html",
];

console.log("🚀 Building website...");

let bodyContent = "";

// Read and combine HTML sections
sections.forEach((sectionFile) => {
  const sectionPath = `sections/${sectionFile}`;
  if (fs.existsSync(sectionPath)) {
    let content = fs.readFileSync(sectionPath, "utf8");

    // Extract content between body tags
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      bodyContent += bodyMatch[1].trim() + "\n\n";
    }

    console.log(`✅ Added ${sectionFile}`);
  } else {
    console.log(`⚠️  Missing ${sectionFile}`);
  }
});

// Create final HTML
const html = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D8 Studio - Аренда Фотостудии Москва | 13 этаж с панорамными окнами</title>
    <meta name="description" content="Премиум фотостудия на 13 этаже с панорамными окнами. Аренда студии, фото/видео съемка, дополнительные услуги.">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
${bodyContent.trim()}

<script src="script.js"></script>
</body>
</html>`;

// Write HTML file to root
fs.writeFileSync("index.html", html);

// Show results
const stats = fs.statSync("index.html");
const sizeKB = (stats.size / 1024).toFixed(2);

console.log(`✅ Build complete! (${sizeKB} KB)`);
console.log(`🌐 Open index.html in your browser`);
