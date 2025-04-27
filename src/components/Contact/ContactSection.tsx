import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-primary-500 mb-2">ENTRE EM CONTATO</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark mb-4">Vamos Conversar</h3>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-50 rounded-xl p-8 shadow-md">
            <h4 className="text-2xl font-bold text-dark mb-6">Informações de Contato</h4>
            <p className="text-gray-600 mb-8">
              Estou disponível para novas oportunidades, projetos freelance ou apenas para trocar ideias sobre tecnologia.
              Entre em contato comigo através dos canais abaixo:
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <MapPin className="text-primary-500" size={20} />
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Localização</h5>
                  <p className="text-gray-600">São José dos Pinhais, Paraná, Brasil</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Mail className="text-primary-500" size={20} />
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Email</h5>
                  <a 
                    href="mailto:joaopedrohenriqueplinta@gmail.com" 
                    className="text-gray-600 hover:text-primary-500 transition-colors"
                  >
                    joaopedrohenriqueplinta@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="font-semibold mb-3">Me siga nas redes sociais:</h5>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/joaopedroplinta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/joao-pedro-plinta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;