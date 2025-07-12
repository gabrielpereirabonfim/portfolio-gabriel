
import React from 'react';
import { Database, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-800 py-8 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Database className="w-6 h-6 text-white" />
            <span className="text-white font-semibold">Portfolio de Engenharia de Dados e Visualização</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>por Gabriel Bonfim</span>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm mt-4 pt-4 border-t border-gray-800">
          © 2025 Gabriel Bonfim. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
