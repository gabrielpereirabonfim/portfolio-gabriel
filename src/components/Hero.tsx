
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Engenheiro de Dados';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="text-center px-6 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          Gabriel Bonfim
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 h-12">
          {displayText}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transformo dados em insights poderosos com pipelines eficientes, arquitetura escalável e soluções inteligentes.
        </p>
        
        <div className="flex gap-4 justify-center items-center mb-12">
          <a href="https://github.com/gabrielpereirabonfim"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-600 rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <Github className="w-6 h-6 text-white" />
          </a>
          <a href="https://www.linkedin.com/in/gabrielpbonfim/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-600 rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        </div>

        <button 
          onClick={() => scrollToSection('sobre')}
          className="text-white hover:text-gray-300 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
