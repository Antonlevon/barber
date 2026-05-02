const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Create dist/tg-mini-app directory
const destDir = path.join(__dirname, 'dist', 'tg-mini-app');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy tg-mini-app/dist/* to dist/tg-mini-app/
const srcDir = path.join(__dirname, 'tg-mini-app', 'dist');
copyRecursiveSync(srcDir, destDir);

console.log('✓ Telegram Mini App copied to dist/tg-mini-app/');
