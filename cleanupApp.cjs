const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appPath, 'utf8');
let lines = content.split('\n');

// Find the handleClearForm end
const handleClearFormEnd = lines.findIndex(l => l.trim() === '};' && lines[lines.indexOf(l)-1].includes('setErrorMsg("");'));

// Find the return statements of the component
// This is right before Navigation, we already replaced Navigation with <Navbar />
// Wait, the new components are <Navbar /> and <HeroSection />
const navIndex = lines.findIndex(l => l.includes('<Navbar />'));

if (handleClearFormEnd !== -1 && navIndex !== -1) {
    // Delete everything between handleClearFormEnd + 1 and navIndex - 1 (which includes the return ( and wrapper div)
    // Wait, we need the `return (` and `<div className="...` to remain!
    // Let's find `return (` searching backwards from navIndex
    let returnLineIdx = -1;
    for (let i = navIndex; i > handleClearFormEnd; i--) {
        if (lines[i].includes('return (')) {
            returnLineIdx = i;
            break;
        }
    }
    
    if (returnLineIdx !== -1) {
        // Delete from handleClearFormEnd + 1 up to returnLineIdx - 1
        lines.splice(handleClearFormEnd + 1, returnLineIdx - handleClearFormEnd - 1);
    }
}

fs.writeFileSync(appPath, lines.join('\n'));
console.log("App.jsx cleaned up.");
