
import React, { useState } from 'react';
import { ExternalLink, Github, Database, Cloud, Zap, BarChart3, Brain, Globe } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      title: 'Real-time Analytics Pipeline',
      description: 'Pipeline de dados em tempo real usando Apache Kafka, Spark Streaming e Elasticsearch para análise de eventos de e-commerce.',
      image: '/placeholder.svg',
      technologies: ['Apache Kafka', 'Spark Streaming', 'Elasticsearch', 'AWS'],
      github: '#',
      demo: '#',
      icon: Zap
    },
    {
      title: 'Data Lake Architecture',
      description: 'Arquitetura completa de Data Lake na AWS com processamento batch e streaming, serving 10TB+ de dados diários.',
      image: '/placeholder.svg',
      technologies: ['AWS S3', 'Apache Spark', 'Airflow', 'Redshift'],
      github: '#',
      demo: '#',
      icon: Database
    },
    {
      title: 'MLOps Data Platform',
      description: 'Plataforma de MLOps com pipelines automatizados para feature engineering, treinamento e deployment de modelos.',
      image: '/placeholder.svg',
      technologies: ['MLflow', 'Kubernetes', 'Apache Airflow', 'GCP'],
      github: '#',
      demo: '#',
      icon: Cloud
    },
    {
      title: 'Business Intelligence Dashboard',
      description: 'Dashboard interativo para análise de métricas de negócio com visualizações em tempo real e relatórios automatizados.',
      image: '/placeholder.svg',
      technologies: ['Power BI', 'SQL Server', 'Python', 'Azure'],
      github: '#',
      demo: '#',
      icon: BarChart3
    },
    {
      title: 'Fraud Detection System',
      description: 'Sistema de detecção de fraudes utilizando machine learning e processamento de dados em tempo real.',
      image: '/placeholder.svg',
      technologies: ['TensorFlow', 'Apache Kafka', 'Redis', 'Docker'],
      github: '#',
      demo: '#',
      icon: Brain
    },
    {
      title: 'Data Warehouse Migration',
      description: 'Migração completa de data warehouse legacy para arquitetura moderna em nuvem com zero downtime.',
      image: '/placeholder.svg',
      technologies: ['Snowflake', 'DBT', 'Terraform', 'AWS'],
      github: '#',
      demo: '#',
      icon: Globe
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projetos" className="min-h-screen py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
          Projetos
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedProjects.map((project, index) => (
            <div key={index} className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 border border-gray-800 hover:border-gray-600">
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <project.icon className="w-16 h-16 text-gray-400 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs group-hover:bg-gray-700 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-gray-600 hover:border-gray-400"
            >
              {showAll ? 'Ver Menos' : 'Ver Mais'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
