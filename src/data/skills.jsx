import { FaHtml5, FaJs, FaReact, FaNodeJs, FaJava, FaLinux, FaCloud, FaCss3Alt, FaGithub, FaGit } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMysql, SiMariadb, SiPrisma, SiJest, SiExpress, SiSequelize, SiDocker, SiPostman, SiFigma, SiNpm, SiPostgresql, SiMongodb, SiSqlite, SiNetlify } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const skills = [
  // Linguagens
  { name: "JavaScript", category: "Linguagens", icon: <FaJs />, color: "#F7DF1E" },
  { name: "TypeScript", category: "Linguagens", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Java", category: "Linguagens", icon: <FaJava />, color: "#007396" },

  // Frontend
  { name: "React", category: "Frontend", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", icon: <SiNextdotjs />, color: "#000000" },
  { name: "HTML5", category: "Frontend", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", category: "Frontend", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss />, color: "#06B6D4" },

  // Backend & APIs
  { name: "Node.js", category: "Backend & APIs", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express.js", category: "Backend & APIs", icon: <SiExpress />, color: "#000000" },
  { name: "RESTful APIs", category: "Backend & APIs", icon: <SiExpress />, color: "#FF6C37" },
  { name: "Prisma ORM", category: "Backend & APIs", icon: <SiPrisma />, color: "#2D3748" },
  { name: "Sequelize", category: "Backend & APIs", icon: <SiSequelize />, color: "#52B0E7" },

  // Banco de Dados
  { name: "MySQL", category: "Banco de Dados", icon: <SiMysql />, color: "#4479A1" },
  { name: "PostgreSQL", category: "Banco de Dados", icon: <SiPostgresql />, color: "#336791" },
  { name: "MongoDB", category: "Banco de Dados", icon: <SiMongodb />, color: "#47A248" },
  { name: "MariaDB", category: "Banco de Dados", icon: <SiMariadb />, color: "#003545" },
  { name: "SQLite", category: "Banco de Dados", icon: <SiSqlite />, color: "#003B57" },

  // Ferramentas & DevOps
  { name: "Git", category: "Ferramentas & DevOps", icon: <FaGit />, color: "#F05032" },
  { name: "GitHub", category: "Ferramentas & DevOps", icon: <FaGithub />, color: "#181717" },
  { name: "Docker", category: "Ferramentas & DevOps", icon: <SiDocker />, color: "#2496ED" },
  { name: "Netlify", category: "Ferramentas & DevOps", icon: <SiNetlify />, color: "#00C7B7" },
  { name: "Jest", category: "Ferramentas & DevOps", icon: <SiJest />, color: "#C21325" },
  { name: "Postman", category: "Ferramentas & DevOps", icon: <SiPostman />, color: "#FF6C37" },
  { name: "VS Code", category: "Ferramentas & DevOps", icon: <VscVscode />, color: "#007ACC" },
  { name: "NPM", category: "Ferramentas & DevOps", icon: <SiNpm />, color: "#CB3837" },

  // Suporte & Infraestrutura
  { name: "Linux", category: "Suporte & Infraestrutura", icon: <FaLinux />, color: "#FCC624" },
  { name: "Cloud", category: "Suporte & Infraestrutura", icon: <FaCloud />, color: "#4285F4" },
  { name: "Figma", category: "Suporte & Infraestrutura", icon: <SiFigma />, color: "#F24E1E" },
];

export const skillCategories = {
  Linguagens: skills.filter((skill) => skill.category === "Linguagens"),
  Frontend: skills.filter((skill) => skill.category === "Frontend"),
  "Backend & APIs": skills.filter((skill) => skill.category === "Backend & APIs"),
  "Banco de Dados": skills.filter((skill) => skill.category === "Banco de Dados"),
  "Ferramentas & DevOps": skills.filter((skill) => skill.category === "Ferramentas & DevOps"),
  "Suporte & Infraestrutura": skills.filter((skill) => skill.category === "Suporte & Infraestrutura"),
};
