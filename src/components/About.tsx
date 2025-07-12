
import React from 'react';
import { Database, Cloud, Code, BarChart3, Server, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Database, name: 'SQL & NoSQL', level: 95 },
    { icon: Code, name: 'Python', level: 90 },
    { icon: Zap, name: 'Apache Airflow', level: 90 },
    { icon: BarChart3, name: 'Modelagem de Dados', level: 95 },
    { icon: Server, name: 'Docker / K8s', level: 82 },
    { icon: Zap, name: 'Apache Kafka', level: 80 },
  ];

  return (
    <section id="sobre" className="min-h-screen py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
            Sobre Mim
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-base text-gray-300 leading-relaxed">
                Atuo em todo o ciclo de dados, da extração à visualização,
                integrando diversas fontes, como APIs REST, servidores SFTP
                e arquivos estruturados e semiestruturados. Entrego dashboards
                executivos com Power BI, Tableau e Excel.
              </p>
              <p className="text-base text-gray-300 leading-relaxed">
                Tenho experiência prática com Python, SQL, ETL/ELT, Apache Airflow e modelagem de dados.
                Expertise em design de data warehouses, otimização de performance e adaptação de pipelines em ambientes on-premise e cloud. 
                Pós-graduado em Inteligência Artificial e autor do livro Pensando em Python: Soluções Inteligentes para Seus Problemas.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Modelagem de Dados', 'ETL/ELT', 'Data Warehousing', 'Apache Airflow', 'Python'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Principais Skills</h3>
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-gray-400 to-white h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
