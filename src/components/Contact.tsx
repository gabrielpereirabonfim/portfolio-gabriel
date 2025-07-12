
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="min-h-screen py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
          Contato
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Vamos conversar sobre dados?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Valorizo a conexão com profissionais para explorar projetos interessantes, parcerias e desafios em engenharia de dados.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:getnamegabriel@gmail.com" className="text-white hover:text-gray-300 transition-colors duration-300">
                    getnamegabriel@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Telefone</p>
                  <a href="tel:+5561983603335" className="text-white hover:text-gray-300 transition-colors duration-300">
                    +55 (61) 98360-3335
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Localização</p>
                  <p className="text-white">Brasília, Brasil</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-8">
              <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-300"
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-300"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-300 resize-none"
                placeholder="Sua mensagem..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
