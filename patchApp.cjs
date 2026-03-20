const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(file, 'utf8');

const target = '    setErrorMsg("");\r\n  };\r\n';
const target2 = '    setErrorMsg("");\n  };\n';

const insertBlock = `
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Insira suas chaves do EmailJS aqui (Service ID, Template ID e Public Key)
    // Infelizmente essas chaves não estavam comitadas no git e foram perdidas.
    emailjs
      .sendForm(
        "service_ID_AQUI", 
        "template_ID_AQUI",
        e.target,
        "public_key_AQUI"
      )
      .then(
        (result) => {
          setIsSent(true);
          setIsLoading(false);
          handleClearForm();
        },
        (error) => {
          setErrorMsg("Ocorreu um erro ao enviar. Verifique o console ou tente novamente.");
          setIsLoading(false);
          console.error(error);
        }
      );
  };

  const handleClearForm = () => {
    setFormData({
      from_name: "",
      to_name: "João Vitor Oliveira",
      email: "",
      subject: "",
      message: "",
      reply_to: "",
    });
    setErrorMsg("");
  };
`;

if (content.includes(target)) {
    content = content.replace(target, target + insertBlock);
} else if (content.includes(target2)) {
    content = content.replace(target2, target2 + insertBlock);
} else {
    // fallback, insert before return (
    content = content.replace('  return (', insertBlock + '\\n  return (');
}

fs.writeFileSync(file, content);
console.log("Restored form handlers.");
