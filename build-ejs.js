const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'views');
const buildDir = path.join(__dirname, 'build');

// Find and render the index.ejs file
const indexPath = path.join(viewsDir, 'index.ejs');
ejs.renderFile(indexPath, {}, (err, html) => {
  if (err) {
    console.error('Error rendering index.ejs:', err);
    process.exit(1);
  }

  // Write HTML output to build directory
  fs.writeFile(path.join(buildDir, 'index.html'), html, (err) => {
    if (err) {
      console.error('Error writing index.html:', err);
      process.exit(1);
    }
    console.log('index.html built successfully.');
  });
});
