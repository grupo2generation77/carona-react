import { FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
          <FaUsers className="text-blue-600" /> Sobre Nós
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Somos uma equipe apaixonada pelo desenvolvimento de software e estamos criando uma aplicação de caronas para aprimorar nossas habilidades.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="shadow-lg p-6 bg-white rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Nossa Missão</h2>
          <p className="text-gray-600">
            Criar soluções intuitivas e eficientes para facilitar a mobilidade urbana e promover o compartilhamento de caronas.
          </p>
        </div>
        <div className="shadow-lg p-6 bg-white rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Tecnologias</h2>
          <p className="text-gray-600">
            Utilizamos React, TypeScript, Tailwind CSS e diversas bibliotecas para criar uma experiência moderna e responsiva.
          </p>
        </div>
      </motion.div>

      <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Entre em Contato
      </button>
    </div>
  );
};

export default AboutUs;