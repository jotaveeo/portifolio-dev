const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appPath, 'utf8');

// 1. Inserir import da ContactSection logo depois da HeroSection
let lines = content.split('\n');
const heroImportIndex = lines.findIndex(l => l.includes('import { HeroSection }'));
if (heroImportIndex !== -1) {
    if (!content.includes('import { ContactSection }')) {
        lines.splice(heroImportIndex + 1, 0, 'import { ContactSection } from "./components/sections/ContactSection";');
    }
}
content = lines.join('\n');

// 2. Apagar toda a parte do formulário contato (useState relacionados a form e functions handleContact)
content = content.replace(/const \[formData, setFormData[^]+?const handleContactSubmit = \(e\) => \{[^]+?handleClearForm[^]+?\};/g, '// Contact states & handlers movidos para ContactSection.jsx');
content = content.replace(/const handleClearForm = \(\) => \{[^]+?\};/g, '');

// 3. Substituir a section "contact" inteira por <ContactSection />
const sectionRegex = /<section id="contact" className="py-20 relative">[^]+?<\/section>/;
content = content.replace(sectionRegex, '<ContactSection />');

fs.writeFileSync(appPath, content);
console.log('App.jsx atualizado com ContactSection!');
