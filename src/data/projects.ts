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
    image: "https://github.com/joaopedroplinta/projeto-final-web/raw/main/frontend/src/assets/logo.png",
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
    image: "https://programandomais.wordpress.com/wp-content/uploads/2013/10/url.jpg",
    technologies: ["C", "Lex"],
    githubUrl: "https://github.com/joaopedroplinta/analisador-lexico"
  },
  {
    id: 6,
    title: "Modelo Mnist CNN Classifier",
    description: "Este projeto implementa uma rede neural convolucional (CNN) para reconhecer dígitos manuscritos utilizando o dataset MNIST. O modelo é desenvolvido em TensorFlow/Keras, e inclui callbacks de Early Stopping e Model Checkpoint para garantir o melhor desempenho possível durante o treinamento.",
    image: "https://cdn.botpenguin.com/assets/website/MNIST_Dataset_3f291ce69e.webp",
    technologies: ["Python", "TensorFlow", "Keras"],
    githubUrl: "https://github.com/joaopedroplinta/modelo_mnist"
  },
  {
    id: 7,
    title: "NumVision",
    description: "Aplicação fullstack que permite desenhar dígitos em um canvas e classificá-los usando um modelo CNN treinado no MNIST.",
    image: "https://github.com/joaopedroplinta/NumVision/raw/main/img/numvision.png",
    technologies: ["React", "TypeScript", "TailwindCSS", "Python", "TensorFlow", "Keras", "FastAPI"],
    githubUrl: "https://github.com/joaopedroplinta/NumVision"
  },
  {
    id: 8,
    title: "Algoritmo Simplex Duas Fases",
    description: "Implementação do Algoritmo Simplex de Duas Fases em Python para resolver problemas de programação linear que envolvem variáveis de folga, excesso e artificiais.",
    image: "https://preview.redd.it/herramienta-gratuita-para-resolver-problemas-de-v0-2i1tbirztmrf1.jpg?width=640&crop=smart&auto=webp&s=ed276b018ea97918767a2785d41313a128d96e27",
    technologies: ["Python"],
    githubUrl: "https://github.com/joaopedroplinta/simplex-duas-fases"
  }
];

export default projects;