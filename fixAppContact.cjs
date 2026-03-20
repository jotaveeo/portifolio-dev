const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appPath, 'utf8');
let lines = content.split('\n');

const startIndex = lines.findIndex(l => l.includes('{/* Contact Section */}'));
const endIndex = lines.findIndex(l => l.includes('{/* Footer */}'));

if (startIndex !== -1 && endIndex !== -1) {
  const before = lines.slice(0, startIndex);
  const after = lines.slice(endIndex);
  
  const newLines = [
    ...before,
    '      <ContactSection />',
    '',
    ...after
  ];
  
  fs.writeFileSync(appPath, newLines.join('\n'));
  console.log('App.jsx limpo: de ' + startIndex + ' até ' + endIndex + ' substituído por <ContactSection />');
} else {
  console.log('Não encontrou os comentários de marcação!');
}
