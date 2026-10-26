const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const out = path.join(root, 'dist');
fs.mkdirSync(out, { recursive: true });
for (const name of ['index.html', 'app.js', 'styles.css', 'README.md', 'docs']) {
  fs.cpSync(path.join(root, name), path.join(out, name), { recursive: true });
}
console.log('Production static build written to dist/.');
