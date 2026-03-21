const fs = require('fs');
const path = require('path');

const b64 = fs.readFileSync(path.join(__dirname, 'image', 'profile.png')).toString('base64');
const dataUrl = 'data:image/png;base64,' + b64;

let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
html = html.replace(/src="image\/profile\.png"/, 'src="' + dataUrl + '"');
fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');

console.log('Done! img src replaced with Base64. dataUrl length:', dataUrl.length);
