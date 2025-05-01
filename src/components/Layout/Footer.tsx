import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              João Pedro Plinta
            </h3>
            <p className="text-gray-400 mt-1">Desenvolvedor Full Stack</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/joaopedroplinta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/joao-pedro-plinta/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:joaopedrohenriqueplinta@gmail.com" 
              target="_blank"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} João Pedro Plinta. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;