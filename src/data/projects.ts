export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Bate-Papo",
    description: "Este é um projeto de um sistema de bate-papo distribuído, desenvolvido para fins educacionais e de aprendizado sobre sistemas distribuídos.",
    image: "https://academiatech.s3.amazonaws.com/wp-content/uploads/2023/09/homem-pc-12092023-6502660f29283.webp",
    technologies: ["C++"],
    githubUrl: "https://github.com/joaopedroplinta/projeto_bate_papo"
  },
  {
    id: 2,
    title: "Sistema de Notas",
    description: "Sistema de notas para especialistas, onde os usuários podem criar, visualizar e excluir suas anotações.",
    image: "https://static.vecteezy.com/ti/fotos-gratis/p1/3046456-close-up-de-homem-maos-escrevendo-no-bloco-de-notas-gratis-foto.jpg",
    technologies: ["React", "TypeScript", "TailwindCSS", "PostCSS"],
    githubUrl: "https://github.com/joaopedroplinta/nlw-expert-notes",
    liveUrl: "https://nlw-expert-notes-sepia.vercel.app/"
  },
  {
    id: 3,
    title: "FinanTrack",
    description: "Aplicação de Finanças",
    image: "https://www.totvs.com/wp-content/uploads/2024/04/dashboard-financeiro.jpg",
    technologies: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express", "MySQL"],
    githubUrl: "https://github.com/joaopedroplinta/projeto-final-web",
  },
  {
    id: 4,
    title: "Algoritmo de Eleição Distribuída",
    description: "Este projeto implementa um algoritmo de eleição distribuída em C++. O objetivo é simular um sistema distribuído onde processos elegem um coordenador e monitoram sua atividade.",
    image: "https://pt-static.z-dn.net/files/dcb/f6acae6751b7ab00a60d2e35dd73bfd2.png",
    technologies: ["C++"],
    githubUrl: "https://github.com/joaopedroplinta/algoritimo_eleicao",
  },
  {
    id: 5,
    title: "Análise Léxica",
    description: "consiste na implementação de um analisador léxico utilizando a ferramenta Flex, como parte da disciplina de Linguagens Formais e Autômatos. O objetivo é processar e validar a estrutura léxica de códigos escritos na linguagem C--",
    image: "https://matriculas.estacio.br/blog/wp-content/uploads/2019/08/ciencia-da-computacao-o-que-se-aprende-faculdade-estacio.jpg",
    technologies: ["C", "Lex"],
    githubUrl: "https://github.com/joaopedroplinta/analisador-lexico"
  }
];

export default projects;