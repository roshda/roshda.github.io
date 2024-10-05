const fs = require('fs');
const path = require('path');

// Recursively go through all HTML files in the 'out' folder
function processFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      processFiles(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');

      // Replace absolute paths with relative ones
      content = content.replace(/href="\/_next/g, 'href="./_next')
                       .replace(/src="\/_next/g, 'src="./_next');

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed paths in: ${filePath}`);
    }
  });
}

// Process the 'out' directory
const outDir = path.join(__dirname, 'out');
processFiles(outDir);
