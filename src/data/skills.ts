export interface Skill {
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "database" | "tools" | "languages";
}

const skills: Skill[] = [
  // Frontend
  { name: "React", level: 5, category: "frontend" },
  { name: "TypeScript", level: 4, category: "frontend" },
  { name: "JavaScript", level: 4, category: "frontend" },
  { name: "HTML5", level: 5, category: "frontend" },
  { name: "CSS3", level: 5, category: "frontend" },
  { name: "TailwindCSS", level: 4, category: "frontend" },
  { name: "React Native", level: 4, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 4, category: "backend" },
  { name: "Express", level: 3, category: "backend" },
  { name: "Python", level: 4, category: "backend" },
  { name: "Django", level: 3, category: "backend" },
  { name: "PHP", level: 2, category: "backend" },
  
  // Database
  { name: "MySQL", level: 4, category: "database" },
  { name: "MongoDB", level: 3, category: "database" },
  { name: "PostgreSQL", level: 4, category: "database" },
  
  // Tools
  { name: "Git", level: 4, category: "tools" },
  { name: "Docker", level: 3, category: "tools" },
  { name: "VS Code", level: 5, category: "tools" },
  { name: "Figma", level: 3, category: "tools" },
  { name: "Linux", level: 4, category: "tools" },
  
  // Languages
  { name: "Java", level: 3, category: "languages" },
  { name: "C/C++", level: 3, category: "languages" }
];

export default skills;