const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appPath, 'utf8');
let lines = content.split('\n');

// 1. Add new imports right after the work image import
const importIndex = lines.findIndex(l => l.includes('import trabalho from "/trabalho.jpeg";'));
if (importIndex !== -1) {
    const newImports = [
        'import { Navbar } from "./components/layout/Navbar";',
        'import { HeroSection } from "./components/sections/HeroSection";',
        'import { projects } from "./data/projects";',
        'import { skills, skillCategories } from "./data/skills";'
    ];
    lines.splice(importIndex + 1, 0, ...newImports);
}

// Re-evaluate lines after splicing
const isVisibleLine = lines.findIndex(l => l.includes('const [isVisible, setIsVisible] = useState({});'));
const navLine = lines.findIndex(l => l.includes('{/* Navigation */}'));
const heroEndLine = lines.findIndex(l => l.includes('</section>') && l.includes('home'));

// We know the structure.
// Remove everything from `isVisible` state all the way down to just before `return (`
const returnLine = lines.findIndex((l, idx) => idx > isVisibleLine && l.includes('return ('));
if (isVisibleLine !== -1 && returnLine !== -1) {
    lines.splice(isVisibleLine, returnLine - isVisibleLine);
}

// Now replace the <nav> and <section id="home"> with the new components
const newNavLine = lines.findIndex(l => l.includes('{/* Navigation */}'));
// Look for the first </section> after newNavLine
const newHeroEndLine = lines.findIndex((l, idx) => idx > newNavLine && l.includes('</section>'));

if (newNavLine !== -1 && newHeroEndLine !== -1) {
    lines.splice(newNavLine, newHeroEndLine - newNavLine + 1, 
        '      <Navbar />',
        '      <HeroSection />'
    );
}

fs.writeFileSync(appPath, lines.join('\n'));
console.log("App.jsx updated successfully.");
